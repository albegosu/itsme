<template>
  <div class="contrib">
    <div class="contrib__head">
      <div>
        <p class="card__label">GitHub</p>
        <p class="card__title">
          <template v-if="pending || error">Last 12 months</template>
          <template v-else>{{ formattedTotal }} contributions in the last year</template>
        </p>
      </div>
      <a
        :href="projectUrl"
        target="_blank"
        rel="noopener noreferrer"
        class="card__link contrib__roadmap"
      >
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"/><rect x="9" y="3" width="6" height="4" rx="1"/><path d="M9 12h6M9 16h4"/></svg>
        Public roadmap
      </a>
    </div>

    <div v-if="pending" class="contrib__scroll" aria-hidden="true">
      <div class="contrib__weekdays">
        <span /><span>Mon</span><span /><span>Wed</span><span /><span>Fri</span><span />
      </div>
      <div class="contrib__grid contrib__grid--skeleton">
        <span v-for="n in 371" :key="n" class="contrib__cell contrib__cell--l0" />
      </div>
    </div>

    <p v-else-if="error" class="contrib__fallback">
      Couldn’t load the contribution calendar.
      <a href="https://github.com/albegosu" target="_blank" rel="noopener noreferrer">See it on GitHub</a>
    </p>

    <div v-else class="contrib__scroll">
      <div class="contrib__plot">
        <div class="contrib__months" aria-hidden="true">
          <span
            v-for="(label, i) in monthLabels"
            :key="i"
            class="contrib__month"
          >{{ label }}</span>
        </div>
        <div class="contrib__body">
          <div class="contrib__weekdays" aria-hidden="true">
            <span /><span>Mon</span><span /><span>Wed</span><span /><span>Fri</span><span />
          </div>
          <div class="contrib__grid" role="img" :aria-label="summary">
            <template v-for="(week, wi) in weeks" :key="wi">
              <button
                v-for="(day, di) in week"
                :key="`${wi}-${di}`"
                type="button"
                class="contrib__cell"
                :class="[
                  `contrib__cell--l${day.date ? day.level : 'empty'}`,
                  { 'contrib__cell--pad': !day.date },
                ]"
                :tabindex="day.date ? 0 : -1"
                :aria-label="day.date ? dayLabel(day) : undefined"
                :aria-hidden="day.date ? undefined : 'true'"
                @mouseenter="day.date && showTip($event, day)"
                @focus="day.date && showTip($event, day)"
                @mouseleave="hideTip"
                @blur="hideTip"
              />
            </template>
          </div>
        </div>
      </div>
    </div>

    <div class="contrib__footer">
      <a
        href="https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-github-profile/managing-contribution-settings-on-your-profile/why-are-my-contributions-not-showing-up-on-my-profile"
        target="_blank"
        rel="noopener noreferrer"
        class="contrib__learn"
      >
        Learn how GitHub counts contributions
      </a>
      <div class="contrib__legend" aria-hidden="true">
        <span>Less</span>
        <span class="contrib__cell contrib__cell--l0" />
        <span class="contrib__cell contrib__cell--l1" />
        <span class="contrib__cell contrib__cell--l2" />
        <span class="contrib__cell contrib__cell--l3" />
        <span class="contrib__cell contrib__cell--l4" />
        <span>More</span>
      </div>
    </div>

    <div
      v-if="tip"
      class="contrib__tip"
      role="tooltip"
      :style="{ left: `${tip.x}px`, top: `${tip.y}px` }"
    >
      {{ tip.text }}
    </div>
  </div>
</template>

<script setup lang="ts">
type Level = 0 | 1 | 2 | 3 | 4

interface ContributionDay {
  date: string
  count: number
  level: Level
}

interface ContributionsResponse {
  total: Record<string, number>
  contributions: ContributionDay[]
}

const { public: { githubProjectUrl } } = useRuntimeConfig()
const projectUrl = githubProjectUrl
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

const { data, pending, error } = useFetch<ContributionsResponse>(
  'https://github-contributions-api.jogruber.de/v4/albegosu',
  {
    query: { y: 'last' },
    key: 'github-contributions-albegosu',
    server: false,
  },
)

const total = computed(() => data.value?.total?.lastYear ?? 0)
const formattedTotal = computed(() => total.value.toLocaleString('en-US'))

const summary = computed(() =>
  `${formattedTotal.value} contributions in the last year on GitHub`,
)

const weeks = computed(() => {
  const days = data.value?.contributions ?? []
  if (!days.length) return [] as ContributionDay[][]

  const padded: ContributionDay[] = []
  const first = parseDay(days[0].date)
  for (let i = 0; i < first.getDay(); i++) {
    padded.push({ date: '', count: 0, level: 0 })
  }
  padded.push(...days)

  const result: ContributionDay[][] = []
  for (let i = 0; i < padded.length; i += 7) {
    const week = padded.slice(i, i + 7)
    while (week.length < 7) week.push({ date: '', count: 0, level: 0 })
    result.push(week)
  }
  return result
})

const monthLabels = computed(() => {
  const labels: string[] = []
  let last = ''
  for (const week of weeks.value) {
    const named = week.find(d => d.date && parseDay(d.date).getDate() === 1)
      || week.find(d => d.date)
    if (!named) {
      labels.push('')
      continue
    }
    const month = MONTHS[parseDay(named.date).getMonth()]
    const startsMonth = week.some(d => d.date && parseDay(d.date).getDate() === 1)
    if ((labels.length === 0 || startsMonth) && month !== last) {
      labels.push(month)
      last = month
    } else {
      labels.push('')
    }
  }
  return labels
})

const tip = ref<{ text: string; x: number; y: number } | null>(null)

function parseDay(iso: string) {
  return new Date(`${iso}T00:00:00`)
}

function dayLabel(day: ContributionDay) {
  const when = parseDay(day.date).toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })
  const n = day.count === 1 ? '1 contribution' : `${day.count} contributions`
  return `${n} on ${when}`
}

function showTip(event: Event, day: ContributionDay) {
  const el = event.currentTarget as HTMLElement
  const rect = el.getBoundingClientRect()
  tip.value = {
    text: dayLabel(day),
    x: rect.left + rect.width / 2,
    y: rect.top - 8,
  }
}

function hideTip() {
  tip.value = null
}
</script>

<style scoped>
.contrib__head {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 12px;
  margin-bottom: 12px;
}

.contrib__roadmap {
  flex-shrink: 0;
  margin-top: 2px;
  border-top: 0;
  padding-top: 0;
}

.contrib__scroll {
  overflow-x: auto;
  overflow-y: hidden;
  scrollbar-width: none;
  margin: 0 -4px;
  padding: 0 4px 4px;
}

.contrib__scroll::-webkit-scrollbar {
  display: none;
}

.contrib__plot {
  display: inline-flex;
  flex-direction: column;
  min-width: 100%;
}

.contrib__months {
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 13px;
  margin-left: 30px;
  margin-bottom: 4px;
  height: 14px;
}

.contrib__month {
  font-size: 10px;
  line-height: 14px;
  color: var(--color-grey);
  white-space: nowrap;
}

.contrib__body {
  display: flex;
  align-items: flex-start;
  gap: 6px;
}

.contrib__weekdays {
  display: grid;
  grid-template-rows: repeat(7, 10px);
  gap: 3px;
  width: 24px;
  flex-shrink: 0;
  font-size: 9px;
  line-height: 10px;
  color: var(--color-grey);
}

.contrib__grid {
  display: grid;
  grid-template-rows: repeat(7, 10px);
  grid-auto-flow: column;
  grid-auto-columns: 10px;
  gap: 3px;
}

.contrib__cell {
  width: 10px;
  height: 10px;
  padding: 0;
  border: 0;
  border-radius: 2px;
  background: var(--color-tag-bg);
  display: block;
  cursor: default;
}

button.contrib__cell {
  cursor: pointer;
}

button.contrib__cell:focus-visible {
  outline: 1px solid var(--color-accent);
  outline-offset: 1px;
}

.contrib__cell--pad {
  visibility: hidden;
  pointer-events: none;
}

.contrib__cell--l0 { background: var(--color-tag-bg); }
.contrib__cell--l1 { background: color-mix(in srgb, var(--color-accent) 28%, var(--color-tag-bg)); }
.contrib__cell--l2 { background: color-mix(in srgb, var(--color-accent) 52%, var(--color-tag-bg)); }
.contrib__cell--l3 { background: color-mix(in srgb, var(--color-accent) 78%, var(--color-card)); }
.contrib__cell--l4 { background: var(--color-accent); }

.contrib__footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  margin-top: 10px;
  flex-wrap: wrap;
}

.contrib__learn {
  font-size: 11px;
  color: var(--color-grey);
  transition: color 0.12s ease;
}

.contrib__learn:hover { color: var(--color-text); }

.contrib__legend {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 10px;
  color: var(--color-grey);
  margin-left: auto;
}

.contrib__legend .contrib__cell {
  flex-shrink: 0;
}

.contrib__fallback {
  font-size: 13px;
  color: var(--color-grey);
  padding: 8px 0;
}

.contrib__fallback a {
  color: var(--color-accent);
}

.contrib__tip {
  position: fixed;
  transform: translate(-50%, -100%);
  background: var(--color-text);
  color: var(--color-bg);
  font-size: 11px;
  font-weight: 500;
  white-space: nowrap;
  padding: 4px 9px;
  border-radius: 6px;
  pointer-events: none;
  z-index: 500;
}

.contrib__grid--skeleton .contrib__cell {
  cursor: default;
}
</style>

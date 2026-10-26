<template>
  <main class="page-main page-main--log">
    <div class="bl-wrap">

      <header class="bl-header">
        <p class="section-label">{{ entryCount }} entries</p>
        <h1 class="bl-title">Build log</h1>
        <p class="bl-sub">Things I've learned building products, tools, and infra — written down so I don't forget them.</p>
      </header>

      <section v-for="section in noteSections" :key="section.label" class="bl-section">
        <p class="section-label">{{ section.label }}</p>

        <a
          v-for="note in byNewest(section.notes)"
          :key="note.slug ?? note.href"
          :href="note.slug ? `/notes/${note.slug}` : note.href"
          :target="note.href ? '_blank' : undefined"
          :rel="note.href ? 'noopener noreferrer' : undefined"
          class="idx-card"
        >
          <div class="idx-card-meta">
            <i class="ti card-icon" :class="note.icon" />
            <span class="idx-card-title">{{ note.title }}</span>
            <time class="idx-card-date" :datetime="note.date">{{ formatNoteDate(note.date) }}</time>
          </div>
          <p class="idx-card-desc">{{ note.description }}</p>
          <div class="idx-card-footer">
            <span
              v-for="badge in note.badges"
              :key="badge.label"
              class="badge"
              :class="`badge-${badge.color}`"
            >{{ badge.label }}</span>
            <span class="arrow">{{ note.href ? '↗' : '›' }}</span>
          </div>
        </a>
      </section>

    </div>
  </main>
</template>

<script setup lang="ts">
import type { Note } from '~/utils/notes'

const entryCount = noteSections.reduce((n, section) => n + section.notes.length, 0)
const byNewest = (notes: Note[]) => [...notes].sort((a, b) => b.date.localeCompare(a.date))

useHead({ title: 'Build log — Alberto Glez' })
</script>

<style scoped>
.bl-wrap {
  max-width: 680px;
  width: 100%;
  margin-inline: auto;
  padding: 48px 24px 80px;
}

.bl-header {
  margin-bottom: 36px;
}

.bl-title {
  font-size: clamp(18px, 3vw, 24px);
  font-weight: 600;
  color: var(--color-text);
  margin: 6px 0 8px;
}

.bl-sub {
  font-size: 13.5px;
  color: var(--color-grey);
  line-height: 1.6;
}

/* ── Section ──────────────────────────────── */
.bl-section {
  margin-bottom: 32px;
}

.section-label {
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.09em;
  text-transform: uppercase;
  color: var(--color-grey);
  margin: 0 0 10px;
}

/* ── Index card ───────────────────────────── */
.idx-card {
  display: block;
  background: var(--color-card);
  border: 0.5px solid var(--color-border);
  border-radius: 12px;
  padding: 14px 18px;
  text-decoration: none;
  color: inherit;
  transition: border-color 0.15s, box-shadow 0.15s;
}

.idx-card + .idx-card {
  margin-top: 8px;
}

.idx-card:hover {
  border-color: var(--color-accent);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
}

.idx-card-meta {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 6px;
}

.card-icon {
  font-size: 16px;
  color: var(--color-grey);
}

.idx-card-title {
  font-size: 13.5px;
  font-weight: 500;
  color: var(--color-text);
}

.idx-card-date {
  margin-left: auto;
  flex-shrink: 0;
  font-size: 11px;
  color: var(--color-grey);
  font-variant-numeric: tabular-nums;
}

.idx-card-desc {
  font-size: 12.5px;
  color: var(--color-grey);
  line-height: 1.55;
}

.idx-card-footer {
  display: flex;
  align-items: center;
  gap: 5px;
  margin-top: 10px;
}

.arrow {
  font-size: 15px;
  color: var(--color-grey);
  margin-left: auto;
  opacity: 0.5;
}

/* ── Badges ───────────────────────────────── */
.badge {
  font-size: 10.5px;
  font-weight: 500;
  padding: 2px 7px;
  border-radius: 6px;
}

.badge-teal   { background: #E1F5EE; color: #0F6E56; }
.badge-purple { background: #EEEDFE; color: #3C3489; }
.badge-amber  { background: #FAEEDA; color: #854F0B; }
.badge-blue   { background: #E6F1FB; color: #185FA5; }
.badge-green  { background: #EAF3DE; color: #3B6D11; }
.badge-gray   { background: #f1efe8; color: #5f5e5a; }

[data-theme='dark'] .badge-teal   { background: #0d3830; color: #4ecdb9; }
[data-theme='dark'] .badge-purple { background: #2a1f4a; color: #b59cf5; }
[data-theme='dark'] .badge-amber  { background: #3b2700; color: #f6a93a; }
[data-theme='dark'] .badge-blue   { background: #172340; color: #6fa3f7; }
[data-theme='dark'] .badge-green  { background: #0d2e18; color: #5ecf7b; }
[data-theme='dark'] .badge-gray   { background: #2a2926; color: #a09e99; }

/* ── Mobile ───────────────────────────────── */
@media (max-width: 768px) {
  .bl-wrap {
    padding: 72px 16px 64px;
  }
}
</style>

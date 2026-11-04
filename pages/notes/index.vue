<template>
  <main class="page-main editorial log">

    <header class="log-intro">
      <p class="log-intro__eyebrow">
        <span>Notes</span>
        <span>{{ entryCount }} entries</span>
      </p>
      <h1 class="log-intro__title">Build log</h1>
      <p class="log-intro__lead">
        Things I’ve learned building products, tools, and infra — written down so I don’t forget them.
      </p>
    </header>

    <section
      v-for="(section, si) in noteSections"
      :key="section.label"
      class="section"
      :aria-labelledby="`log-section-${si}`"
    >
      <header class="section__head">
        <span class="section__num">{{ pad(si + 1) }}</span>
        <h2 :id="`log-section-${si}`" class="section__title">{{ section.label }}</h2>
        <span class="section__count">{{ pad(section.notes.length) }}</span>
      </header>

      <ul class="index" role="list">
        <li
          v-for="note in byNewest(section.notes)"
          :key="note.slug ?? note.href"
          class="index__row entry"
        >
          <div class="index__name">
            <h3 class="index__title">
              <a
                :href="note.slug ? `/notes/${note.slug}` : note.href"
                :target="note.href ? '_blank' : undefined"
                :rel="note.href ? 'noopener noreferrer' : undefined"
                class="entry__link"
              >{{ note.title }}</a>
            </h3>
            <p class="kind">{{ note.badges.map(b => b.label).join(' · ') }}</p>
          </div>
          <p class="index__desc">{{ note.description }}</p>
          <p class="index__meta meta-mono entry__meta">
            <time :datetime="note.date">{{ formatNoteDate(note.date) }}</time>
            <span class="entry__arrow" aria-hidden="true">{{ note.href ? '↗' : '→' }}</span>
          </p>
        </li>
      </ul>
    </section>

  </main>
</template>

<script setup lang="ts">
import type { Note } from '~/utils/notes'

const entryCount = noteSections.reduce((n, section) => n + section.notes.length, 0)
const byNewest = (notes: Note[]) => [...notes].sort((a, b) => b.date.localeCompare(a.date))
const pad = (n: number) => String(n).padStart(2, '0')

useHead({ title: 'Build log — Alberto Glez' })
</script>

<style scoped>
/* Section heads and index rows come from main.css ("Editorial pages"). */

.log-intro { padding-bottom: 88px; }

/* Sections here are short lists; the home's 96px gap reads as empty space */
.section { padding-bottom: 64px; }

.log-intro__eyebrow {
  display: flex;
  justify-content: space-between;
  gap: 16px;
  font-family: var(--font-mono);
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--color-grey);
  margin-bottom: 28px;
}

.log-intro__title {
  font-size: clamp(36px, 5.2vw, 66px);
  font-weight: 600;
  line-height: 1.02;
  letter-spacing: -0.035em;
  color: var(--color-text);
}

.log-intro__lead {
  max-width: 46ch;
  margin-top: 24px;
  font-size: 18px;
  line-height: 1.55;
  color: var(--color-text-2);
}

/* The whole row is the link target; the title carries the accessible name. */
.entry { position: relative; }

.entry__link::after {
  content: '';
  position: absolute;
  inset: 0;
}

.entry__link:focus-visible { outline: none; }
.entry:has(.entry__link:focus-visible) { outline: 2px solid var(--color-accent); outline-offset: 4px; border-radius: 4px; }

.entry__link {
  text-decoration: underline;
  text-decoration-color: transparent;
  text-underline-offset: 4px;
  transition: text-decoration-color 0.12s ease;
}

.entry:hover .entry__link { text-decoration-color: currentColor; }

.entry__meta {
  display: inline-flex;
  align-items: baseline;
  gap: 10px;
  white-space: nowrap;
}

.entry__arrow {
  font-family: 'General Sans', system-ui, sans-serif;
  font-size: 14px;
  transition: transform 0.15s ease, color 0.15s ease;
}

.entry:hover .entry__arrow {
  color: var(--color-text);
  transform: translateX(3px);
}

@media (prefers-reduced-motion: reduce) {
  .entry__arrow { transition: none; }
}

@media (max-width: 640px) {
  .log-intro { padding-bottom: 64px; }
  .log-intro__eyebrow { margin-bottom: 20px; }
  .log-intro__lead { font-size: 16px; }
}
</style>

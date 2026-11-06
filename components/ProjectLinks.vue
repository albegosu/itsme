<template>
  <div v-if="links.length" class="plinks">
    <a
      v-for="l in links"
      :key="l.href"
      :href="l.href"
      :target="isExternal(l.href) ? '_blank' : undefined"
      :rel="isExternal(l.href) ? 'noopener noreferrer' : undefined"
      class="plinks__link"
    >
      {{ l.label }}<span class="plinks__arrow" aria-hidden="true">{{ isExternal(l.href) ? '↗' : '→' }}</span>
    </a>
  </div>
</template>

<script lang="ts">
export interface ProjectLink {
  label: string
  href: string
}
</script>

<script setup lang="ts">
defineProps<{ links: ProjectLink[] }>()

const isExternal = (href: string) => /^https?:\/\//.test(href)
</script>

<style scoped>
.plinks {
  display: flex;
  flex-wrap: wrap;
  gap: 6px 18px;
}

.plinks__link {
  display: inline-flex;
  align-items: baseline;
  gap: 4px;
  font-size: 13px;
  font-weight: 500;
  color: var(--color-text);
  white-space: nowrap;
  text-decoration: underline;
  text-decoration-color: var(--color-border);
  text-underline-offset: 4px;
  transition: text-decoration-color 0.12s ease;
}

.plinks__link:hover { text-decoration-color: currentColor; }

.plinks__arrow {
  font-size: 12px;
  color: var(--color-grey);
}
</style>

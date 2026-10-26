<template>
  <div class="layout">
    <ThemeToggle />

    <AppSidebar
      :is-mobile-open="false"
      @close="() => {}"
    />

    <header class="mobile-header">
      <span class="mobile-header__name">Alberto Glez.</span>
      <span class="mobile-header__sep">·</span>
      <span class="mobile-header__role">Product Engineer</span>
    </header>

    <div class="content-wrap" :class="{ 'sidebar-collapsed': !isExpanded }">
      <main class="page-main page-main--log error-main">
        <section class="card" aria-labelledby="error-title">
          <p class="card__label">{{ error.statusCode }}</p>
          <h1 id="error-title" class="card__title">
            {{ isNotFound ? 'Nothing lives at this address' : 'Something went wrong' }}
          </h1>
          <p class="card__body">
            {{ isNotFound
              ? 'The link may be old or mistyped. Everything I publish is reachable from the home page or the build log.'
              : 'An unexpected error stopped this page from loading. Try again in a moment.' }}
          </p>
          <div class="card__links">
            <a href="/" class="card__link">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></svg>
              Home
            </a>
            <a href="/notes" class="card__link">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
              Build log
            </a>
          </div>
        </section>
      </main>
      <AppFooter />
    </div>

    <MobileNav />
  </div>
</template>

<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps<{ error: NuxtError }>()
const isNotFound = computed(() => props.error.statusCode === 404)

const { initTheme } = useTheme()
const { isExpanded } = useSidebar()

onMounted(() => {
  initTheme()
})

useHead({ title: `${props.error.statusCode} — Alberto Glez` })
</script>

<style scoped>
.error-main {
  min-height: 70vh;
  display: flex;
  align-items: center;
  padding-block: 48px;
}

.error-main .card {
  width: 100%;
}

.error-main .card__title {
  font-size: clamp(18px, 3vw, 24px);
  margin: 2px 0 8px;
}

.error-main .card__body {
  margin-bottom: 16px;
}
</style>

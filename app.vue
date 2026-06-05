<template>
  <div class="layout">
    <!-- Fixed theme toggle: top-right corner -->
    <ThemeToggle />

    <!-- Mobile header -->
    <header class="mobile-header">
      <span class="mobile-header__logo">Alberto Glez.</span>
      <button class="mobile-menu-btn" @click="mobileOpen = true" aria-label="Open menu">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>
        </svg>
      </button>
    </header>

    <!-- Mobile overlay -->
    <div class="sidebar-overlay" :class="{ open: mobileOpen }" @click="mobileOpen = false" />

    <!-- Sidebar -->
    <AppSidebar
      ref="sidebarRef"
      :is-mobile-open="mobileOpen"
      @close="mobileOpen = false"
    />

    <!-- Content: centered in available space -->
    <div class="content-wrap" :class="{ 'sidebar-collapsed': sidebarCollapsed }">
      <NuxtPage />
      <AppFooter />
    </div>
  </div>
</template>

<script setup lang="ts">
const { initTheme } = useTheme()
const sidebarRef = ref<{ isExpanded: Ref<boolean> } | null>(null)
const mobileOpen = ref(false)
const isMobile = ref(false)

const sidebarCollapsed = computed(() => {
  if (isMobile.value) return false
  return sidebarRef.value ? !sidebarRef.value.isExpanded.value : false
})

onMounted(() => {
  initTheme()
  isMobile.value = window.innerWidth <= 640

  const onResize = () => {
    isMobile.value = window.innerWidth <= 640
    if (!isMobile.value) mobileOpen.value = false
  }
  window.addEventListener('resize', onResize)
  onUnmounted(() => window.removeEventListener('resize', onResize))
})
</script>

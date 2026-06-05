<template>
  <div class="layout">
    <!-- Fixed theme toggle: top-right, desktop only -->
    <ThemeToggle />

    <!-- Sidebar: desktop only -->
    <AppSidebar
      ref="sidebarRef"
      :is-mobile-open="false"
      @close="() => {}"
    />

    <!-- Mobile floating pill header: name + role, top-center -->
    <header class="mobile-header">
      <span class="mobile-header__name">Alberto Glez.</span>
      <span class="mobile-header__sep">·</span>
      <span class="mobile-header__role">Product Engineer</span>
    </header>

    <!-- Content -->
    <div class="content-wrap" :class="{ 'sidebar-collapsed': sidebarCollapsed }">
      <NuxtPage />
      <AppFooter />
    </div>

    <!-- Mobile pill nav: mobile only -->
    <MobileNav />
  </div>
</template>

<script setup lang="ts">
const { initTheme } = useTheme()
const sidebarRef = ref<{ isExpanded: Ref<boolean> } | null>(null)

const sidebarCollapsed = computed(() =>
  sidebarRef.value ? !sidebarRef.value.isExpanded.value : false
)

onMounted(() => {
  initTheme()
})
</script>

<template>
  <aside class="sidebar" :class="{ collapsed: !isExpanded, 'mobile-open': isMobileOpen }">
    <!-- Header: photo + collapse toggle -->
    <div class="sidebar__header">
      <img src="/foto-alberto.jpg" alt="Alberto González" class="sidebar__photo" />
      <button
        class="sidebar__collapse-btn"
        :data-tip="isExpanded ? undefined : 'Expand'"
        @click="toggle"
        :aria-label="isExpanded ? 'Collapse sidebar' : 'Expand sidebar'"
      >
        <svg v-if="isExpanded" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
          <polyline points="15 18 9 12 15 6" />
        </svg>
        <svg v-else width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>
    </div>

    <!-- Name / role / location -->
    <div class="sidebar__text-group">
      <p class="sidebar__name">Alberto Glez.</p>
      <p class="sidebar__role">Product Engineer</p>
      <p class="sidebar__location">
        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" />
        </svg>
        Gijón, Asturias
      </p>
    </div>

    <div class="sidebar__divider" />

    <!-- Nav -->
    <nav class="sidebar__nav" aria-label="Main navigation">
      <a
        v-for="l in navLinks"
        :key="l.href"
        :href="l.href"
        class="sidebar__nav-link"
        :data-tip="l.label"
        @click="$emit('close')"
      >
        <span class="nav-icon" v-html="l.icon" />
        <span class="nav-label">{{ l.label }}</span>
      </a>
    </nav>

    <div class="sidebar__divider" />

    <!-- Social: icons only, with tooltips when collapsed -->
    <div class="sidebar__socials">
      <a href="https://www.linkedin.com/in/albegosu/" target="_blank" rel="noopener noreferrer"
         class="sidebar__social-link" aria-label="LinkedIn" data-tip="LinkedIn">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
        </svg>
      </a>
      <a href="https://github.com/albegosu" target="_blank" rel="noopener noreferrer"
         class="sidebar__social-link" aria-label="GitHub" data-tip="GitHub">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
        </svg>
      </a>
      <a href="https://albegosu.github.io/albegosu/" target="_blank" rel="noopener noreferrer"
         class="sidebar__social-link" aria-label="Notes" data-tip="Notes">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>
        </svg>
      </a>
      <a href="https://albegosu.notion.site/Proyectos-0811234cd8fb457c82016d5a9b6ab8a8" target="_blank" rel="noopener noreferrer"
         class="sidebar__social-link" aria-label="Notion" data-tip="Notion">
        <svg width="15" height="15" viewBox="0 0 15 15" fill="currentColor">
          <path d="M3.258 3.117c.374.304.515.28.977.249l6.607-.397c.14 0 .024-.14-.023-.163L9.898.928c-.21-.163-.49-.35-1.028-.304L2.22 1.02c-.233.023-.28.14-.186.233zm.396 1.52v6.952c0 .374.187.514.608.49l7.262-.42c.42-.023.467-.28.467-.584V3.162c0-.303-.117-.467-.374-.443L3.888 4.17c-.28.024-.374.164-.374.467zm7.168.373c.047.21 0 .42-.21.444l-.35.07v5.132c-.304.163-.584.257-.817.257-.374 0-.468-.117-.748-.467l-2.288-3.593v3.476l.608.14s0 .42-.584.42l-1.611.093c-.047-.093 0-.327.163-.373l.42-.117V5.927L5.59 5.88c-.047-.21.07-.513.397-.537l1.728-.117 2.39 3.8V5.717l-.608-.07c-.047-.257.14-.443.373-.467zM.968.518l6.655-.49c.817-.07 1.028-.023 1.541.35l2.125 1.493c.35.257.467.327.467.607v8.19c0 .513-.187.817-.84.863l-7.729.467c-.49.023-.724-.047-.981-.374L.736 9.37C.457 9 .34 8.75.34 8.42V1.125C.34.89.527.565.968.518z"/>
        </svg>
      </a>
    </div>

    <!-- Door: Easter egg, centered at bottom -->
    <div class="sidebar__bottom">
      <a
        href="https://www.google.com/search?q=huir+de+un+incendio&tbm=isch"
        target="_blank"
        rel="noopener noreferrer"
        class="sidebar__door"
        data-tip="If you need to escape..."
        aria-label="If you need to escape..."
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
          <path d="M13 4h3a2 2 0 0 1 2 2v14"/><path d="M2 20h3"/><path d="M13 20h9"/><path d="M10 12v.01"/><path d="M13 4.562v16.157a1 1 0 0 1-1.242.97L5 20V5.562a2 2 0 0 1 1.515-1.94l4-1A2 2 0 0 1 13 4.561Z"/>
        </svg>
      </a>
    </div>
  </aside>
</template>

<script setup lang="ts">
defineProps<{ isMobileOpen: boolean }>()
defineEmits<{ close: [] }>()

const isExpanded = ref(true)
function toggle() { isExpanded.value = !isExpanded.value }
defineExpose({ isExpanded })

const navLinks = [
  { href: '#about',    label: 'About',    icon: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></svg>` },
  { href: '#work',     label: 'Work',     icon: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/></svg>` },
  { href: '#projects', label: 'Projects', icon: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>` },
  { href: '#contact',  label: 'Contact',  icon: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>` },
]
</script>

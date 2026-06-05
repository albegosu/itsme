export function useTheme() {
  const isDark = useState<boolean>('theme-dark', () => false)

  function initTheme() {
    if (import.meta.client) {
      const stored = localStorage.getItem('theme')
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      isDark.value = stored ? stored === 'dark' : prefersDark
      applyTheme()
    }
  }

  function applyTheme() {
    if (import.meta.client) {
      document.documentElement.setAttribute('data-theme', isDark.value ? 'dark' : 'light')
    }
  }

  function toggleTheme() {
    isDark.value = !isDark.value
    if (import.meta.client) {
      localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
      applyTheme()
    }
  }

  return { isDark, initTheme, toggleTheme }
}

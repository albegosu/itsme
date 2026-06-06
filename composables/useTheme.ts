export function useTheme() {
  const isDark = useState<boolean>('theme-dark', () => true)

  function initTheme() {
    if (import.meta.client) {
      const stored = localStorage.getItem('theme')
      isDark.value = stored ? stored === 'dark' : true
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

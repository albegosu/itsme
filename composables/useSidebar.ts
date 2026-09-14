const ANIM_MS = 400
let animTimer: ReturnType<typeof setTimeout> | 0 = 0

export function useSidebar() {
  const isExpanded = useState('sidebar-expanded', () => false)
  const isAnimating = useState('sidebar-animating', () => false)

  function toggle() {
    isAnimating.value = true
    isExpanded.value = !isExpanded.value
    if (animTimer) clearTimeout(animTimer)
    animTimer = setTimeout(() => {
      isAnimating.value = false
      animTimer = 0
    }, ANIM_MS)
  }

  return { isExpanded, isAnimating, toggle }
}

export function useSidebar() {
  const isExpanded = useState('sidebar-expanded', () => false)

  function toggle() {
    isExpanded.value = !isExpanded.value
  }

  return { isExpanded, toggle }
}

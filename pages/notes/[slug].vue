<template>
  <div class="note-wrap">
    <iframe
      ref="frame"
      :src="`/notes/${slug}.html`"
      class="note-frame"
      :class="{ 'note-frame--pending': !themed }"
      frameborder="0"
      scrolling="no"
      :title="note.title"
      @load="onLoad"
    />
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const slug = route.params.slug as string
const found = findNote(slug)
// Unknown slugs would load the hosting fallback (the whole site) inside the iframe
if (!found) throw createError({ statusCode: 404, statusMessage: 'Note not found', fatal: true })
const note = found

const { isDark } = useTheme()
const frame = shallowRef<HTMLIFrameElement | null>(null)
const themed = ref(false)
let observer: ResizeObserver | null = null

// The note's own document can't see the site's @font-face rules (@nuxt/fonts writes
// them into this page), so hand them over, with URLs made absolute.
function siteFontFaces(): string {
  let css = ''
  for (const sheet of Array.from(document.styleSheets)) {
    let rules: CSSRuleList
    try { rules = sheet.cssRules } catch { continue } // cross-origin sheet (icon CDN)
    const base = sheet.href ?? location.href
    for (const rule of Array.from(rules)) {
      if (rule instanceof CSSFontFaceRule) {
        css += rule.cssText.replace(/url\((['"]?)([^'")]+)\1\)/g, (_, q, u) => `url(${q}${new URL(u, base).href}${q})`)
      }
    }
  }
  return css
}

// Lay the site's type, neutrals and editorial chrome over the note (public/notes/note-theme.css)
function applySiteTheme(doc: Document): Promise<void> {
  const root = doc.documentElement
  if (root.classList.contains('itsme')) return Promise.resolve()
  root.classList.add('itsme')

  const fonts = doc.createElement('style')
  fonts.textContent = siteFontFaces()
  doc.head.append(fonts)

  const link = doc.createElement('link')
  link.rel = 'stylesheet'
  link.href = '/notes/note-theme.css'
  const loaded = new Promise<void>((resolve) => {
    link.onload = () => resolve()
    link.onerror = () => resolve()
  })
  doc.head.append(link)
  return loaded
}

function resize() {
  const el = frame.value
  const doc = el?.contentDocument
  if (!el || !doc) return
  const y = window.scrollY
  // drop to the CSS min-height first so the note can also shrink (wider viewport)
  el.style.height = ''
  const h = doc.documentElement.scrollHeight
  if (h > 0) el.style.height = `${h}px`
  if (window.scrollY !== y) window.scrollTo(0, y)
}

function syncTheme() {
  frame.value?.contentDocument?.documentElement.classList.toggle('dark', isDark.value)
}

async function onLoad() {
  const doc = frame.value?.contentDocument
  if (!doc) return
  syncTheme()
  await applySiteTheme(doc)
  themed.value = true
  resize()
  observer?.disconnect()
  const win = frame.value?.contentWindow as (Window & typeof globalThis) | null
  const body = frame.value?.contentDocument?.body
  if (win?.ResizeObserver && body) {
    // late fonts or a viewport change reflow the note; keep the iframe in step
    observer = new win.ResizeObserver(resize)
    observer.observe(body)
  }
}

watch(isDark, syncTheme)

onMounted(() => {
  if (frame.value?.contentDocument?.readyState === 'complete') onLoad()
})

onBeforeUnmount(() => observer?.disconnect())

useHead({ title: `${note.title} — Alberto Glez` })
</script>

<style scoped>
.note-wrap {
  width: 100%;
  min-height: 100vh;
  /* strip the itsme page padding so the note's own layout fills edge-to-edge */
  margin: 0;
}

.note-frame {
  display: block;
  width: 100%;
  min-height: 100vh;
  border: none;
}

/* Hidden until the site theme is applied, so the note's old look never flashes */
.note-frame--pending { visibility: hidden; }
</style>

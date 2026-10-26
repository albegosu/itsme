<template>
  <div class="note-wrap">
    <iframe
      ref="frame"
      :src="`/notes/${slug}.html`"
      class="note-frame"
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
let observer: ResizeObserver | null = null

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

function onLoad() {
  syncTheme()
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
</style>

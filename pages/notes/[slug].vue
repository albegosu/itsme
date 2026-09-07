<template>
  <div class="note-wrap">
    <iframe
      ref="frame"
      :src="`/notes/${slug}.html`"
      class="note-frame"
      frameborder="0"
      scrolling="no"
      :title="slug"
      @load="resize"
    />
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const slug = computed(() => route.params.slug as string)
const frame = ref<HTMLIFrameElement | null>(null)

function resize() {
  const el = frame.value
  if (!el) return
  try {
    const h = el.contentDocument?.documentElement?.scrollHeight ?? 0
    if (h > 0) el.style.height = h + 'px'
  } catch {}
}

onMounted(() => {
  if (frame.value?.contentDocument?.readyState === 'complete') resize()
})

useHead({ title: computed(() => slug.value.replace(/-/g, ' ') + ' — Alberto Glez') })
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

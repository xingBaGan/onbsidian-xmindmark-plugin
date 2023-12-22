<script setup lang="ts">
import { ref, shallowRef, onMounted } from 'vue'
import { XMindEmbedViewer } from 'xmind-embed-viewer'
const props = defineProps(['file'])
const embedViewerEl = ref<HTMLElement>()
const viewer = shallowRef<XMindEmbedViewer | null>(null)

const initViewer = () => {
  if (!embedViewerEl.value) return
  viewer.value = new XMindEmbedViewer({
    el: embedViewerEl.value
  })
}

const loadXmindFileToViewer = (xmindFile: ArrayBuffer) => {
  viewer.value && viewer.value.load(xmindFile)
}

onMounted(() => {
  initViewer();
  loadXmindFileToViewer(props.file)
})

</script>

<template>
  <div ref="embedViewerEl" class="xmind-view"></div>
</template>

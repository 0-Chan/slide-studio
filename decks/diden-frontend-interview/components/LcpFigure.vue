<script setup lang="ts">
import { onSlideEnter } from '@slidev/client'
import { ref } from 'vue'

const play = ref(0)
onSlideEnter(() => {
  play.value += 1
})
</script>

<template>
  <span class="lcp-figure" role="img" aria-label="LCP 3.2초에서 2.1초">
    <span :key="play" class="stack">
      <span class="num from grow">3.2초</span>
      <span class="num to grow">2.1초</span>
    </span>
  </span>
</template>

<style scoped>
.lcp-figure {
  display: inline-block;
  font-family: "IBM Plex Sans KR", sans-serif;
  font-weight: 400;
  line-height: 1;
}

.stack {
  display: inline-grid;
}

.num {
  grid-area: 1 / 1;
  font-weight: 400;
  line-height: 1;
}

.from {
  color: var(--studio-muted);
  opacity: 0;
}

.to {
  color: var(--studio-accent);
  opacity: 1;
}

.grow.from {
  animation: lcp-out 0.85s ease both;
}

.grow.to {
  animation: lcp-in 0.85s ease both;
}

@keyframes lcp-out {
  from {
    opacity: 1;
  }
}

@keyframes lcp-in {
  from {
    opacity: 0;
  }
}

.slidev-vclick-hidden .grow {
  animation: none;
}

@media (prefers-reduced-motion: reduce) {
  .grow {
    animation: none;
  }
}
</style>

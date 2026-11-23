<script setup lang="ts">
import { onSlideEnter } from '@slidev/client'
import { ref } from 'vue'

const play = ref(0)
onSlideEnter(() => {
  play.value += 1
})
</script>

<template>
  <svg class="lcp-figure" viewBox="0 0 280 92" role="img" aria-label="LCP 3.2초에서 2.1초">
    <defs>
      <clipPath id="lcp-num-clip">
        <rect x="0" y="0" width="280" height="92" />
      </clipPath>
    </defs>
    <g :key="play" clip-path="url(#lcp-num-clip)">
      <text class="num from grow" x="4" y="68" text-anchor="start">3.2초</text>
      <text class="num to grow" x="4" y="68" text-anchor="start">2.1초</text>
    </g>
  </svg>
</template>

<style scoped>
.lcp-figure {
  display: block;
  width: 28rem;
  height: 9.2rem;
  overflow: visible;
  font-family: "IBM Plex Sans KR", sans-serif;
}

.num {
  font-size: 42px;
  font-weight: 400;
  transform-box: fill-box;
  transform-origin: 0 50%;
}

.from {
  fill: var(--studio-muted);
  opacity: 0;
}

.to {
  fill: var(--studio-accent);
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
    transform: scale(0.86);
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

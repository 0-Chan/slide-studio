<script setup lang="ts">
const maxSeconds = 3.5
const beforeSeconds = 3.2
const afterSeconds = 2.1
const axisX = 8
const axisWidth = 624
const beforeWidth = axisWidth * beforeSeconds / maxSeconds
const afterWidth = axisWidth * afterSeconds / maxSeconds
</script>

<template>
  <svg class="lcp-figure" viewBox="0 0 640 136" role="group">
    <text class="fig-tick" :x="axisX" y="16">0</text>
    <text class="fig-tick" :x="axisX + axisWidth" y="16" text-anchor="end">3.5초</text>
    <line class="fig-axis" :x1="axisX" y1="26" :x2="axisX + axisWidth" y2="26" />
    <g v-click>
      <text class="fig-label" :x="axisX" y="52">개선 전 3.2초</text>
      <rect class="bar bar-before grow" :x="axisX" y="60" :width="beforeWidth" height="20" rx="4" />
    </g>
    <g v-click>
      <text class="fig-label" :x="axisX" y="100">개선 후 2.1초</text>
      <text class="fig-delta" :x="axisX + axisWidth" y="100" text-anchor="end">1.1초 단축 (약 34%)</text>
      <rect class="bar bar-after grow" :x="axisX" y="108" :width="afterWidth" height="20" rx="4" />
    </g>
  </svg>
</template>

<style scoped>
.lcp-figure {
  display: block;
  width: 100%;
  height: auto;
  margin-top: 0.35rem;
  overflow: visible;
  font-family: "IBM Plex Sans KR", sans-serif;
}

.fig-tick {
  fill: var(--studio-muted);
  font-size: 13px;
}

.fig-label {
  fill: var(--studio-foreground);
  font-size: 15px;
  font-weight: 600;
}

.fig-delta {
  fill: var(--studio-accent);
  font-size: 15px;
  font-weight: 700;
}

.fig-axis {
  stroke: var(--studio-muted);
  stroke-width: 1.5;
}

.bar-before {
  fill: var(--studio-muted);
}

.bar-after {
  fill: var(--studio-accent);
}

.grow {
  transform-box: fill-box;
  transform-origin: 0 50%;
  animation: lcp-grow 0.7s ease both;
}

@keyframes lcp-grow {
  from {
    transform: scaleX(0);
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

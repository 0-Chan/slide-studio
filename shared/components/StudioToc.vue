<script setup lang="ts">
withDefaults(defineProps<{ items: string[]; current?: number }>(), { current: 0 })
</script>

<template>
  <ol class="studio-toc">
    <li v-for="(item, index) in items" :key="index"
      :class="{ 'is-current': index + 1 === current, 'is-past': current > 0 && index + 1 < current }"
      :aria-current="index + 1 === current ? 'step' : undefined">
      <span class="studio-toc-number">{{ String(index + 1).padStart(2, '0') }}</span>
      <span>{{ item }}</span>
    </li>
  </ol>
</template>

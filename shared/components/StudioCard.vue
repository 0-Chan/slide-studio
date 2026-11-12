<script setup lang="ts">
withDefaults(defineProps<{
  title?: string
  tone?: 'accent' | 'violet' | 'sky' | 'emerald' | 'rose' | 'neutral'
}>(), { tone: 'neutral' })
</script>

<template>
  <div class="studio-card" :class="'studio-card--' + tone">
    <div v-if="title" class="studio-card-title">{{ title }}</div>
    <slot />
  </div>
</template>

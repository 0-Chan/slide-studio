<script setup lang="ts">
import { configs } from '@slidev/client'
import { computed } from 'vue'

const image = computed(() => {
  const path = (configs as { deckBackground?: string }).deckBackground
  return path ? import.meta.env.BASE_URL + path.replace(/^\/+/, '') : undefined
})
</script>

<template>
  <div class="studio-background absolute inset-0" aria-hidden="true">
    <img v-if="image" :src="image" alt="" class="h-full w-full object-cover" />
    <div v-if="image" class="studio-background-overlay absolute inset-0" />
  </div>
</template>

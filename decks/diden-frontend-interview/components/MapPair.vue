<script setup lang="ts">
defineProps<{
  work: string
  experience: string
}>()
</script>

<template>
  <div class="fit-row">
    <div class="fit-cell">{{ work }}</div>
    <div class="fit-bridge" aria-hidden="true"><span class="fit-line" /></div>
    <div class="fit-cell">{{ experience }}</div>
  </div>
</template>

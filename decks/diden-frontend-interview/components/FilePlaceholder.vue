<script setup lang="ts">
defineProps<{ name: string }>()
</script>

<template>
  <div class="ph">
    <span>{{ name }}</span>
  </div>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  label: string
  text: string
  accent?: boolean
}>(), { accent: false })
</script>

<template>
  <li :class="{ 'is-accent': accent }">
    <strong>{{ label }}:</strong> {{ text }}
  </li>
</template>

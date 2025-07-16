<script setup lang="ts">
import { useDark, useToggle } from "@vueuse/core";

const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

<template>
  <client-only>
    <UButton @click="toggleDark()">
      <Icon v-if="isDark" name="carbon-moon" />
      <Icon v-else name="carbon-sun" />

      <span>{{ isDark ? "Dark" : "Light" }} by useDark </span>
    </UButton>
  </client-only>
</template>

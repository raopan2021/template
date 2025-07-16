<script lang="ts" setup>
import { useViewTransition } from "~/composables/useViewTransition";
const { isDark, toggleAppearance } = useViewTransition();
</script>

<template>
  <client-only>
    <UButton
      class="w-full cursor-pointer border-none bg-transparent"
      @click="toggleAppearance($event)"
    >
      <Icon v-if="isDark" name="ep-moon" />
      <Icon v-else name="ep-sunny" />

      ViewTransition
    </UButton>
  </client-only>
</template>

<style lang="scss" scoped></style>

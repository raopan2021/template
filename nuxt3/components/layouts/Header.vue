<script lang="ts" setup>
const routes = ref([
  { route: "/", label: "home" },
  { route: "/nuxtui", label: "nuxtui" },
  { route: "/pinia", label: "pinia" },
  { route: "/i18n", label: "i18n" },
  { route: "/animate", label: "@formkit/auto-animate" },
  { route: "/vueuse", label: "vueuse" },
  { route: "/device", label: "device" },
]);

import { useViewTransition } from "~/composables/useViewTransition";
const { isDark, toggleAppearance } = useViewTransition();
</script>

<template>
  <header style="height: 40px">
    <span
      v-for="item in routes"
      :key="item.route"
      style="margin: auto 10px; height: 40px; line-height: 40px"
      @click="navigateTo(item.route)"
    >
      {{ item.label }}
    </span>

    <client-only>
      <span
        @click="toggleAppearance($event)"
        style="float: right; margin: 12px 20px"
      >
        <Icon v-if="isDark" name="ep-moon" />
        <Icon v-else name="ep-sunny" />
      </span>
    </client-only>
  </header>
</template>

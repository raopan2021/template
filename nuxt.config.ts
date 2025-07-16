import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  modules: [
    "@nuxt/eslint",
    "@nuxt/ui",
    "@pinia/nuxt",
    "@formkit/auto-animate/nuxt",
    "@nuxtjs/i18n",
    "@vueuse/nuxt",
    "@nuxt/icon",
    "@nuxtjs/color-mode",
    "@nuxtjs/device",
  ],

  vite: {
    css: {
      preprocessorMaxWorkers: true, // CPU 核心数减 1
    },
    plugins: [tailwindcss()],
  },
  css: ["~/assets/css/main.css"],
  ui: { fonts: false }, // 禁用 nuxt/ui 的默认字体
  i18n: {
    defaultLocale: import.meta.env.VITE_I18N_LANG || "en", // 文档写en就行了，但是run dev:zh，页面无法解析zh，控制台报warning
    locales: [
      { code: "en", name: "English", file: "en.json" },
      { code: "zh", name: "Chinese", file: "zh.json" },
    ],
  },

  typescript: {
    strict: true,
    typeCheck: true, // vue-tsc检测
  },
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
});
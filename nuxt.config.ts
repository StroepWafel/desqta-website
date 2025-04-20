// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "vue3-carousel-nuxt"],
  extends: ["./drop-base"],
  css: ["~/assets/core.scss"],
  app: {
    head: {
      link: [{ rel: "icon", href: "/favicon.ico" }],
    },
  },
  carousel: {
    prefix: "Vue",
  },

  ssr: false,
});

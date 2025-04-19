// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },
  modules: ["@nuxtjs/tailwindcss", "vue3-carousel-nuxt", "@nuxt/fonts"],
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

  nitro: {
    minify: true,
    compressPublicAssets: true,
  },

  fonts: {
    families: [
      {
        name: "Helvetica",
        src: "/fonts/helvetica/helvetica-300-light.woff2",
      },
      {
        name: "Helvetica",
        src: "/fonts/helvetica/Helvetica-400-italic.woff",
      },
      {
        name: "Helvetica",
        src: "/fonts/helvetica/Helvetica-400.woff",
      },
      {
        name: "Helvetica",
        src: "/fonts/helvetica/Helvetica-600-bold-italic.woff",
      },
      {
        name: "Helvetica",
        src: "/fonts/helvetica/Helvetica-600-bold.woff",
      },
      {
        name: "Inter",
        src: "/fonts/inter/Inter-variable-400.ttf",
      },
      {
        name: "Inter",
        src: "/fonts/inter/Inter-variable-400-italic.ttf",
      },
      {
        name: "Motiva Sans",
        src: "/fonts/motiva/motiva-sans-100-thin.ttf",
      },
      {
        name: "Motiva Sans",
        src: "/fonts/motiva/motiva-sans-300-light.woff.ttf",
      },
      {
        name: "Motiva Sans",
        src: "/fonts/motiva/motiva-sans-400-regular.woff.ttf",
      },
      {
        name: "Motiva Sans",
        src: "/fonts/motiva/motiva-sans-500-medium.woff.ttf",
      },
      {
        name: "Motiva Sans",
        src: "/fonts/motiva/motiva-sans-600-bold.woff.ttf",
      },
      {
        name: "Motiva Sans",
        src: "/fonts/motiva/motiva-sans-700-extra-bold.ttf",
      },
      {
        name: "Motiva Sans",
        src: "/fonts/motiva/motiva-sans-900-black.woff.ttf",
      },
    ],
  },

  typescript: {
    typeCheck: true,

    tsConfig: {
      compilerOptions: {
        verbatimModuleSyntax: false,
        strictNullChecks: true,
        exactOptionalPropertyTypes: true,
      },
    },
  },
});

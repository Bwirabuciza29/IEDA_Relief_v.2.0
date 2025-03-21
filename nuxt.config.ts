export default defineNuxtConfig({
  // module options
  socialShare: {
    baseUrl: "https://ieda-relief-v-2-0.vercel.app/news",
    // other optional module options
  },
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css", "~/assets/css/global.css"],
  plugins: [
    "~/plugins/aos.client.js",
    { src: "~/plugins/particles.client.js", mode: "client" },
    { src: "~/plugins/leaflet.js", mode: "client" },
  ],
  app: {
    pageTransition: { name: "fade", mode: "out-in" },

    head: {
      title: "IEDA Relief",
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        { charset: "utf-16" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content: "Helping Communities to become Self-Sufficient ....",
        },
        { name: "format-detection", content: "telephone=no" },
        { property: "og:title", content: "IEDA Relief" },
        {
          property: "og:description",
          content: "Helping Communities to become Self-Sufficient ....",
        },
        { property: "og:url", content: "https://ieda-relief.vercel.app" },
        {
          property: "og:image",
          content: "/img/logo.png",
        },
        { name: "twitter:title", content: "IEDA Relief" },
        {
          name: "twitter:description",
          content: "Helping Communities to become Self-Sufficient ....",
        },
        {
          name: "twitter:image",
          content: "/img/logo.png",
        },
        { name: "twitter:card", content: "summary_large_image" },
      ],

      link: [
        {
          rel: "me",
          href: "https://twitter.com/ieda_relief",
        },
        { rel: "icon", type: "image/x-icon", href: "/favicons/favicon.ico" },
        {
          rel: "apple-touch-icon",
          sizes: "76x76",
          href: "/favicons/apple-touch-icon.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/favicons/favicon-96x96.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "/favicons/favicon-96x96.png",
        },
      ],
      noscript: [{ children: "Javascript est désactivé" }],
    },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  // Pour la traduction
  modules: [
    "@nuxtjs/i18n",
    "@nuxt/image",
    "@stefanobartoletti/nuxt-social-share",
    "nuxt-directus",
  ],
  runtimeConfig: {
    public: {
      directus: {
        url: "https://admin.iedarelief.org",
      },
    },
  },

  i18n: {
    lazy: true,
    langDir: "locales",
    strategy: "prefix_except_default",
    locales: [
      { code: "en-UK", iso: "en-UK", name: "English (US)", file: "en-UK.json" },
      { code: "fr-FR", iso: "fr-FR", name: "French", file: "fr-FR.json" },
      { code: "es-ES", iso: "es-ES", name: "Español", file: "es-ES.json" },
      { code: "ar-AR", iso: "ar-AR", name: "Arabic", file: "ar-AR.json" },
      {
        code: "sw-CD",
        iso: "sw-CD",
        name: "Swahili (TZ)",
        file: "sw-CD.json",
      },
      { code: "pt-PT", iso: "pt-PT", name: "Portugues", file: "pt-PT.json" },
      {
        code: "zh-ZH",
        iso: "zh-ZH",
        name: "Mandarin 中文",
        file: "zh-ZH.json",
      },
    ],
    defaultLocale: "en-UK",
    vueI18n: "./i18n.config.js",
  },
});

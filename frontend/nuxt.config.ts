// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  app: {
    head: {
      title: "Agrikol - Vue Nuxt Template for Agriculture Farm & Farmers",
      link: [
        {
          rel: "icon",
          type: "image/x-icon",
          href: "/favicon.ico",
        },

        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Amatic+SC:wght@400;700&family=Barlow:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600&display=swap",
        },

        {
          rel: "stylesheet",
          href: "//cdn.jsdelivr.net/npm/glightbox/dist/css/glightbox.min.css",
        },
      ],
      script: [
        {
          src: "//cdn.jsdelivr.net/gh/mcstudios/glightbox/dist/js/glightbox.min.js", // External CDN script
          defer: true, // Defer loading for better performance
        },
      ],
    },
  },
  css: [
    ,
    "@/assets/css/bootstrap.min.css",
    "@/assets/css/bootstrap-datepicker.min.css",
    "@/assets/css/animate.min.css",
    "@/assets/plugins/glightbox/glightbox.min.css",
    "@/assets/css/fontawesome-all.min.css",
    "@/assets/css/agrikol_iconl.css",
    "@/assets/css/style.css",
    "@/assets/css/responsive.css",
    "@/assets/css/custom.css",
    'bootstrap/dist/css/bootstrap.min.css',
    'bootstrap-icons/font/bootstrap-icons.css',
  ],
  plugins: [
    "~/plugins/tiny-slider.client.ts",
    "~/plugins/vue-observe-visibility.ts",
  ],

  modules: [
    "@pinia/nuxt",  
  ],

  build: {
    transpile: ["vue-countup-v3"],
  },
  
});

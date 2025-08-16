// nuxt.config.ts
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  ssr: true,
  devtools: { enabled: true },

  app: {
    head: {
      // FIX: dùng chuỗi thay vì hàm cho titleTemplate
      titleTemplate: "%s | Vitales",
      meta: [
        { charset: "utf-8" },
        // FIX: không khoá zoom để đạt A11y/Lighthouse tốt
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "robots", content: "index, follow" }
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
        {
          rel: "stylesheet",
          // FIX: remove khoảng trắng sai trong URL fonts
          href: "https://fonts.googleapis.com/css2?family=Amatic+SC:wght@400;700&family=Barlow:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600&display=swap"
        },
        // Nếu đã dùng glightbox trong assets thì bỏ dòng CDN dưới để tránh trùng
        { rel: "stylesheet", href: "//cdn.jsdelivr.net/npm/glightbox/dist/css/glightbox.min.css" }
      ],
      script: [
        { src: "//cdn.jsdelivr.net/gh/mcstudios/glightbox/dist/js/glightbox.min.js", defer: true }
      ]
    }
  },

  css: [
    "@/assets/css/bootstrap.min.css",
    "@/assets/css/bootstrap-datepicker.min.css",
    "@/assets/css/animate.min.css",
    "@/assets/plugins/glightbox/glightbox.min.css",
    "@/assets/css/fontawesome-all.min.css",
    "@/assets/css/agrikol_iconl.css",
    "@/assets/css/style.css",
    "@/assets/css/responsive.css",
    "@/assets/css/custom.css",
    // Giữ 1 nguồn bootstrap để tránh đè style:
    // 'bootstrap/dist/css/bootstrap.min.css',
    "bootstrap-icons/font/bootstrap-icons.css"
  ],

  plugins: [
    "~/plugins/tiny-slider.client.ts",
    "~/plugins/vue-observe-visibility.ts"
  ],

  modules: [
    "@pinia/nuxt",
    "@nuxtjs/i18n",
    "@nuxtjs/sitemap",
    "@nuxtjs/robots",
    "@nuxt/image",
    "nuxt-schema-org",
    // "@nuxtjs/tailwindcss" // bật nếu template dùng Tailwind
  ],

  // i18n tĩnh EN/VI – bỏ 'lazy' để tránh lỗi type
  i18n: {
    locales: [
      { code: "vi", language: "vi-VN", file: "vi.json", name: "Tiếng Việt" },
      { code: "en", language: "en-US", file: "en.json", name: "English" }
    ],
    defaultLocale: "vi",
    strategy: "prefix_except_default",
    langDir: "locales",
    baseUrl: "https://www.vitales.com",
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
      redirectOn: "root"
    }
    // pages: { about: { vi: "/gioi-thieu", en: "/about" } } // nếu muốn dịch slug
  },

  // Nuxt Image – tối ưu ảnh
  image: {
    formats: ["webp", "avif"],
    quality: 70
  },

  // Sitemap/Robots – cấu hình tối thiểu hợp lệ
  sitemap: {
    siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://www.vitales.com'
  } as any,
  robots: {
    allow: ['/'],
    disallow: ['/admin', '/api'],
    sitemap: ['/sitemap.xml'],
  },

  build: {
    transpile: ["vue-countup-v3"]
  },

  nitro: {
    // ISR để giảm TTFB (tuỳ chỉnh theo nhu cầu)
    routeRules: {
      "/": { isr: 60 },
      "/blog/**": { isr: 600 }
    }
    // publicAssets: [{ baseURL: "/images", dir: "public/images", maxAge: 60 * 60 * 24 * 30 }]
  },

  runtimeConfig: {
    public: {
      apiUrl: process.env.NUXT_PUBLIC_API_URL || "http://127.0.0.1:8000/api"
    }
  },

  experimental: {
    appManifest: false
  }
});

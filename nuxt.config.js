export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: `Журналистларни қайта таерлаш маркази`,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
      { rel:"stylesheet", href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css " }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    { src: '@/assets/scss/main.scss', lang: 'scss' },
    { src: "aos/dist/aos.css"}
  ],

  
  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: '~/plugins/backToTop.js', ssr: false },
    { src: '~/plugins/inputMask.js', ssr: false },
    { src: "~/plugins/toast.js", ssr: false },
    { src: "~/plugins/aos.js", ssr: false },
  ],

  loading: {
    color: 'blue',
    height: 0
  },

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    // '@nuxtjs/eslint-module'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    // '@nuxtjs/axios'
    [
      '@nuxtjs/axios',
      { baseURL: "https://jqtm.uz/api/" },
      
      
    ],
    [
      "nuxt-i18n",
      {
        lazy: true,
        locales: [
          { code: "uz", iso: "uz-UZ", name: "Uzbek", file: "uz.js" },
          { code: "ru", iso: "ru-RU", name: "Russian", file: "ru.js" },
        ],
        defaultLocale: "uz",
        rootRedirect: "uz",
        strategy: "prefix",
        // seo: false,
        // lazy: true,
        langDir: "lang/",
        // By default, custom routes are extracted from page files using acorn parsing,
        // set this to false to disable this
        parsePages: false,
        detectBrowserLanguage: {
          // cookieKey: 'i18n_cookie',
          useCookie: true,
          fallbackLocale: "uz"
        }
      }
    ],    
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    vendor: ["aos"]
  }
}

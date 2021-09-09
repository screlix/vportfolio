export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",
  server:{
    host:'0'
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Mohamed Ifouloussene",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: `Hi my name is Mohamed. I am originally from morocco, My hobbies are
      video games and watching movies. I became a developer as it so precious
      and joyful thing for me to create IT solutions to facilitate people's life. 
      I believe in cooperation and Self-learning.`
      },
      { name: "author", content: "Mohamed Ifouloussene" },
      { name: "format-detection", content: "telephone=no" },
      {
        name: "keywords",
        content: "mohamed ifouloussene front end developer "
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/ico2.png" },

      //{ rel:"stylesheet", href:"https://use.fontawesome.com/releases/v5.14.0/css/all.css"  },
      {
        rel: "stylesheet",
        type: "text/css",
        href:
          "https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
      },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Poppins:wght@100;200;300;400;500;600;700;800&display=swap"
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/icon?family=Material+Icons"
      },
      //{ rel:"script",type:"text/javascript", href:"./static/fontawesome.js"}
      //{rel:"stylesheet", href:"https://pro.fontawesome.com/releases/v6.0.0-beta1/css/all.css"},
      {
        rel: "stylesheet",
        href: "https://kit-pro.fontawesome.com/releases/v5.15.4/css/pro.min.css"
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~/static/tooltip.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "~/plugins/v-tooltip.js" },
    { src: "~/plugins/vue-carousel", ssr: false }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    /*transpile: ['VueCarousel'],*/
  }, 
  loading:'~/components/LoadingBar.vue'
};

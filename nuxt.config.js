export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'khoa-portfolio',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700;800&display=swap'},
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Stalemate&display=swap'},
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap'},
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@400;500;700;900&display=swap'},
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@300;400;500;600;700;900&display=swap'}
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~assets/scss/main.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/cloudinary'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    
  },

  styleResources: {
    scss: ['./assets/scss/*.scss']
  },

  buildModules: ['nuxt-gsap-module'],

  cloudinary: {
    cloudName: process.env.CLOUDNAME,
    apiKey: process.env.API_KEY, //only needed if you are using server-side upload
    apiSecret: process.env.API_SECRET, //only needed if you are using server-side upload
  },

  loading: {
    color: '#FF4A4A',
    height: '5px'
  }
}

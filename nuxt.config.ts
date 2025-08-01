export default defineNuxtConfig({
  ssr: false,
  target: 'static',

  modules: [
    '@nuxt/ui'
  ],

  typescript: {
    strict: true,
  },

  app: {
    baseURL: '/praesens/',
    head: {
      title: 'Praesens',
      meta: [
        { name: 'description', content: 'Clone of praesens.ru' }
      ]
    }
  }
})
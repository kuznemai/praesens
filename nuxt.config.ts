import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  modules: ['@nuxt/ui'],
  typescript: {
    strict: true,
  },
  app: {

    baseURL: '/praesens/',
    head: {
      title: 'Praesens',
      meta: [
        { name: 'description', content: 'Clone of praesens.ru' }
      ],
    },
  },
  nitro: {
    prerender: {

      failOnError: false,

      routes: [
        '/',
        '/404.html',
      ],
    },
  },
})

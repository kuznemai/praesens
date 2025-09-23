import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  modules: ['@nuxt/ui'],
  typescript: {
    strict: true,
  },
  app: {
    head: {
      title: 'Praesens',
      meta: [{ name: 'description', content: 'Clone of praesens.ru' }],
    },
  },
})

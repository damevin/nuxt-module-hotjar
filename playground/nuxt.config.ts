export default defineNuxtConfig({
  modules: ['../src/module'],

  hotjar: {
    hotjarId: 1234567,
    scriptVersion: 6,
    debug: true
  },

  devtools: { enabled: true },
  compatibilityDate: '2024-08-06'
})
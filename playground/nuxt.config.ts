export default defineNuxtConfig({
  modules: ['../src/module'],
  hotjar: {
    hotjarId: 1234533,
    scriptVersion: 6,
    debug: true
  },
  devtools: { enabled: true }
})

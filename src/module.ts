import { defineNuxtModule, addPlugin, createResolver } from '@nuxt/kit'
import { name, version } from '../package.json'

// Module options TypeScript interface definition
export interface ModuleOptions {
  hotjarId: number
  scriptVersion: number
  debug: boolean
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name,
    version,
    configKey: 'hotjar',
    compatibility: {
      nuxt: '^3.0.0',
    },
  },
  
  // Default configuration options of the Nuxt module
  defaults: {
    hotjarId: 1234567,
    scriptVersion: 6,
    debug: false,
  },

  setup (options, nuxt) {
    const { resolve } = createResolver(import.meta.url)

    nuxt.options.runtimeConfig.public.hotjar = options

    nuxt.options.build.transpile.push(resolve('runtime'))

    addPlugin({
      src: resolve('runtime/plugin.client'),
      mode: 'client',
    })
  }
})

import { defineNuxtModule, addPlugin, createResolver } from '@nuxt/kit'
import { name, version } from '../package.json'

// Module options TypeScript interface definition
export interface ModuleOptions {
  hotjarId: string
  scriptVersion: string
  debug: boolean
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name,
    version,
    configKey: 'hotjar',
    compatibility: {
      nuxt: '^3',
    },
  },
  // Default configuration options of the Nuxt module
  defaults: {
    hotjarId: '',
    scriptVersion: '6',
    debug: false,
  },
  setup (options, nuxt) {
    const { resolve } = createResolver(import.meta.url)

    nuxt.options.runtimeConfig.public.hotjar = options

    addPlugin({
      src: resolve('runtime/plugin.ts'),
    })
  }
})

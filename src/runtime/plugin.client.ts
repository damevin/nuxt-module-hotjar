import { defineNuxtPlugin, useRuntimeConfig } from '#app'
import Hotjar from '@hotjar/browser';

export default defineNuxtPlugin(() => {
  const options = useRuntimeConfig().public.hotjar
  const isDev = process.env.NODE_ENV !== 'production' || options.debug

  if (isDev) {
    console.log('%c[nuxt-hotjar] You\'re in dev mode', 'color: #000000; background-color: #f79859; font-weight: bold; padding: 4px; border-radius: 5px');
  }

  Hotjar.init(options.hotjarId, options.scriptVersion, {
    debug: options.debug
  });
})

import { useRuntimeConfig } from '#imports'
import Hotjar from '@hotjar/browser';

export function useHotjar() {
  const config = useRuntimeConfig().public.hotjar
  const isDev = process.env.NODE_ENV !== 'production' || config.debug

  function initialize() {
    if (!config.hotjarId) {
      throw new Error('[nuxt-hotjar 🔥] Hotjar ID is missing. Please provide a Hotjar ID in the module options.');
    }

    if (isDev) {
      console.log('%c[nuxt-hotjar] You\'re in dev mode', 'color: #000000; background-color: #f79859; font-weight: bold; padding: 4px; border-radius: 5px');
    }
    
    Hotjar.init(config.hotjarId, config.scriptVersion, {
      debug: config.debug
    })
  }

  return {
    initialize,
  }
}

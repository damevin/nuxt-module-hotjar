import { defineNuxtPlugin, useRuntimeConfig } from '#app'

declare global {
  interface Window {
    hj: any;
    _hjSettings: {
      hjid: string;
      hjsv: string;
    };
  }

  module NodeJS {
    interface Process {
      browser: boolean;
    }
  }
}

function loadHotjarScript(hotjarURL: string, hotjarId: string, scriptVersion: string) {
  // eslint-disable-next-line prefer-rest-params
  window.hj = window.hj || function () { (window.hj.q = window.hj.q || []).push(arguments); };
  window._hjSettings = {
    hjid: `${hotjarId}`,
    hjsv: `${scriptVersion}`
  };
  const headTag = document.getElementsByTagName('head')[0];
  const hotjarScript = document.createElement('script');
  hotjarScript.async = true;
  hotjarScript.src = hotjarURL + window._hjSettings.hjid + '.js?sv=' + window._hjSettings.hjsv;
  headTag.appendChild(hotjarScript);
}

export default defineNuxtPlugin(() => {
  const options = useRuntimeConfig().public.hotjar
  const isDev = process.env.NODE_ENV !== 'production' && !options.debug

  if (isDev) {
    console.log('%c[nuxt-hotjar] Disabled in dev mode', 'color: #000000; background-color: #f79859; font-weight: bold; padding: 4px; border-radius: 5px');
    return
  }

  if (!process.browser)
    return

 
  window.onload = () => {``
    loadHotjarScript(
      'https://static.hotjar.com/c/hotjar-',
      options.hotjarId,
      options.scriptVersion
    );
  }
})

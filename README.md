<!--
README
-->

![Hotjar module banner](https://private-user-images.githubusercontent.com/72107589/343866793-35f88f27-93d3-4fe1-9479-798414ea7353.jpg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTk1MDY1NzcsIm5iZiI6MTcxOTUwNjI3NywicGF0aCI6Ii83MjEwNzU4OS8zNDM4NjY3OTMtMzVmODhmMjctOTNkMy00ZmUxLTk0NzktNzk4NDE0ZWE3MzUzLmpwZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA2MjclMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwNjI3VDE2Mzc1N1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWI3MTg3M2FjMGEwYTFjZGFmYWRjOGYzZWU1NTVlZTVlZDIwNjhhNzZlOGJhYmQ1MTFjOGI0ZDhiNjg1YTRlMDkmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.CxQwczOS5rfpbz0ErRKrIL9bRHRoaaKBHu6qiUO6SR0)

# Nuxt Hotjar 

Easily add [Hotjar](https://www.hotjar.com/) for tracking and analytics to your Nuxt application.

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]

- [✨ &nbsp;Release Notes](/CHANGELOG.md)

## Features

- 🔥 Easily add Hotjar to your Nuxt application
- 👮 Data privacy 
- 🏷️ Fully typed
- 🦾 SSR support

## Setup

```bash
npx nuxi@latest module add hotjar
```

## Configuration 

Add `nuxt-module-hotjar` to the `modules` section of `nuxt.config.ts` and provide your Hotjar site id and the script version.

In order for Nuxt Hotjar to run, it needs to be initialized with your site ID _(this is the `hotjarId` in our module)_. You can find your site ID on [this page](https://insights.hotjar.com/login?next=%2Fsite%2Flist) just before your site name.


```ts
export default defineNuxtConfig({
  modules: [
    'nuxt-module-hotjar'
  ],

  hotjar: {
    hotjarId: 1234567,
    scriptVersion: 6,

    // optionally you can turn on debug mode for development
    debug: true
  }
})
```

## Basic usage

Now you have to initialize Hotjar in your app with the composable `useHotjar`:

```ts
// In you app.vue file for example when you user has given consent:

const { initialize } = useHotjar()

function onConsent() {
  initialize()
}
```

## Composables

### `useHotjar`

The SSR-safe `useHotjar` composable provides access to:

- The initialize method
- The ref variable `isHotjarEnabled` if you want to check if Hotjar is enabled

You can use it like this:

```ts
const { initialize, isHotjarEnabled } = useHotjar()
```
### Types declarations

```ts
function useHotjar(): {
  initialize: () => void
  isHotjarEnabled: Ref<boolean>
}
```


## Modules Options

| Option | Type | Default | Description |
| --- | --- | --- | --- |
| `hotjarId` | `number` | `undefined` | Your Hotjar `site_id`. |
| `scriptVersion` | `number` | `6` | By default it's 6, _you don’t necessarily need to change it._ |
| `debug` | `boolean` | `false` | Debug mode |


## Credits 

- [@hotjar/browser](https://www.npmjs.com/package/@hotjar/browser)

## Development

```bash
# Install dependencies
npm install

# Generate type stubs
npm run dev:prepare

# Develop with the playground
npm run dev

# Build the playground
npm run dev:build

# Run ESLint
npm run lint

# Run Vitest
npm run test
npm run test:watch

# Release new version
npm run release
```

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/nuxt-module-hotjar/latest.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-version-href]: https://npmjs.com/package/nuxt-module-hotjar

[npm-downloads-src]: https://img.shields.io/npm/dm/nuxt-module-hotjar.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-downloads-href]: https://npmjs.com/package/nuxt-module-hotjar

[license-src]: https://img.shields.io/npm/l/nuxt-module-hotjar.svg?style=flat&colorA=18181B&colorB=28CF8D
[license-href]: https://npmjs.com/package/nuxt-module-hotjar

[nuxt-src]: https://img.shields.io/badge/Nuxt-18181B?logo=nuxt.js
[nuxt-href]: https://nuxt.com

<!--
Get your module up and running quickly.

Find and replace all on all files (CMD+SHIFT+F):
- Name: My Module
- Package name: nuxt-module-hotjar
- Description: My new Nuxt module
-->

# Nuxt Hotjar 

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]

- [✨ &nbsp;Release Notes](/CHANGELOG.md)


## Features

## Quick Setup

1. Add `nuxt-module-hotjar` dependency to your project

```bash
# Using pnpm
pnpm add -D nuxt-module-hotjar

# Using yarn
yarn add --dev nuxt-module-hotjar

# Using npm
npm install --save-dev nuxt-module-hotjar
```

2. Add `nuxt-module-hotjar` to the `modules` section of `nuxt.config.ts`

```js
export default defineNuxtConfig({
  modules: [
    'nuxt-module-hotjar'
  ],


  // And add your hotjar site id and the script version
  hotjar: {
    hotjarId: 1234567,
    scriptVersion: 6,

    // optionally you can turn on debug mode for development
    debug: true
  }
})
```

That's it! You can now use Hotjar in your Nuxt app ✨

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

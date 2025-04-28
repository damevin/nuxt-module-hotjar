import { createConfigForNuxt } from '@nuxt/eslint-config';

export default createConfigForNuxt({
  features: {
    stylistic: false,
    tooling: false,
  },
}).prepend({
  ignores: [
    'node_modules/',
    'dist/',
    '.nuxt/',
    '.output/',
    '*.log',
    'coverage/',
    'public/',
    'assets/',
  ],
});

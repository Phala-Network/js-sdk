/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
// https://kulshekhar.github.io/ts-jest/docs/guides/esm-support
module.exports = {
  preset: 'ts-jest/presets/js-with-ts-esm',
  globals: {
    'ts-jest': {
      useESM: true,
    },
  },
}

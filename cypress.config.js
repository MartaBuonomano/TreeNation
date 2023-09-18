const { defineConfig } = require('cypress')

module.exports = defineConfig({
  pageLoadTimeout: 60000,
  defaultCommandTimeout: 4000,
  responseTimeout: 30000,
  requestTimeout: 5000,
  watchForFileChanges: false,
  e2e: {
    baseUrl: 'https://tree-nation.com/',
  },
});
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  /*"pluginsFile": false,
  "viewportHeight": 880,
  "viewportWidth": 1280,*/
  e2e: {
    baseUrl: './src/index.html',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

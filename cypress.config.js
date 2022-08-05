const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video: true,
  screenshotsFolder: 'reports/screenshots',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

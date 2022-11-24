const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
  projectId: 'ioceso',
  screenshotOnRunFailure: true,
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/report',
    charts: true,
    reportPageTitle: 'Joan Media Demo Report',
    embeddedScreenshots: true,
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

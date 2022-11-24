const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
  projectId: 'ioceso',
  screenshotOnRunFailure: true,
  reporter: 'mochawesome',
  // reporterOptions: {
  //   reportDir: 'cypress/report',
  //   html: false,
  //   charts: true,
  //   reportPageTitle: 'Joan Media Demo Report',
  //   embeddedScreenshots: true,
  // },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

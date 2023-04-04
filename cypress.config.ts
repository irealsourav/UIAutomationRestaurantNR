const { defineConfig } = require("cypress");

export default defineConfig({
  video: false,
  chromeWebSecurity: false,
  experimentalModifyObstructiveThirdPartyCode: true,
  scrollBehavior: false,
  e2e: {
    testIsolation: false,
    baseUrl: "https://www.lieferando.de/en",

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: `cypress/e2e/**/*.{ts,tsx}`,
  },
  //failOnStatusCode: false,
  defaultCommandTimeout: 15000,
  pageLoadTimeout: 15000,
  requestTimeout: 15000,
  watchForFileChanges: false,
});

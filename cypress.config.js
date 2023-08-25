const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://automationpratice.com.br', // Site testado
    defaultCommandTimeout: 9000, // Tempo entre cada ação
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

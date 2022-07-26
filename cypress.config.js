const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'custom-title',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
    },
  },
<<<<<<< HEAD
<<<<<<< HEAD
});
=======
});
>>>>>>> parent of 2076b74 (Inserindo configurações do mochawesome no arquivo de configuração do cypress)
=======
});
>>>>>>> 61b90735fd69e6893cede0cbfd13e0713935481d

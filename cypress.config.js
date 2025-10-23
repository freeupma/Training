// const { defineConfig } = require("cypress");

// module.exports = defineConfig({
//   e2e: {
//     setupNodeEvents(on, config) {
//       // implement node event listeners here
//     },
//   },
// });
const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    screenshotOnRunFailure: true,
    experimentalStudio: true, 
    screenshotsFolder: 'cypress/screenshots',
    setupNodeEvents(on, config) {
      
    },
  },
});


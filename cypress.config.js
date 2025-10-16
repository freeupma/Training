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
  },
  screenshotsFolder: 'cypress/screenshots',
});

// const { defineConfig } = require('cypress');
// const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
// const { addCucumberPreprocessorPlugin } = require('@badeball/cypress-cucumber-preprocessor');
// const createEsbuildPlugin = require('@badeball/cypress-cucumber-preprocessor/esbuild');

// module.exports = defineConfig({
//   e2e: {
//     specPattern: "**/*.feature",
//     async setupNodeEvents(on, config) {
//       await addCucumberPreprocessorPlugin(on, config);
//       on("file:preprocessor", createBundler({
//         plugins: [createEsbuildPlugin(config)],
//       }));
//       return config;
//     },
//     //baseUrl: "https://www.saucedemo.com/",
//   },
// });



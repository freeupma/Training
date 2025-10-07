// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
//import './commands'

// Automatically take a screenshot after every command
Cypress.on('command:end', (command) => {
  // Only capture after visible user actions (skip internal stuff)
  const actionsToCapture = [
    'visit',
    'click',
    'type',
    'select',
    'check',
    'uncheck',
    'contains'
  ];

  if (actionsToCapture.includes(command.attributes.name)) {
    const name = `${Cypress.currentTest.titlePath.join(' - ')} - ${command.attributes.name}`;
    cy.screenshot(name, { capture: 'runner' });
  }
});

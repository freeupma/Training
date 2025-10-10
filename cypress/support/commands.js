// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// Visit home page
Cypress.Commands.add('visitHome', () => {
  cy.visit('https://automationexercise.com/');
  cy.url().should('include', 'automationexercise.com');
});

// Search for a product
Cypress.Commands.add('searchProduct', (productName) => {
     cy.contains('Products').click();   // navigate first
     cy.get('#search_product').should('be.visible');  // confirm search bar exists
     cy.get('#search_product').type(productName);
     cy.get('#submit_search').click();

});

// Add the first product from search results
Cypress.Commands.add('addFirstProductToCart', () => {
  cy.get('.productinfo.text-center').first().trigger('mouseover');
  cy.contains('Add to cart').click();
  cy.contains('View Cart').click();
});

// Verify a product exists in the cart
Cypress.Commands.add('verifyProductInCart', (productName) => {
  cy.get('.cart_description').should('contain.text', productName);
});

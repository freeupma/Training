//returnemptyresult.cy.js

describe('Mock empty API response', () => {
  it('handles an empty users list gracefully', () => {
    // Intercept and stub the GET request with an empty list
    cy.intercept('GET', 'https://reqres.in/api/users?page=2', {
      statusCode: 200,
      body: {
        page: 20,
        per_page: 6,
        total: 120,
        total_pages: 2,
        data: [], // Empty list
      },
    }).as('getEmptyUsers');

    // Visit a dummy page ie kitchen sink to execute code in browser context
    cy.visit('https://example.cypress.io/');

    // Trigger the GET request inside the browser (so Cypress can intercept it)
    cy.window().then((win) => {
      return fetch('https://reqres.in/api/users?page=2');
    });

    // Wait for the intercepted request
    cy.wait('@getEmptyUsers').then((interception) => {
      expect(interception.response.statusCode).to.eq(200);
      expect(interception.response.body.data).to.have.length(0);
      cy.log(' Empty user list handled correctly');
    });
  });
});

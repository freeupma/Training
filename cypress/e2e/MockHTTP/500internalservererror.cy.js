//500 error
describe('Mock API Error Response', () => {
  it('handles a 500 Internal Server Error well', () => {
    // Intercept the API call and simulate a server error
    cy.intercept('GET', 'https://reqres.in/api/users?page=2', {
      statusCode: 500,
      body: {
        error: 'Internal Server Error',
        message: 'Something went wrong on the server.',
      },
    }).as('getUsersError');

    // Visit a dummy page ie kitchen sink to run code in browser context
    cy.visit('https://example.cypress.io/');

    // Trigger the request from inside the browser
    cy.window().then((win) => {
      return fetch('https://reqres.in/api/users?page=2').catch(() => {
        // Catching to prevent unhandled promise rejection in browser “If this request fails, don’t crash; I’ll handle it silently.”
      });
    });

    // Wait for the intercepted request
    cy.wait('@getUsersError').then((interception) => {
      expect(interception.response.statusCode).to.eq(500);
      expect(interception.response.body.error).to.eq('Internal Server Error');
      cy.log(' Handled 500 Internal Server Error correctly');
    });
  });
});

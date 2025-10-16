// /mocksuccessfulapiresponse.cy.js

describe('Mock API response - simulate successful user creation', () => {
  it('mocks a POST /api/users response to control the frontend behavior', () => {
    // Intercept the POST request and return a fake successful response
    cy.intercept('POST', 'https://reqres.in/api/users', {
      statusCode: 201,
      body: {
        id: '123',
        name: 'Janet Koko',
        job: 'QA Engineer',
        createdAt: '2025-10-16T07:35:00.000Z',
      },
    }).as('createUser');

    // Visit kitchen sink website to run fetch() in browser context
    cy.visit('https://example.cypress.io/');

    // Trigger the request manually from inside the browser window
    cy.window().then((win) => {
      return fetch('https://reqres.in/api/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: 'Janet Koki',
          job: 'QA Engineer',
        }),
      });
    });

    // Wait for our mock request to complete
    cy.wait('@createUser')
      .its('response.statusCode')
      .should('eq', 201);

    // Assert on the intercepted mock response body
    cy.get('@createUser').then((interception) => {
      expect(interception.response.body).to.have.property('id', '123');
      expect(interception.response.body).to.have.property('name', 'Janet Koko');
      expect(interception.response.body).to.have.property('job', 'QA Engineer');
    });

    cy.log('✅ Mocked user creation succeeded with fake API response');
  });
});


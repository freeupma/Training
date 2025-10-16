//waitForApiCall.cy.js

describe('Wait for a specific API call to complete', () => {
  it('waits for GET /posts to finish before asserting', () => {
    // Intercept and alias the real API call
    cy.intercept('GET', 'https://jsonplaceholder.typicode.com/posts').as('getPosts');

    // Visit a page that triggers the request
    cy.visit('https://jsonplaceholder.typicode.com/');

    // Perform a request manually (you could also have your app trigger this).in this case trigger manually in the browser
    cy.window().then((win) => {
      fetch('https://jsonplaceholder.typicode.com/posts');
    });

    // Wait for the GET /posts request to complete
    cy.wait('@getPosts').its('response.statusCode').should('eq', 200);

    // You could add UI assertions here if your app displays the data
    cy.log('GET /posts API completed successfully');
  });
});

describe('JWT Login via API', () => {
  it('injects JWT into local storage before visiting app', () => {
    cy.LoginAPI().then(() => {//Set custom command
      cy.visit('https://rahulshettyacademy.com/client/', {
        onBeforeLoad: (window) => {//Will run this before visiting the url
          window.localStorage.setItem('token', Cypress.env('token'))//set env token
        }
      })
    })
  })
})
// The test logs in through the backend API.

// Stores the JWT in Cypress’s environment.

// Injects it into window.localStorage before the page loads.

// Opens the app already authenticated — skipping the login UI.





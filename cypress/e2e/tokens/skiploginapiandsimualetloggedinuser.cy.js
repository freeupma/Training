

describe('Inject saved JWT token', () => {
  it('logs in by directly setting a valid JWT token', () => {
    //  JWT token for a successfull login
    const jwtToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OGYxZTNhYWY2NjlkNmNiMGExOGI3MTciLCJ1c2VyRW1haWwiOiJrb2tpOTQ5Njk4QGdtYWlsLmNvbSIsInVzZXJNb2JpbGUiOjI3MjM0MjM0NTYsInVzZXJSb2xlIjoiY3VzdG9tZXIiLCJpYXQiOjE3NjA2ODMxMDYsImV4cCI6MTc5MjI0MDcwNn0.dTEvlhzg51LINn1u5ar06gfvUIZ1zvKZoMa58xAzfEc'

    // Step 1: Visit the url
    cy.visit('https://rahulshettyacademy.com/client/')

    // Step 2: Inject the token into local storage
    cy.setSessionToken(jwtToken)

    // Step 3: Reload the page so the token is applied to the app
    cy.reload()

    // Step 4: Verify that login succeeded 
    cy.get('.card-body').should('be.visible')
  })
})

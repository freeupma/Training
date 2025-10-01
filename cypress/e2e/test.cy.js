describe('Google Title Test', () => {
  it('should show the correct title', () => {
    // Visit Google
    cy.visit('https://www.google.com')

    // Assert that the title is correct
    cy.title().should('eq', 'Google') //Title should equal to Google
  })
})
describe('AutomationExercise E2E using Custom Commands', () => {
  it('should search, add to cart and verify product in cart', () => {
    // Visit the site
    cy.visitHome();

    // Search for a product
    const productName = 'Blue Top';
    cy.searchProduct(productName);

    // Add to cart and verify
    cy.addFirstProductToCart();
    cy.verifyProductInCart(productName);
  });
});

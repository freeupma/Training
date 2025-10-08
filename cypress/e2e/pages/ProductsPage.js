class ProductsPage {
    verifyOnProductsPage() {
        cy.url().should('include','https://www.saucedemo.com/inventory.html');
        cy.get('.title').should('contain', 'Products');
    }

    addProductToCart(productName) {
        cy.contains('.inventory_item_name ',productName)
          .parents('.inventory_item') // //use .parents() and .within() to narrow the scope to a particular product
          .within(() =>{
            cy.get('button').click();// find the button within this product only and not any other add to cart buttons
    });
}

    gotoCart() {
        cy.get('.shopping_cart_link').click();
    }
}

export default ProductsPage;
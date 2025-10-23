class CartPage{
//1. Cart page should be visible
    verifyCartPageVisible(){
        cy.url().should('include','https://automationexercise.com/view_cart');
        cy.get('#cart_info_table').should('be.visible');


    }
//2. Verify the products in my cart
    verifyProductInCart(productName){
        // Ensure cart table is visible and contains the expected product name
        cy.get('#cart_info_table').should('be.visible');
        // Look for the product name inside the cart's table cells
        cy.get('#cart_info_table').contains('td', productName).should('exist');

    }
}

export default CartPage;
class CartPage{
//1. Cart page should be visible
    verifyCartPageVisible(){
        cy.url().should('include','https://automationexercise.com/view_cart');
        cy.get('#cart_info_table').should('be.visible');


    }
//2. Verify the products in my cart
    verifyProductInCart(productName){
        cy.get('#cart_info_table').should('be.visible');

    }
}

export default CartPage;
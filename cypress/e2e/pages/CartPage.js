class CartPage {
    verifyProductinCart(productName){
        cy.get('.inventory_item_name').should('contain', productName);
    }
    
    proceedToCheckout(){
        cy.get('[data-test="checkout"]').click();

    }

    fillCheckoutInfo(firstName, lastName, postalCode) {
        cy.get('[data-test="firstName"]').type(firstName);
        cy.get('[data-test="lastName"]').type(lastName);
        cy.get('[data-test="postalCode"]').type(postalCode);
        cy.get('[data-test="continue"]').click();


    }
    finishCheckout() {
        cy.get('[data-test="finish"]').click();
    }

    VerifyOrderisComplete () {
        cy.get('[data-test="checkout-complete-container"]')
          .should('contain','Thank you for your order!' )

    }

}
export default CartPage;
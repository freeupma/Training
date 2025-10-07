//const { describe } = require("mocha");



describe('SauceDemo End to End Testing Flow', () => {
    
    it('A user logs in, adds product to cart, and verifies it' ,() =>{

        //Visit the site using the URL
        cy.visit('https://www.saucedemo.com/')


        //Login with the credentials
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();
    
        //Verify successful login by checking the products page
        cy.url().should('include', 'https://www.saucedemo.com/inventory.html');
        cy.get('.app_logo').should('contain','Swag Labs' );

        //Add Sauce Labs Bike Light to cart
        cy.get('[data-test="item-0-title-link"] > [data-test="inventory-item-name"]');
        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();

        //Go to Cart
        cy.get('[data-test="shopping-cart-link"]').click();

        //Verify the selected product is in the cart
        cy.get('[data-test="cart-list"]').should('contain', 'Sauce Labs Bike Light');

        //Proceed with the checkout
        cy.get('[data-test="checkout"]').click();

        //Verify the checkout page is corrrect
        cy.url().should('include', 'https://www.saucedemo.com/checkout-step-one.html');

        //Fill out the checkout info
        cy.get('[data-test="firstName"]').type('Janet');
        cy.get('[data-test="lastName"]').type('Koks');
        cy.get('[data-test="postalCode"]').type('20100');
        cy.get('[data-test="continue"]').click();

        //Finish
        cy.get('[data-test="finish"]').click();

        //Verify the finish page
        cy.get('[data-test="checkout-complete-container"]').should('contain.text', 'Thank you for your order!');



});
});
        

//Finish
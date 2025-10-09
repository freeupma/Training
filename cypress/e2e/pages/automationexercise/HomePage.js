class HomePage {
    visit() {
        //Visit the url
        cy.visit('https://automationexercise.com/');
    }
        //Go to the products
    goToProducts(){
        cy.contains(' Products').click();

    }

        //Verify successfull loading of the homepage
    verifyHomePage(){
        cy.url().should('include', 'https://automationexercise.com/');
        cy.get('.features_items').should('be.visible');
    }    
}

export default HomePage;
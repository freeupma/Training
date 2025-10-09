class ProductsPage{
//Actions to be performed in this page are listed
//1. Verify that you are on the products page
    verifyProductsPage(){
        cy.url().should('include', 'https://automationexercise.com/products');
        cy.get('.features_items').should('be.visible');


    }
//2. Search for a particular product
    searchProduct(productName){
        cy.get('#search_product').type(productName);
        cy.get('#submit_search').click();

    }

//3.Pick the first matching element.Cy would find all and possibly fail if more than 1 match exists
//simulate a mousehover over the element
    addFirstSearchResultToCart(){
        cy.get('.productinfo.text-center').first().trigger('mousehover');
        cy.contains('Add to cart').click();

    }

//View the products in cart
    viewCart() {
        cy.contains('View Cart').click();

    }
    
}

export default ProductsPage;
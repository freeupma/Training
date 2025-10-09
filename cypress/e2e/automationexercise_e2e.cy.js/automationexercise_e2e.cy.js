import HomePage from "../pages/automationexercise/HomePage";
import ProductsPage from "../pages/automationexercise/ProductsPage";
import CartPage from "../pages/automationexercise/CartPage";

describe('AutomationExercise E2E Test using Page Object Model',()=>{
    const homePage= new HomePage;
    const productsPage= new ProductsPage;
    const cartPage=new CartPage();

    it('should search, add to cart and verify product in cart', ()=>{
//Visit Home Page
        homePage.visit();
        homePage.verifyHomePage();
//Go to products page
        homePage.goToProducts();
        productsPage.verifyProductsPage();


//Search for a product
        const productName='Blue Top';
        productsPage.searchProduct(productName);

//Add the first search result to cart
        productsPage.addFirstSearchResultToCart();

//View and verify cart
        productsPage.viewCart();
        cartPage.verifyCartPageVisible();
        cartPage.verifyProductInCart(productName);

    });
});
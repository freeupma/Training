import LoginPage from "./pages/LoginPage";
import ProductsPage from "./pages/ProductsPage";
import CartPage from "./pages/CartPage";



describe('SauceDemo Checkout End to End with Page Object Model', ()=>{
    //declare constant variables
    //You cannot reassign these variables to something else later but you can use&modify the object's contents
    const loginPage =new LoginPage();
    const productsPage= new ProductsPage();
    const cartPage= new CartPage();

    it('should login, add a product to cart, and checkout successfully', ()=>{
        //vist the url and login with the credentials
        loginPage.visit();
        loginPage.login('standard_user','secret_sauce');

        //verify the products page
        productsPage.verifyOnProductsPage();

        //Add to cart
        const product='Sauce Labs Backpack';
        productsPage.addProductToCart(product);

        //Go to the cart section and verify
        productsPage.gotoCart();
        cartPage.verifyProductinCart(product);

        //Complete the checkout process
        cartPage.proceedToCheckout();
        cartPage.fillCheckoutInfo('Janet','Jepkorir', ' Isiolo_Road');
        cartPage.finishCheckout();

        //verify order completion
        cartPage.VerifyOrderisComplete();

    });
});
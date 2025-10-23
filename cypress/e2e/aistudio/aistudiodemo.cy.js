import HomePage from '../pages/automationexercise/HomePage.js'
import ProductsPage from '../pages/automationexercise/ProductsPage.js'
import CartPage from '../pages/automationexercise/CartPage.js'

describe('Cypress Studio Demo', function () {
    const home = new HomePage()
    const products = new ProductsPage()
    const cart = new CartPage()

    it('create new transaction', function () {
        // visit home and verify
        home.visit()
        home.verifyHomePage()
        // go to products and verify
        home.goToProducts()
        products.verifyProductsPage()

        // assert the product card shows Add to cart and then add to cart
        cy.get('div:nth-child(3) div.overlay-content a.btn').should('have.text', 'Add to cart')
        cy.get('div:nth-child(3) div.overlay-content a.btn').click({ force: true })

        // open cart modal (as in original) and continue to cart
        cy.get('#cartModal u').click()

        // view cart page and verify
        products.viewCart()
        cart.verifyCartPageVisible()
        cart.verifyProductInCart('Blue Top')

        // proceed with do action button to mimic original flow
        cy.get('#do_action a.btn').click()
    })
})
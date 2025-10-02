
describe('Sauce Demo Assertions and Locators', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/');
  });

  it('should load the login page with correct title', () => {
    cy.title().should('eq', 'Swag Labs'); // check the title
  });

  it('should have a login button', () => {
    cy.get('[data-test="login-button"]')   // use data-test attribute
      .should('exist')
      .and('be.visible')
      .and('have.value', 'Login') // login button with correct text
      .and('not.be.disabled');
  });

  it('should show an error message when invalid credentials are used', () => {
    cy.get('[data-test="username"]')
      .should('be.visible')
      .type('invalid_user'); // enter invalid username

    cy.get('[data-test="password"]')
      .should('be.visible')
      .type('secret_sauce'); // enter password

    cy.get('[data-test="login-button"]').click(); // click login

    // assert that an error message is displayed
    cy.get('[data-test="error"]').should('be.visible')
      .should('have.text', 'Epic sadface: Username and password do not match any user in this service')
  });
});


//    it('should load the login page', () => {
//     //sauce demo login with valid credentials
//     cy.get('[data-test="username"]')
//       .should('be.visible')
//       .type('standard_user'); //Enter username


//     cy.get('[data-test="password"]')
//       .should('be.visible')
//       .type('secret_sauce'); //Enter password


//     cy.get('[data-test="login-button"]')
//       .should('be.visible')
//       .click(); //Click login button
// });
//      // Wait for the product container to be visible (indicating login success)

//    
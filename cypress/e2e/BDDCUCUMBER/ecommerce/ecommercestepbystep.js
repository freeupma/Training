

Given("I open the Sauce Demo login page", () => {
  cy.visit("https://www.saucedemo.com/");
});

When("I login with valid username and password", () => {
  cy.get("#user-name").type("standard_user");
  cy.get("#password").type("secret_sauce");
  cy.get("#login-button").click();
});

Then("I should see the products page", () => {
  cy.url().should("include", "/inventory.html");
  cy.get(".title").should("contain.text", "Products");
});

When("I login with invalid username and password", () => {
  cy.get("#user-name").type("fake_user");
  cy.get("#password").type("wrong_pass");
  cy.get("#login-button").click();
});

Then("I should see an error message", () => {
  cy.get("[data-test='error']")
    .should("be.visible")
    .and("contain.text", "Username and password do not match");
});

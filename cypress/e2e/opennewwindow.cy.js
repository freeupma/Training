describe('Child window handling - remove target attribute', () => {
  
 it('Opens child link in the same window', () => {
    cy.visit('https://the-internet.herokuapp.com/windows');

   // Remove target="_blank" so Cypress can open in the same tab
    cy.get('.example a')     //Click here locator // inspect the page to find the right locator
      .invoke('removeAttr', 'target') // remove the target=blank from Click Here so that it opens in the same tab
      .click();

//     // Now inside the child window
    cy.url().should('include', '/windows/new');
    cy.contains('New Window').should('be.visible');
  });
});

describe('Demo Automation Windows Page — force popup in same tab', () => {
  beforeEach(() => {
    // Ignore site-side exceptions
    Cypress.on('uncaught:exception', () => false);
  });

// Demo Automation Windows Page
 it('handles opening a new window by removing target', () => {
    
    cy.visit('https://demo.automationtesting.in/Windows.html?utm_source=chatgpt.com'); // url

    // Remove target=_blank from the Click button...Inspect this button
    cy.get('a > .btn')
     .invoke('removeAttr', 'target')
     .click();


    
  });
});
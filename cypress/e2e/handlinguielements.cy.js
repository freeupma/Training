

describe('The Internet Demo Site for testing UI handling elementa',()=>{
    beforeEach(()=>{
        cy.visit('https://the-internet.herokuapp.com/');//visit the Internet Demo site
    });

    it('should interact with the checkboxes present',()=>{
        cy.visit('https://the-internet.herokuapp.com/checkboxes');//navigate to the checkboxes page using the url
        cy.get('#checkboxes > :nth-child(1)').first().check().should('be.checked');//the first box should be checked
        cy.get('#checkboxes > :nth-child(3)').uncheck();//uncheck the second checkbox
    });

    it('should select values from the dropdown option', () =>{
        cy.visit('https://the-internet.herokuapp.com/dropdown');
        cy.get('#dropdown').select('1');//can use value 1 or text Option 1
    });

    it ('should handle visible/invisible elements',()=>{
        cy.visit('https://the-internet.herokuapp.com/dynamic_loading');
        cy.get('[href="/dynamic_loading/1"]').click();//click the first option
        cy.get('button').click(); //click the start button
        cy.get('.example > :nth-child(2)').should('be.visible').and('contain.text','Example 1: Element on page that is hidden');
    
    });


})
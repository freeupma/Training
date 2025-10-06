//const { describe } = require("mocha");
describe('Handle Simple Browser Alerts',()=>{
    it('should handle a simple alert box',()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts');// Sample url
        cy.get(':nth-child(2) > button').click(); //click the confirm button

//Handle confirm popup by accepting it
        cy.on('window:confirm',(confirmText) =>{
            expect(confirmText).to.equal('I am a JS Confirm');
            return true; //true will accept the confirm popup
        });

//You can assert the result also
        cy.get('#result')
          .should('be.visible')
          .and('have.text', 'You clicked: Ok');

    });


});



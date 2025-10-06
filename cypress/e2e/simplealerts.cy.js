// const { describe } = require("mocha");

describe('Handle Simple Browser Alerts',()=>{
    it('should handle a simple alert box',()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts');// Sample url

        cy.get(':nth-child(1) > button').click();// Trigger the alert Button

        cy.on('window:alert',(alertText) =>{
            expect(alertText).to.equal('I am a JS Alert');//Intercept and confirm the alert
        });



    });


});
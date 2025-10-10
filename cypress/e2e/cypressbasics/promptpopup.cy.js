describe('Handle Prompt Popup', () => {
    it('should handle prompt popup', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts'); // URL for prompt popup
        
        // Trigger prompt popup
        cy.get('button[onclick="jsPrompt()"]').click(); // Trigger the prompt button
        
        // Handle prompt popup
        cy.on('window:prompt', (promptText) => {
            expect(promptText).to.equal('I am a JS prompt');
            return 'Cypress Test'; // Entering 'Cypress Test' into the prompt
        });

        // Check if the value is correctly inserted
        cy.get('#result').should('contain', 'You entered: Cypress Test');
    });
});

// //const { describe } = require("mocha");

// describe('Mouse Hover Action', () => {
// //   it('should display tooltip when hovering over the button', () => {
// //     cy.visit('https://demoqa.com/tool-tips');// Visit DemoQA Tool Tips page.

// //     // // Hover over the button
// //     cy.get('#toolTipButton').trigger('mouseover');

// //     // // Assert tooltip visibility and text
// //     cy.get('.tooltip-inner')
// //       .should('be.visible')
// //       .and('contain.text', 'You hovered over the Button');
// //   });
// // });


// // Anothe example
// //     it('should show the info upon hover', () => {
// //         cy.visit('https://the-internet.herokuapp.com/hovers');
// // //Hover over the first image
// //         cy.get(':nth-child(3) > img').trigger('mousehover');


// //     });

// //  });


//  it('should reveal dropdown options on hover', () => {
//     cy.visit('https://www.w3schools.com/css/css_dropdowns.asp');

// });
// });


describe('Mouse Hover - Dropdown Menu', () => {
  it('should reveal dropdown options on hover', () => {
    cy.visit('https://www.w3schools.com/css/css_dropdowns.asp');
    cy.contains('Dropdown Menu')  
    cy.get(':nth-child(2) > .dropdown > .dropbtn').trigger('mouseover');
    cy.get('.dropdown-content').should('be.visible');
  });
});

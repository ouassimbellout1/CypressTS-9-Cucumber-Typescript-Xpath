// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('googleSearch', (search) => {
cy.visit('https://www.google.com/');
    cy.visit('/')
/*    cy.visit('/', {
        onBeforeLoad (win) {
            Object.defineProperty(win.navigator, 'language', {
              value: 'fr'
            })
          }
        }); 
*/
    cy.xpath("//textarea[@id='APjFqb']").type(`${search}{enter}`, { delay : 120 });
    cy.get('.MUFPAc a').eq(2).click();
})
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
Cypress.Commands.add('login', (email = 'etapaspruebas@gmail.com', password = '12345678') => {
    cy.visit('/login')
    cy.contains('SELECCIONA TU ROL').click({ force: true })
    cy.contains('Administrador').click({ force: true })
    cy.get('#app input[aria-label="CORREO"]').type(email);
    cy.get('#app input[aria-label="CONTRASEÑA"]').type(password);
    cy.get('button[type="submit"]').click()

    cy.url().should('include', '/app/inicio')
    cy.contains('REPFORA EP', { timeout: 10000 }).should('be.visible')
})
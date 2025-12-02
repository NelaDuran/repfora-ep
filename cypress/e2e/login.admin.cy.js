describe('Login como Administrador', () => {
    it('Login Administrador', () => {
        cy.visit('/login')
        cy.contains('SELECCIONA TU ROL').click({ force: true })
        cy.contains('Administrador').click({ force: true })
        cy.get('#app input[aria-label="CORREO"]').type('etapaspruebas@gmail.com');
        cy.get('#app input[aria-label="CONTRASEÑA"]').click();
        cy.get('#app input[aria-label="CONTRASEÑA"]').type('12345678');
        cy.get('button[type="submit"]').click()
        cy.url().should('include', '/app/inicio')
    })
})
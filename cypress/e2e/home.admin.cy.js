describe('Registro de Etapas Productivas', () => {
  beforeEach(() => {
    cy.login('etapaspruebas@gmail.com', '12345678')
  })

  it('Ingreso a home o inicio', () => {
    cy.visit('login#/app/inicio')
    cy.get('#app div:nth-child(2) > div.row > div.column > div:nth-child(1)').click();
    cy.get('#app tr:nth-child(1) span.col i.notranslate').click();
    cy.wait(1000)
    cy.get('#q-portal--dialog--2 span.block').click();
  })
})
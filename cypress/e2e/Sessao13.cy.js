/// <reference types="Cypress" />

describe('Central de Atendimento ao Cliente TAT', function() {
  beforeEach(function(){
    cy.visit('./src/index.html')
  })

  it('encontre o gato', function(){
    cy.get('#cat')
        .should('not.be.visible')
        .invoke('show')
        .should('be.visible')
    cy.get('#title')
    .invoke('text', 'CAT TAT')
    cy.get('#subtitle')
    .invoke('text', 'Eu ❤️ datinhos')
  })
})
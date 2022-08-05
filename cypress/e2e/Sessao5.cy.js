/// <reference types="Cypress" />


describe('Central de Atendimento ao Cliente TAT', function() {

  it('marca o tipo de atendimento "Feedback', function(){
      cy.visit('./src/index.html')
      cy.get('#firstName').type('Pâmela')
      cy.get('#lastName').type('Paesi')
      cy.get('#email').type('pamelapaesi25@gmail.com')
      cy.get('#phone').type('51 999452903')
      cy.get('#product').select('YouTube')
      cy.get(':nth-child(4) > input').check().should('have.value', 'feedback')
  })

  it('marca cada tipo de atendimento', function(){
      cy.visit('./src/index.html')
      cy.get('input[type="radio"]')
      .should('have.length', 3)
      .each(function($radio){
          cy.wrap($radio).check()
          cy.wrap($radio).should('be.checked')
      })
  })
})
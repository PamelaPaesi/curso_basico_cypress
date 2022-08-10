/// <reference types="Cypress" />

describe('Central de Atendimento ao Cliente TAT', function() {
  const THREE_SECONDS_IN_MS=3000
  beforeEach(function(){
    cy.visit('./src/index.html')
  })

  /*Cypress._.times(5, function(){
    it('verifica mensagem de erro com os comandos cy.clock() e cy.tick()', function(){
      cy.clock()       
      cy.get('#firstName').type('Pâmela')
      cy.get('#lastName').type('Paesi')
      cy.get('#email').type('pamelapaesi25@')
      cy.get('#open-text-area').type('Atendimento excelente')
      cy.get('.button').click()
      cy.get('.error').should('be.visible')
      cy.tick(THREE_SECONDS_IN_MS)
      cy.get('.error').should('not.be.visible')

  })
  })
    

    it('verifica mensagem de sucesso com os comandos cy.clock() e cy.tick()', function(){
    cy.clock() 
    cy.get('#firstName').type('Pâmela')
    cy.get('#lastName').type('Paesi')
    cy.get('#email').type('pamelapaesi25@gmail.com')
    cy.get('#open-text-area').type('Atendimento excelente')
    cy.contains('button', 'Enviar').click()
    cy.get('.success').should('be.visible')
    cy.tick(THREE_SECONDS_IN_MS)
    cy.get('.error').should('not.be.visible')
  })

    it('exibe e esconde as mensagens de sucesso e erro usando o .invoke', () => {
      cy.get('.success')
        .should('not.be.visible')
        .invoke('show')
        .should('be.visible')
        .and('contain', 'Mensagem enviada com sucesso.')
        .invoke('hide')
        .should('not.be.visible')
      cy.get('.error')
        .should('not.be.visible')
        .invoke('show')
        .should('be.visible')
        .and('contain', 'Valide os campos obrigatórios!')
        .invoke('hide')
        .should('not.be.visible')
    })

    it('preenche a area de texto usando o comando .ivoke', function(){
      const longText = Cypress._.repeat('0123456789', 20)

      cy.get('#open-text-area')
      .invoke('val', longText)
      .should('have.value', longText)
    })*/

    it('faz uma requisição HTTP', function(){
      cy.request('https://cac-tat.s3.eu-central-1.amazonaws.com/index.html')
      .should(function(response){
        expect(response.status).to.equal(200)
        expect(response.statusText).to.equal('OK')
        expect(response.body).to.include('CAC TAT')
      })
    })
})
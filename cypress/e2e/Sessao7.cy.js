/// <reference types="Cypress" />


describe('Central de Atendimento ao Cliente TAT', function() {

  it('seleciona um arquivo da pasta fixtures', function(){
      cy.visit('./src/index.html')
      cy.get('input[type="file"]')
      .selectFile('cypress/fixtures/example.json')
      .should(function($input){
          expect($input[0].files[0].name).to.equal('example.json')
      })
  })

  it('seleciona um arquivo simulando um drag-and-drop', function(){
      cy.visit('./src/index.html')
      cy.get('input[type="file"]')
      .selectFile('cypress/fixtures/example.json', {action: 'drag-drop'})
      .should(function($input){
          expect($input[0].files[0].name).to.equal('example.json')
      })
  })

  it('seleciona um arquivo utilizando uma fixture para a qual foi dada um alias', function(){
      cy.visit('./src/index.html')
      cy.fixture('example.json').as('sampleFile')
      cy.get('input[type="file"]')
      .selectFile('@sampleFile')
      .should(function($input){
          expect($input[0].files[0].name).to.equal('example.json')
      })
  })
})
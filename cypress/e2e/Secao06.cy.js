/// <reference types="Cypress" />


describe('Central de Atendimento ao Cliente TAT', function() {
    beforeEach(function() {
        cy.visit('./src/index.html')
    })
    it('marca ambos checkboxes, depois desmarca o último', function(){
        cy.get('#email-checkbox').check()
        cy.get('#phone-checkbox').check()
        cy.get('#email-checkbox').uncheck()
        cy.get('#phone-checkbox').uncheck().last()
    })

    it('marca ambos checkboxes, depois desmarca o último modo 2', function(){
        cy.get('input[type="checkbox"]')
        .check()
        .should('be.checked')
        .last()
        .uncheck()
        .should('not.be.checked')
    })

    it('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', function(){
        cy.get('#firstName').type('Pâmela')
        cy.get('#lastName').type('Paesi')
        cy.get('#email').type('pamelapaesi25@gmail.com')
        cy.get('#product').select('Blog')
        cy.get('#support-type > :nth-child(3)').click()
        cy.get('#phone-checkbox').check()
        cy.get('#open-text-area').type('Atendimento excelente')
        cy.get('.button').click()
        cy.get('.error').should('be.visible')
    })
})
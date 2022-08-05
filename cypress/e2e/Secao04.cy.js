/// <reference types="Cypress" />

describe('Central de Atendimento ao Cliente TAT', function() {
    cy.visit('./src/index.html')
    it('seleciona um produto (YouTube) por seu texto', function(){
        cy.get('#firstName').type('Pâmela')
        cy.get('#lastName').type('Paesi')
        cy.get('#email').type('pamelapaesi25@gmail.com')
        cy.get('#phone').type('51 999452903')
        cy.get('#product').select('YouTube')
    })

    it('seleciona um produto (Mentoria) por seu valor (value)', function(){
        cy.get('#firstName').type('Pâmela')
        cy.get('#lastName').type('Paesi')
        cy.get('#email').type('pamelapaesi25@gmail.com')
        cy.get('#phone').type('51 999452903')
        cy.get('#product').select('Mentoria').should('have.value', 'mentoria')
    })

    it('seleciona um produto (Blog) por seu índice', function(){
        cy.get('#firstName').type('Pâmela')
        cy.get('#lastName').type('Paesi')
        cy.get('#email').type('pamelapaesi25@gmail.com')
        cy.get('#phone').type('51 999452903')
        cy.get('#product').select(1).should('have.value', 'blog')
    })
})
/// <reference types="Cypress" />

describe('Central de Atendimento ao Cliente TAT', function() {
    beforeEach(function() {
        cy.visit('./src/index.html')
    })
    it('verifica o título da aplicação', function() {
        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
    })
    it('preenche os campos obrigatórios e envia o formulário', function(){
        const longText = 'Teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste.'
        cy.get('#firstName').type('Pâmela')
        cy.get('#lastName').type('Paesi')
        cy.get('#email').type('pamelapaesi25@gmail.com')
        cy.get('#phone').type('51 999452903')
        cy.get('#product').select('Blog')
        cy.get('#support-type > :nth-child(3)').click()
        cy.get('#email-checkbox').click()
        cy.get('#open-text-area').type(longText,{delay: 0})
        cy.get('.button').click()
        cy.contains('Mensagem enviada com sucesso.').should('be.visible')
    })
    it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', function(){
        cy.get('#firstName').type('Pâmela')
        cy.get('#lastName').type('Paesi')
        cy.get('#email').type('pamelapaesi25@')
        cy.get('#open-text-area').type('Atendimento excelente')
        cy.get('.button').click()
        cy.get('.error').should('be.visible')
    })
    it('campo telefone só aceita numeros', function(){
        cy.get('#phone')
        .type('abcdefghij')
        .should('have.value', '')
    })
    it('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', function(){
        cy.get('#firstName').type('Pâmela')
        cy.get('#lastName').type('Paesi')
        cy.get('#email').type('pamelapaesi25@gmail.com')
        cy.get('#product').select('Blog')
        cy.get('#support-type > :nth-child(3)').click()
        cy.get('#phone-checkbox').click()
        cy.get('#open-text-area').type('Atendimento excelente')
        cy.get('.button').click()
        cy.get('.error').should('be.visible')
    })

    it('preenche e limpa ps campos nome, sobrenome, email e telefone', function(){
        cy.get('#firstName').type('Pâmela').should('have.value', 'Pâmela')
        .clear().should('have.value', '')
        cy.get('#lastName').type('Paesi').should('have.value', 'Paesi')
        .clear().should('have.value', '')
        cy.get('#email').type('pamelapaesi25@gmail.com').should('have.value', 'pamelapaesi25@gmail.com')
        .clear().should('have.value', '')
        cy.get('#phone').type('51999452903').should('have.value', '51999452903')
        .clear().should('have.value', '')
    })

    it('exibe mensahem de erro ao submeter o formulário sem preencher os campos obrigatórios', function(){
        cy.get('.button').click()
        cy.get('.error').should('be.visible')
    })

    it('envia o dormulário com sucesso usando um comando customizado', function(){
        cy.fillMandatoryFieldsAndSubmit()
        cy.contains('Mensagem enviada com sucesso.').should('be.visible')
    })

    it('usando contains para apertar em um botão', function(){
        cy.get('#firstName').type('Pâmela')
        cy.get('#lastName').type('Paesi')
        cy.get('#email').type('pamelapaesi25@gmail.com')
        cy.get('#open-text-area').type('Atendimento excelente')
        cy.contains('button', 'Enviar').click()
        cy.get('.success').should('be.visible')
    })
  })

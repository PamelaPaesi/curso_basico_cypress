Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function(){
    cy.get('#firstName').type('Pâmela')
        cy.get('#lastName').type('Paesi')
        cy.get('#email').type('pamelapaesi25@gmail.com')
        cy.get('#open-text-area').type('Atendimento excelente')
        cy.contains('button', 'Enviar').click()
})
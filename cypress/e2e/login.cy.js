/// <reference types="cypress"/>

// Feature
describe('Login', () => {

    // Cenários (1)
   it('Login com sucesso', () => {

    // Acessar o site 
    cy.visit('/login')

    // Preencher campos
    cy.get('#user').type('eduardo@qazando.com.br') // Inserindo e-mail
    cy.get('#password').type('123456') // Inserindo senha
    cy.get('#btnLogin').click() // Clicando no botão login
    
    // Realizar login
    cy.url().should('include', '/my-account') // Verifica o login pela url

    })


    // Cenários (2)
   it.only('Assinar news', () => {

    // Acessar o site 
    cy.visit('/')

    // Preencher campo
    cy.get('.form-control').type('eduardo@qazando.com.br{enter}') // Inserindo e-mail e apertando enter
    
    })

})

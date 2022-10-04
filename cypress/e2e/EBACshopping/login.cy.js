/// <reference types="cypress" />

context ('Funcionalidade Login', () =>{

    beforeEach(() => {
        cy.visit ('http://lojaebac.ebaconline.art.br/minha-conta/')
    });
    
    afterEach(() => {
        cy.screenshot()
    });

    it ('Deve realizar login com sucesso', () => {
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá')
        cy.get('.page-title').should('contain', 'Minha conta')
        //cy.get('.page-title').should('contein' , 'Minha conta')
    })

    it ('Deve exibir menssagem de erro ao inserir senha inválida', () => {
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('ehsheyy')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error > li').should('contain', 'Erro: A senha')
    })

    it ('Deve exibir menssagem de erro ao inserir dados inválidos', () => {
        cy.get('#username').type('aluno_123456ssebac@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error > li').should('contain', 'Endereço de e-mail')
    })
})
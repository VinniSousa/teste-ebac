/// <reference types="cypress" />

const perfil = require('../../fixtures/login.json')

context('Funcionalidade Login', () => {

    beforeEach(() => {
        cy.visit('minha-conta')
    });

    afterEach(() => {
        cy.screenshot()
    });

    it('Deve realizar login com sucesso', () => {
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá')
        cy.get('.page-title').should('contain', 'Minha conta')
        //cy.get('.page-title').should('contein' , 'Minha conta')
    })

    it('Deve exibir menssagem de erro ao inserir senha inválida', () => {
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('ehsheyy')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error > li').should('contain', 'Erro: A senha')
    })

    it('Deve exibir menssagem de erro ao inserir dados inválidos', () => {
        cy.get('#username').type('aluno_123456ssebac@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error > li').should('contain', 'Endereço de e-mail')
    })
    it('Deve realizar login com sucesso usando arquivo de dados', () => {
        cy.get('#username').type(perfil.login)
        cy.get('#password').type(perfil.senha)
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá')
        cy.get('.page-title').should('contain', 'Minha conta')
    });
    it.only('Deve fazer login com sucesso usando fixture', () => {
        cy.fixture('login').then(dados => {
            cy.get('#username').type(dados.login, {log: false})
            cy.get('#password').type(dados.senha, {log: false})
            cy.get('.woocommerce-form > .button').click()

            cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá')
            cy.get('.page-title').should('contain', 'Minha conta')

        })
    });
})
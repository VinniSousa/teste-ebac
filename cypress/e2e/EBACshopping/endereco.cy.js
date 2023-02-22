/// <reference types="cypress" />

describe('Funcionalidade Enredeços - Faturamento e Entrega', () => {
    beforeEach(() => {
        cy.visit('minha-conta')
        cy.fixture('login').then(dados =>{
          cy.login(dados.login,dados.senha, {log: false})
        })
    });


    it('Deve fazer cadastro de faturamento com sucesso', () => {
       
    });
});
/// <reference types="cypress" />
import enderecoPages from '../../support/pages-objects/endereco.pages';
import EnderecoPages from '../../support/pages-objects/endereco.pages'

describe('Funcionalidade Enredeços - Faturamento e Entrega', () => {
    beforeEach(() => {
        cy.visit('minha-conta')
        cy.fixture('login').then(dados =>{
          cy.login(dados.login,dados.senha, {log: false})
        })
    });


    it.only('Deve fazer cadastro de faturamento com sucesso', () => {
       enderecoPages.editarEnderecoFaturamento('nome','sobrenome','ebac','Brasil','Av. Teste','123','Curitiba','Paraná','82590-300','080000000','teste@teste.com.br')
    });
});
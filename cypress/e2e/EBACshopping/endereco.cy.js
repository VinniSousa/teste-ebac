/// <reference types="cypress" />
import enderecoPages from '../../support/pages-objects/endereco.pages';
import EnderecoPages from '../../support/pages-objects/endereco.pages'
const dadosEnderecos = require ('../../fixtures/endereco.json')

describe('Funcionalidade Enredeços - Faturamento e Entrega', () => {
    beforeEach(() => {
        cy.visit('minha-conta')
        cy.fixture('login').then(dados =>{
          cy.login(dados.login,dados.senha, {log: false})
        })
    });


    it('Deve fazer cadastro de faturamento com sucesso', () => {
       enderecoPages.editarEnderecoFaturamento('nome','sobrenome','ebac','Brasil','Av. Teste','123','Curitiba','Paraná','82590-300','080000000','teste@teste.com.br')
       cy.get('.woocommerce-message').should('contain','Endereço alterado com sucesso.')
    });
    
    it('Deve fazer cadastro de faturamento com sucesso usando arquivo de dados', () => {
      enderecoPages.editarEnderecoFaturamento(
      dadosEnderecos[2].nome,
      dadosEnderecos[2].sobrenome,
      dadosEnderecos[2].empresa,
      dadosEnderecos[2].pais,
      dadosEnderecos[2].endereco,
      dadosEnderecos[2].numero,
      dadosEnderecos[2].cidade,
      dadosEnderecos[2].estado,
      dadosEnderecos[2].cep,
      dadosEnderecos[2].telefone,
      dadosEnderecos[2].email
      )
      cy.get('.woocommerce-message').should('contain','Endereço alterado com sucesso.')
   });
});
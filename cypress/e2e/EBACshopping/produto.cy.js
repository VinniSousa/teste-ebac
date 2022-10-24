/// <reference types="cypress"/>

describe('Funcionalidade Página de produtos', () => {

    beforeEach(() => {
        cy.visit('produtos')
        });

    it('Deve selecionar um produto da lista', () => {
        cy.get('[class="product-block grid"]')
            //.first() Pega o primeiro item da classe
            //.last() Pega o ultimo item da classe
            //.eq(3) Pega o item X da classe
            .contains('Arcadio Gym Short') //Pega pelo texto do botão da classe
            .click()
    });

    it('deve adicionar um produto ao carrinho', () => {
        var quant=5

        cy.get('[class="product-block grid"]')
        .contains('Ajax Full-Zip Sweatshirt').click()
        cy.get('.button-variable-item-M').click()
        cy.get('.button-variable-item-Green').click()
        cy.get('.input-text').clear().type(quant)
        cy.get('.single_add_to_cart_button').click()
        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quant)
        cy.get('.woocommerce-message').should('contain', quant + ' × “Ajax Full-Zip Sweatshirt”')
    });
});
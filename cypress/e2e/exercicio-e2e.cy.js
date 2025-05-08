/// <reference types="cypress" />

context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
  /*  Como cliente 
      Quero acessar a Loja EBAC 
      Para fazer um pedido de 4 produtos 
      Fazendo a escolha dos produtos
      Adicionando ao carrinho
      Preenchendo todas opções no checkout
      E validando minha compra ao final */

  beforeEach(() => {
      cy.visit('/')
  });

  it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
    cy.get('#primary-menu > .menu-item-629 > a').click()
    cy.get('.post-2559 > .product-block').click()
    cy.get('.button-variable-item-M').click()
    cy.get('.button-variable-item-Green').click()
    cy.get('.plus').click().click()
    cy.get('.single_add_to_cart_button').click()
    cy.get('#primary-menu > .menu-item-629 > a').click()
    cy.get('.post-2622 > .product-block > .caption > .meta > .infor > .name > a').click()
    cy.get('.button-variable-item-L').click()
    cy.get('.button-variable-item-Red').click()
    cy.get('.input-text').clear().type('2')
    cy.get('.single_add_to_cart_button').click()
    cy.get('#primary-menu > .menu-item-629 > a').click()
    cy.get(':nth-child(3) > .page-numbers').click()
    cy.get('.post-3098 > .product-block > .caption > .meta > .infor > .name > a').click()
    cy.get('.button-variable-item-33').click()
    cy.get('.button-variable-item-Blue').click()
    cy.get('.single_add_to_cart_button').click()
    cy.get('#primary-menu > .menu-item-629 > a').click()
    cy.get('.post-3528 > .product-block > .block-inner > .image > .product-image > .image-hover').click()
    cy.get('.button-variable-item-32').click()
    cy.get('.button-variable-item-Blue').click()
    cy.get('.single_add_to_cart_button').click()
    cy.get('.woocommerce-message > .button').click()
    cy.get('.checkout-button').click()
    cy.get('#billing_first_name').type('Lucas')
    cy.get('#billing_last_name').type('Pereira')
    cy.get('#billing_address_1').type('Rua tupi, 202')
    cy.get('#billing_city').type('São Paulo')
    cy.get('#billing_postcode').type('11111-111')
    cy.get('#billing_phone').type('2222-222')
    cy.get('#billing_email').type('aluno_ebac@teste.com')
    cy.get('#terms').click()
    cy.get('#place_order').click()
    cy.get('.woocommerce-order-overview').should('exist')
});


})
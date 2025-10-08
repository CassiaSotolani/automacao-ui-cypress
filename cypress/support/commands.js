/// <reference types="cypress"/>

Cypress.Commands.add('login', () => {
    cy.fixture('usuario.json').then((usuario) => {
        cy.get('[data-testid="email"]').type(usuario.nome)
        cy.get('[data-testid="password"]').type(usuario.senha)
        cy.get('[data-testid="btnLogin"]').click()
    })
})

Cypress.Commands.add('adiconarProduto', () => {
    cy.get(':nth-child(3) > .r-18u37iz > :nth-child(2) > [data-testid="productDetails"]').click()
    cy.get('[data-testid="addToCart"]').click()
    cy.get('[data-testid="addNewAddress"] > .r-lrvibr').click()
})

Cypress.Commands.add('continuarParaPagamento', () => {
    cy.get('[style="z-index: 0; display: flex;"] > [style="background-color: rgb(242, 242, 242);"] > :nth-child(1) > :nth-child(1) > :nth-child(1) > .r-1d5kdc7 > :nth-child(1) > :nth-child(1) > .r-13awgt0 > :nth-child(1) > .r-mh9cjk > .r-18u37iz > :nth-child(2) > .r-lrvibr').click()
    cy.get('[style="z-index: 0; display: flex;"] > [style="background-color: rgb(242, 242, 242);"] > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(2) > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1) > .r-1d5kdc7 > :nth-child(1) > :nth-child(1) > .r-13awgt0 > :nth-child(3) > [data-testid="selectAddressOrContinueToPayment"]').click()
    cy.get('[data-testid="completeCheckout"]').click()
})
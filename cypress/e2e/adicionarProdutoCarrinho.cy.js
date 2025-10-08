/// <reference types="cypress"/>

import homePage from "../support/pages/home.page"

describe('Funcionalidade: Adicionar Produto ao Carrinho e Finalizar compra', () => {

    beforeEach(() => {
        cy.setCookie('ebacStoreVersion', 'v2', { domain: 'lojaebac.ebaconline.art.br' })
        cy.visit('/')
    })
    
    it('Deve adicionar um produto ao carrinho e finalizar compra com sucesso', () => {
        homePage.btnBrowse.click()
        cy.adiconarProduto()
        cy.login()
        cy.continuarParaPagamento()
        cy.get('[data-testid="goBackHome"]').should('have.text', 'Go Back Home')
    })
})
/// <reference types="cypress"/>

import homePage from "../support/pages/home.page";

describe('Funcionalidade Carrinho: Testando Operações Adicionar, Remocer e Atualizar', () => {
    
    beforeEach(() => {
        cy.setCookie('ebacStoreVersion', 'v2', { domain: 'lojaebac.ebaconline.art.br' });
        cy.visit('/');
    });

    it('Deve adicionar um item no carrinho', () => {
        cy.intercept('GET', '**/public/getCart*', { 
            fixture: 'adicionarProduto.json',
            statusCode: 200,
        }).as('itemAdicionado');

        homePage.abrirPesquisarProduto()
        cy.get(':nth-child(3) > .r-18u37iz > :nth-child(1) > [data-testid="productDetails"]').click()
        cy.get('[data-testid="addToCart"]').click(); 
        cy.visit('/');
        cy.get('.r-mh9cjk > .r-18u37iz > :nth-child(2) > .r-lrvibr').click()
        cy.get('[data-testid="productName"]').should('have.text', 'Camiseta EBAC')
    })

    it('Deve remover um item do carrinho)', () => {
        cy.intercept('PUT', '**/public/updateCart/*', {
            statusCode: 200 
        }).as('removeItem');

        homePage.abrirPesquisarProduto()
        cy.get(':nth-child(3) > .r-18u37iz > :nth-child(1) > [data-testid="productDetails"]').click()
        cy.get('[data-testid="addToCart"]').click()
        cy.visit('/');
        cy.get('.r-mh9cjk > .r-18u37iz > :nth-child(2) > .r-lrvibr').click()
        cy.get('[data-testid="emptyCart"]').should('have.text', 'Your cart is empty')
    })

    it.only('Deve atualizar item do carrinho)', () => {
        cy.intercept('PUT', '**/public/updateCart/68e6cc63577b8fe0cf2b3c8b', {
            statusCode: 200 
        }).as('atualizaItem')
        
        homePage.abrirPesquisarProduto()
        cy.get(':nth-child(3) > .r-18u37iz > :nth-child(1) > [data-testid="productDetails"]').click()
        cy.get('[data-testid="addToCart"]').click()
        cy.get('[data-testid="addItem"]').click()
        cy.get('[data-testid="itemsQty"]').should('have.text', '2')
    })
})
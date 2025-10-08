/// <reference types="cypress"/>

import homePage from "../support/pages/home.page"

describe('Funcionalidade: Testando com Intercept', () => {

    beforeEach(() => {
        cy.setCookie('ebacStoreVersion', 'v2', { domain: 'lojaebac.ebaconline.art.br' })
        cy.visit('/')
    })

    it('Deve visualizar as categorias disponíveis', () => {
        cy.intercept('GET', '**/public/getCategories', {
            fixture: 'categories.json'
        }).as('getCategories')
        homePage.abrirPesquisarProduto()
        homePage.abrirFiltroCategorias()
        homePage.categorias().should('have.length.greaterThan', 1)
    })

    it('Não deve visualizar as categorias', () => {
        cy.intercept('GET', '**/public/getCategories', {
            fixture: 'semCategories.json'
        }).as('getCategoriesEmpty')
        homePage.abrirPesquisarProduto()
        homePage.abrirFiltroCategorias()
        homePage.categorias().should('have.length', 1)
    })
})
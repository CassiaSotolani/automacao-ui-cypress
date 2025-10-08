/// <reference types="cypress"/>

class HomePage {
    get btnAccount() {
        return cy.get('[href="/Tab/Account"]')
    }

    get btnBrowse() {
        return cy.get('[href="/Tab/Browse"]')
    }

    get btnCriarConta() {
        return cy.get('[data-testid="signUp"]')
    }

    openMenu(menu) {
        return cy.get(`[href="/Tab/${menu}"]`).click()
    }

    acessarPaginaCadastro() {
        this.btnAccount.click()
        this.btnCriarConta.click()
    }

    abrirPesquisarProduto() {
        cy.get('[data-testid="search-products"]').click()
    }
    
    abrirFiltroCategorias() {
        cy.get('[data-testid="Category"]').click()
    }

    categorias() {
        return cy.get('[data-testid^="search-category-"]')
    }
}

export default new HomePage()
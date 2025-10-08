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
}

export default new HomePage()
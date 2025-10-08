/// <reference types="cypress"/>

class PerfilPage {
    get custumerName() {
        return cy.get('[data-testid="CustomerName"]')
    }

    get custumerEmail() {
        return cy.get('[data-testid="CustomerEmail"]')
    }

    validarDadosUsuario(nomeCompleto, email) {
        this.custumerName.should('have.text', nomeCompleto)
        this.custumerEmail.should('have.text', email)
    }
}

export default new PerfilPage()
/// <reference types="cypress"/>

class CriarContaPage {
    get firstName() {
        return cy.get('[data-testid="firstName"]')
    }

    get lastName() {
        return cy.get('[data-testid="lastName"]')
    }

    get phone() {
        return cy.get('[data-testid="phone"]')
    }

    get email() {
        return cy.get(':nth-child(7) > .css-175oi2r > [data-testid="email"]')
    }

    get password() {
        return cy.get(':nth-child(8) [data-testid="password"]')
    }

    get repassword() {
        return cy.get('[data-testid="repassword"]')
    }

    get btnCreate() {
        return cy.get('[data-testid="create"]')
    }

    preencherFormulario(firstName, lastName, phone, email, password) {
        this.firstName.type(firstName)
        this.lastName.type(lastName)
        this.phone.type(phone)
        this.email.type(email)
        this.password.type(password)
        this.repassword.type(password)
        this.btnCreate.click()
    }
}

export default new CriarContaPage()
/// <reference types="cypress"/>

import { faker } from '@faker-js/faker'
import criarConta from '../support/pages/criarConta.page'
import homePage from '../support/pages/home.page'
import perfilPage from '../support/pages/perfil.page'

describe('Funcionalidade: Criar nova conta', () => {

    const nome = faker.person.firstName()
    const sobrenome = faker.person.lastName()
    const telefone = faker.helpers.replaceSymbols('###########')
    const email = faker.internet.email(nome, sobrenome).toLowerCase()
    const senha = 'Senha@123'

    beforeEach(() => {
        cy.setCookie('ebacStoreVersion', 'v2', { domain: 'lojaebac.ebaconline.art.br' })
        cy.visit('/')
    })

    it('Deve criar uma nova conta com sucesso', () => {
        homePage.acessarPaginaCadastro()
        criarConta.preencherFormulario(nome, sobrenome, telefone, email, senha)
        homePage.btnAccount.click()
        perfilPage.validarDadosUsuario(`${sobrenome} ${nome}`, email)
    })
})
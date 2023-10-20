Cypress.Commands.add('login', (
    username = Cypress.env('USERNAME'),
    password = Cypress.env('USER_PASSWORD')
) => {
    cy.visit('/')
    cy.get('.pt-8 > .flex > .bg-none').type(username)
    cy.get('.pt-1 > .flex > .bg-none').type(password)
    cy.contains('button', 'Login').click()
    cy.contains('h1', 'Dashboard', {timeout: 5000}).should('be.visible')
})

Cypress.Commands.add('maisDetalhes', () => {
    cy.get('.text-primary-1').click()
    cy.get('h1').contains('Painel de Pedidos').should('be.visible')
})

Cypress.Commands.add('logout', () => {
    cy.get('svg.text-connex-black-3').click({ multiple: true, force: true });
    cy.get(':nth-child(3) > .rounded').click()
})

Cypress.Commands.add('loginSemDados', () => {
    cy.contains('button', 'Login').click()
    cy.contains('span.text-red-500', 'Nome de usuário obrigatório').should('be.visible');
    cy.contains('span.text-red-500', 'Senha obrigatória').should('be.visible');
})

Cypress.Commands.add('loginSemSenha', (
    username = Cypress.env('USERNAME'),
) => {
    cy.get('.pt-8 > .flex > .bg-none').type(username)
    cy.contains('button', 'Login').click()
    cy.contains('span.text-red-500', 'Senha obrigatória').should('be.visible');
})

Cypress.Commands.add('loginSemUsuario', (
    password = Cypress.env('USER_PASSWORD'),
) => {
    cy.get('.pt-1 > .flex > .bg-none').type(password)
    cy.contains('button', 'Login').click()
    cy.contains('span.text-red-500', 'Nome de usuário obrigatório').should('be.visible')
})

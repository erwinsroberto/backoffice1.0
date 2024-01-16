describe('realiza login e cadastra cliente', () => {
    it('deve realizar o login, acessar tela de clientes e realizar um cadastro', () => {
        cy.login()
        cy.cadastrarCliente()
    })
})
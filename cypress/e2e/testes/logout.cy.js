describe('teste de logout', () => {
    it('Faz o logout de um usuário que logou com sucesso', () => {
        cy.login()
        cy.logout()
    })
})
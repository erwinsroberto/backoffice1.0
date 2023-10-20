describe('testa os logins inválidos (sem informar usuário e senha e com usuário e senha incorretos', () => {
    it('Faz tentativa de login sem informar os dados', () => {
        cy.visit('/')
        cy.loginSemDados()
    })
    
    it('Faz tentativa de login sem informar senha', () => {
        cy.visit('/')
        cy.loginSemSenha()
    })

    it('Faz tentativa de login sem informar o usuário', () => {
        cy.visit('/')
        cy.loginSemUsuario()
    })

})
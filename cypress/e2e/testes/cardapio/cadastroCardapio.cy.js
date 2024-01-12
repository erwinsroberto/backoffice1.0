describe('teste para fazer login e criar um cardápio', () => {
    it('realiza login validando as apis (session e credentials), altera a empresa e acessa tela de cardápio', () => {
        cy.login()
        cy.alterarEmpresa()
    })
})
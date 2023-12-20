describe('testes das funcionalidades na tela de cardápio', () => {
    it('realiza login validando as apis (session e credentials)', () => {
        cy.login()
        //cy.acessarCardapio()
        cy.criarCategoria()
    })
})
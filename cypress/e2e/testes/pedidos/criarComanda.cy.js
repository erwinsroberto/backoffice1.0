describe('cria a comanda para que seja feito um pedido posteriormente', () => {
    it('realiza o login validando as apis session e credentials e cria uma comanda para receber os pedidos', () => {
        cy.login();
        cy.criarComanda();
    })
})
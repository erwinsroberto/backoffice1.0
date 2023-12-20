describe('acessa o backoffice e faz um pedido na comanda criada no script de criação das comandas', () => {
    it('realiza o login e faz um pedido na comanda cadastrada', () => {
        cy.login();
        cy.fazerPedido();
    })
})
describe('testa uma das funcionalidades da dashboard', () => {
    it('Testa os filtros de faturamento', () => {
        cy.login()
        cy.maisDetalhes()
    })
})
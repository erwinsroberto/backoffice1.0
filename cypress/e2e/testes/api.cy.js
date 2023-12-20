describe('realizando requisições para a API', () => {
    context('GET /dashboard', () => {
        it('deve retornar uma lista de usuarios', () => {
            cy.login();
            cy.usuarios();
            cy.request('GET', 'https://backoffice-homo.connx.com.br/users').then((response)=>{
                expect(response.status).to.eq(200)
                expect(response.body).length.to.be.greaterThan(1)
            })
        })
    })
})
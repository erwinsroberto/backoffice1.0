// Zoom out em 80%
const zoomOut = () => {
    cy.document().then((doc) => {
      doc.body.style.zoom = 1.0;
    });
  };

//COMEÇO DO BLOCO DE COMANDOS DE LOGIN
import 'cypress-wait-until';
Cypress.Commands.add('login', (
    username = Cypress.env('USERNAME'),
    password = Cypress.env('USER_PASSWORD')
) => {
    cy.visit('/')
    cy.request('GET', 'https://backoffice-homo.connx.com.br/')
    .then((response) => {
     expect(response.status).to.equal(200);
    cy.contains('div', 'Seu negócio agradece').should('be.visible');
        })
    cy.get('.pt-8 > .flex > .bg-none').type(username, {log: false})
    cy.get('.pt-1 > .flex > .bg-none').type(password, {log: false})
    cy.contains('button', 'Login').click()
    cy.url().should('include', '/dashboard')
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
//FIM DO BLOCO DE COMANDOS PARA LOGIN

//ALTERAR EMPRESA
Cypress.Commands.add('alterarEmpresa', () => {
    cy.get('svg.text-connex-black-3').click({ multiple: true, force: true });
    cy.get('.rounded.hover\\:text-white.disabled\\:bg-btn-3.disabled\\:text-primary-3.disabled\\:cursor-not-allowed.w-full.h-auto.flex.flex-row.items-center.gap-4.p-4.bg-transparent.text-connex-black-3.text-xs.hover\\:bg-primary-2')
  .click({multiple: true, force: true});
    cy.contains('span', 'Touch & Eat comanda').click();
    cy.get('a[href="/menu"][aria-checked="false"]')
  .click();
    cy.contains('h1', 'Meus Cardápios').should('be.visible');
})

//COMEÇO DO BLOCO DE COMANDOS DO CARDÁPIO

Cypress.Commands.add('criarCardapio', () => {
    cy.get()

})





Cypress.Commands.add('criarCategoria', () => {
    cy.intercept('GET', 'https://touch.zapier.app/api/maintenance', {
        statusCode: 200,
        body:'',
    }).as('avoidConfirm');


    cy.intercept('GET', 'https://api-homo.touch.tec.br/api/v1/CardapioGrupo/GetAllByEmpresaCardapio/3/2', {
        statusCode: 200,
        body:'',
    }).as('avoidEdit');


    cy.get('[href="/menu"]').click();
    cy.get('#menuCategoryButton').click();
    cy.wait('@avoidEdit');
    cy.get('#input-Title-ModalCategory').type('teste cypress');
    cy.get('textarea[placeholder="Descrição do item"]').type('descrição cypress');
    cy.get('#btn-addIcon-ModalCategory').click();
    cy.wait('@avoidConfirm');
    cy.get('svg[class="text-connex-black-2"]').click()


})

Cypress.Commands.add('usuarios', () => {
    cy.contains('span', 'Usuários').click({force: true});
    cy.contains('h1', 'Gerenciamento de Usuários').should('be.visible')
})


Cypress.Commands.add('criarComanda', () => {
    cy.get('#showProfile').click(); 
    cy.contains('Alterar Empresa').click();
    cy.contains('Kuzori Comida Japonesa').click();
    cy.get('a[href="/commands"]').click();
    cy.contains('Adicionar Comanda').click();
    cy.get('input[name="identificacaoComanda"]').type('007');
    cy.get('input[name="mesa"]').type('007');
    cy.get('input[name="descricao"]').type('erwins');
    cy.get('button[type="submit"][form="formComanda"]').click();
})

Cypress.Commands.add('pedidoSushibar', () => {
    cy.get('#showProfile').click(); 
    cy.contains('Alterar Empresa').click();
    cy.contains('Kuzori Comida Japonesa').click();
    cy.get('a[href="/commands"]').click();
    cy.get('[class*="py-2 px-4 flex gap-3 cursor-pointer"][aria-checked="false"]').click();
    cy.contains('span', 'sushibar').click();
    cy.contains('Hossomaki de pepino').click();
    cy.wait(5000);
    cy.contains('Hossomaki de kani').click();
    cy.wait(5000);
    cy.contains('Uramaki de salmão').click();
    cy.wait(5000);
    cy.contains('Jyô ebi').click();
})

Cypress.Commands.add('pedidoCozinhaQuente', () => {
    //cy.get('#showProfile').click(); 
    //cy.contains('Alterar Empresa').click();
    //cy.contains('Kuzori Comida Japonesa').click();
    //cy.get('a[href="/commands"]').click();
    //cy.get('[class*="py-2 px-4 flex gap-3 cursor-pointer"][aria-checked="false"]').click();
    cy.contains('span', 'PRATOS QUENTES').click();
    cy.contains('Guioza').click();
    cy.wait(5000);
    cy.contains('Shimeji').click();
    cy.wait(5000);
    cy.contains('Yakisoba').click();
    cy.wait(5000);
    cy.contains('Salmão grelhado').click();
    cy.wait(5000);
    cy.contains('Tilapia grelhada').click();
})

Cypress.Commands.add('finalizaPedido', () => {
    cy.wait(5000);
    cy.contains('Ver carrinho').click();
    cy.contains('Confirmar').click();
    cy.contains('Atribuir em comanda').click();
    cy.get('select').select('007');
    cy.contains('Atribuir Pedido').click();
})
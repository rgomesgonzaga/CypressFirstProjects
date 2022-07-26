describe('alura busca cursos', () => {

    beforeEach(() => {
        cy.visit('https://www.alura.com.br');
    })

    it('buscar curso de java', () => {
        cy.get('#header-barraBusca-form-campoBusca').type('java');
        cy.get('.header-barraBusca-form-submit').click()
        //cy.get(':nth-child(3) > .busca-resultado-link > .busca-resultado-container > .busca-resultado-nome')
        //cy.get('h4.busca-resultado-nome') //=> Retornou a lista de todos os cursos
        cy.get('h4.busca-resultado-nome')
            //.should('have-text', 'Formação Java e Orientação a Objetos');    
            .should('contain', 'Formação Java e Orientação a Objetos');
    })
    
})
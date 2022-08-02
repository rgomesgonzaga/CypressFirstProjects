describe('Testa o login de usuários no alura pic', () => { 

    beforeEach(() => { 
        cy.visit('/') 
    })

    it('fazer login de usuário válido', () => {
        cy.login(Cypress.env('userName'), Cypress.env('password'));
        cy.contains('a', '(Logout)').should('be.visible');
    })

    it('fazer login de usuário inválido', () => {
        cy.login('rafael', '1234');
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Invalid user name or password')
        })
    })

})
describe('Testa o login de usuários no alura pic', () => { 

    beforeEach(() => { 
        cy.visit('/') 

        cy.intercept('POST', 'https//alurapic.herokuapp.com/user/login', {
            statusCode: 400
        }).as('stubPOST')
    })

    it('fazer login de usuário válido', () => {
        cy.login(Cypress.env('userName'), Cypress.env('password'));
        cy.wait('@stubPOST')
        cy.contains('a', '(Logout)').should('be.visible');
    })

    it('fazer login de usuário inválido', () => {
        cy.login('rafael', '1234');
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Invalid user name or password')
        })
    })

})
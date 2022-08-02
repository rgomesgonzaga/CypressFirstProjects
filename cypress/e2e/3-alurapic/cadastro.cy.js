describe('Testa o registro de usuários no alura pic', () => { 

    beforeEach(() => { 
        cy.visit('/')
        
    })

    it('verifica mensagem de e-mail inválido', () => {
        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Email is required!').should('be.visible');

        //Execute a second click and check for more warning messages:
        cy.contains('button', 'Register').click();

        //Simulate an invalid email input and checking for the warning message
        cy.get('input[formcontrolname="email"]').type("rafael.gonzaga");
        cy.contains('ap-vmessage', 'Invalid e-mail').should('be.visible');
    })

    it('verifica mensagem de senha com menos de 8 caracteres', () => {
        cy.contains('a', 'Register now').click();

        //Execute a second click and check for more warning messages:
        cy.contains('button', 'Register').click();

        //Simulate an invalid email input and checking for the warning message
        cy.get('input[formcontrolname="password"]').type("123");
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Mininum length is 8').should('be.visible');
    })

    const usuarios = require('../../fixtures/usuarios.json');
    usuarios.forEach(usuario => {

        it(`registra novo usuário ${usuario.userName}`, () => {
            cy.register(usuario.email, usuario.fullName, usuario.userName, usuario.password);
            //cy.on('window:alert', (str) => {
            //    expect(str).to.equal('Invalid user name or password')
            //})
        })
    });

})
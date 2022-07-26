describe('Testa o registro e login de usuários no alura pic', () => { 

    beforeEach(() => { 
        cy.visit('https://alura-fotos.herokuapp.com') 
    })

    it('verifica mensagens de validação', () => {
        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Email is required!').should('be.visible');

        //Execute a second click and check for more warning messages:
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Full name is required!').should('be.visible');
        cy.contains('ap-vmessage', 'User name is required!').should('be.visible');
        cy.contains('ap-vmessage', 'Password is required!').should('be.visible');
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

    it('verifica mensagem de nome de usuário precisa ser minúsculo', () => {
        cy.contains('a', 'Register now').click();

        //Execute a second click and check for more warning messages:
        cy.contains('button', 'Register').click();

        //Simulate an invalid email input and checking for the warning message
        cy.get('input[formcontrolname="userName"]').type("Rafael");
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Must be lower case').should('be.visible');
    })

})
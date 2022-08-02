describe('Testando a página inicial do alura pic', () => { 

    beforeEach(() => { 
        cy.visit('/') 
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
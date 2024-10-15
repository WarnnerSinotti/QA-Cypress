describe('23-Teste de login', () => {
    const username: string = 'tomsmith';
    const password: string = 'SuperSecretPassword!';
    const invalidUserName: string = 'Invalid';
    const invalidPassword: string = 'Invalid';

    beforeEach(() => {
        cy.visit('/');
        cy.get('[href="/login"]').should('contain.text', 'Form Authentication').click();
    });

    it('Validando credenciais com username invalido', () => {
        cy.allureSeverity('blocker');

        cy.login(invalidUserName, password, 'Your username is invalid!');
    });
    it('Validando credenciais com senha invalido', () => {
        cy.allureSeverity('blocker');

        cy.login(username, invalidPassword, 'Your password is invalid!');
    });
    it('Validando credenciais com username e senha corretas', () => {
        cy.allureSeverity('blocker');

        cy.login(username, password, 'You logged into a secure area!');
        cy.get('h2').should('contain.text', 'Secure Area');
        cy.get('.subheader').should('contain.text', 'Welcome to the Secure Area. When you are done click logout below.');
    });
    it('Validando logout', () => {
        cy.allureSeverity('blocker');

        cy.login(username, password, 'You logged into a secure area!');
        cy.get('[href="/logout"]').should('be.visible').click();
        cy.get('[id="username"]').should('be.visible');
    });
});

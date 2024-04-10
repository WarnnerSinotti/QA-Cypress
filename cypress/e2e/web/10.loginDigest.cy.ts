describe('Teste de login com autenticação digest', () => {
    it.skip('Login com autenticação digest no site The Internet', () => {
        cy.loginDigestAuth('admin', 'admin');
        cy.visit('https://the-internet.herokuapp.com/digest_auth');
        cy.get('ul > :nth-child(8) > a').click();
        cy.contains('Congratulations!').should('be.visible');
    });
});

describe('22-Teste retry password', () => {
    const email: string = 'test@gmail.com';
    beforeEach(() => {
        cy.visit('/');
        cy.get('[href="/forgot_password"]').should('contain.text', 'Forgot Password').click();
    });

    it('Validando api de retry password', () => {
        cy.allureSeverity('normal');

        cy.intercept('POST', 'https://the-internet.herokuapp.com/forgot_password').as('forgotPassword');

        cy.get('h2').should('contain.text', 'Forgot Password');
        cy.get('[id="email"]').invoke('val', email);
        cy.get('[id="form_submit"]').contains('Retrieve password').click();
        cy.wait('@forgotPassword').its('response.statusCode').should('eq', 500);
    });
});

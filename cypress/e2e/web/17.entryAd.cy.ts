describe('17-Teste validando modal em Entry Ad', () => {
    beforeEach(() => {
        cy.visit('/');
        cy.get('ul > :nth-child(15) > a').should('contain.text', 'Entry Ad').click();
    });

    it('Validando modal em Entry Ad', () => {
        cy.allureSeverity('normal');

        cy.get('.modal').should('be.visible');
        cy.get('.modal-title').should('contain.text', 'This is a modal');
        cy.get('.modal-body').should(
            'contain.text',
            `It's commonly used to encourage a user to take an action (e.g., give their e-mail address to sign up for something or disable their ad blocker).`
        );
        cy.get('.modal-footer').contains('Close').click();

        cy.get('.modal').should('not.be.visible');
        cy.get('#restart-ad').should('be.visible').click();
        cy.get('.modal').should('be.visible');
        cy.get('body').click(100, 100);
        cy.get('.modal').should('not.be.visible');
    });
});

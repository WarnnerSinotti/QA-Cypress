describe('Teste de jqueryui', () => {
    beforeEach(() => {
        cy.visit('/jqueryui/menu');
        cy.url().should('include', '/jqueryui/menu');
    });

    it('Validando jqueryui', () => {
        cy.allureSeverity('critical');

        cy.get('h3').should('contain.text', 'JQueryUI - Menu');

        cy.get('[tabindex="0"]').find('li').contains('Disabled');
        cy.get('[tabindex="0"]').find('li').contains('Enabled').click();
        cy.get('[tabindex="0"]').find('li').contains('Download').click();
        cy.get('[role="menuitem"]').contains('PDF').click({ force: true });
        cy.readFile(`cypress/downloads/menu.pdf`).should('exist');
    });
});

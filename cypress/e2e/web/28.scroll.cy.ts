describe('Teste de Scroll infinito  ', () => {
    beforeEach(() => {
        cy.visit('/infinite_scroll');
        cy.url().should('include', 'infinite_scroll');
    });

    it('Validando Scroll', () => {
        cy.allureSeverity('critical');

        cy.get('h3').should('contain.text', 'Infinite Scroll');

        cy.scrollUntilElementVisible('.jscroll-added', 4);
    });
});

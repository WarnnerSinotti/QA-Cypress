describe('09-Teste validando Context Menu', () => {
    const url = Cypress.env('BASE_URL');

    beforeEach(() => {
        cy.visit(url);
        cy.get('ul > :nth-child(7) > a').should('contain.text', 'Context Menu').click();
    });

    it('Validando os Context Menu', () => {
        cy.get('h3').should('contain.text', 'Context Menu');
        cy.get('#hot-spot').rightclick();
        cy.on('window:alert', (alertText) => {
            expect(alertText).to.equal('You selected a context menu');
        });
    });
});

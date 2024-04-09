describe('03-Teste acessando outro link na mesma guia da utilizacao do cypress', () => {
    const url = Cypress.env('BASE_URL');

    it('Acessando outra url na mesma guia do navegador', () => {
        cy.visit(url);
        cy.get('ul > :nth-child(1)').contains('A/B Testing').click();
        cy.get('.large-4 > div > a').invoke('removeAttr', 'target').click();
        cy.get('.hero__title').should('contain.text', 'Elemental Selenium');
    });
});

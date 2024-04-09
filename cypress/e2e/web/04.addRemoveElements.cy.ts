describe('04-Teste utilizando for para adicionar e remover buttons', () => {
    const url = Cypress.env('BASE_URL');

    beforeEach(() => {
        cy.visit(url);
        cy.get('ul > :nth-child(2) > a').should('contain.text', 'Add/Remove Elements').click();
    });

    it('Adicionando e removendo buttons', () => {
        const cont: number = 10;
        for (let i = 0; i <= cont; i++) {
            cy.get('[onclick="addElement()"]').click();
        }
        for (let i = 0; i <= cont; i++) {
            cy.get('#elements > :nth-child(1)').click();
        }

        cy.get('#elements > :nth-child(1)').should('not.exist');
    });
});

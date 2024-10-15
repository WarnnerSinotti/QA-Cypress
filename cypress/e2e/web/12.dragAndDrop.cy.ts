describe('12-Teste validando Drag and Drop', () => {
    beforeEach(() => {
        cy.visit('/');
        cy.get('ul > :nth-child(10) > a').should('contain.text', 'Drag and Drop').click();
    });

    it('Validando os Drag and Drop', () => {
        cy.allureSeverity('critical');

        cy.get('h3').should('contain.text', 'Drag and Drop');

        // Encontrar os elementos a serem arrastados
        const dataTransfer = new DataTransfer();
        cy.contains('A').trigger('dragstart', { dataTransfer });
        cy.contains('B').trigger('drop', { dataTransfer });

        cy.get('#column-a').should('contain.text', 'B');
        cy.get('#column-b').should('contain.text', 'A');
    });
});

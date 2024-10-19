describe('Teste de Geolocalização', () => {
    beforeEach(() => {
        cy.visit('/');
        cy.get('[href="/horizontal_slider"]').click();
        cy.url().should('include', 'horizontal_slider');
    });

    it('Validando Horizontal Slider', () => {
        cy.allureSeverity('normal');

        cy.get('h3').should('contain.text', 'Horizontal Slider');

        for (let index = 0; index <= 5; index++) {
            cy.get('input[type="range"]').invoke('val', index).trigger('change');

            cy.get('#range').should('have.text', index);
        }

        for (let index = 5; index >= 0; index--) {
            cy.get('input[type="range"]').invoke('val', index).trigger('change');

            cy.get('#range').should('have.text', index);
        }
    });
});

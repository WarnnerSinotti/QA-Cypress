describe('Teste de remover ação de nova janela com cypress', () => {
    beforeEach(() => {
        cy.visit('/windows');
        cy.url().should('include', '/windows');
    });

    it('Validando Teclado', () => {
        cy.allureSeverity('critical');

        cy.get('h3').should('contain.text', 'Opening a new window');

        cy.get('a[href="/windows/new"]').invoke('removeAttr', 'target').click();

        cy.get('h3').should('contain.text', 'New Window');
    });
});

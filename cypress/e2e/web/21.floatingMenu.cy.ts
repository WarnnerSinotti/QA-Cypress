describe('21-Teste de Floating Menu', () => {
    beforeEach(() => {
        cy.visit('/');
        cy.get('[href="/floating_menu"]').should('contain.text', 'Floating Menu').click();
    });

    it('Scroll para ultima pagina e clicando em floating menu', () => {
        cy.allureSeverity('normal');

        cy.get('h3').should('contain.text', 'Floating Menu');
        cy.scrollTo('bottom');

        cy.get('[href="#home"]').should('be.visible').click();
        cy.url().should('include', 'floating_menu#home');
        cy.get('[href="#news"]').should('be.visible').click();
        cy.url().should('include', 'floating_menu#news');
        cy.get('[href="#contact"]').should('be.visible').click();
        cy.url().should('include', 'floating_menu#contact');
        cy.get('[href="#about"]').should('be.visible').click();
        cy.url().should('include', 'floating_menu#about');
    });
});

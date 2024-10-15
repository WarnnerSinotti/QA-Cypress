describe('24-Teste de frame', () => {
    beforeEach(() => {
        cy.visit('/');
        cy.get('[href="/frames"]').should('contain.text', 'Frames').click();
    });

    it('Validando Nested Frames', () => {
        cy.allureSeverity('minor');

        cy.get('[href="/nested_frames"]').should('contain.text', 'Nested Frames').click();

        cy.get('frame[name="frame-top"]')
            .its('0.contentDocument.body')
            .should('not.be.empty')
            .then(cy.wrap)
            .find('[name="frame-left"]')
            .its('0.contentDocument.body')
            .should('not.be.empty')
            .then(cy.wrap)
            .should('contain', 'LEFT');
    });
    it('Validando Frames', () => {
        cy.allureSeverity('minor');

        cy.get('[href="/iframe"]').should('contain.text', 'iFrame').click();
        cy.get('[id="content"]').should('be.visible');
    });
});

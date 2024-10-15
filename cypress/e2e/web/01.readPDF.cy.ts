describe('01-Teste validações no documento pdf', () => {
    const filePath = 'cypress/fixtures/document.pdf';
    const totalPages = 3;
    const text = 'Cypress';

    it('Validando quantidade de páginas no arquivo pdf', () => {
        cy.allureSeverity('blocker');

        cy.validarPaginasNoPdf(filePath, totalPages);
    });

    it('Validando se no corpo do documento pdf possui texto', () => {
        cy.allureSeverity('blocker');

        cy.validarTextoNoPdf(filePath, text);
    });

    it('Validando se o documento pdf possui assinatura ou não', () => {
        cy.allureSeverity('blocker');

        cy.validarAssinaturaNoPdf(filePath);
    });
});

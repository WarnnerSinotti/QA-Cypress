describe('01-Teste validações no documento pdf', () => {
    const filePath = 'cypress/fixtures/document.pdf';
    const totalPages = 3;
    const text = 'Cypress';

    it('Validando quantidade de páginas no arquivo pdf', () => {
        cy.validarPaginasNoPdf(filePath, totalPages);
    });

    it('Validando se no corpo do documento pdf possui texto', () => {
        cy.validarTextoNoPdf(filePath, text);
    });

    it('Validando se o documento pdf possui assinatura ou não', () => {
        cy.validarAssinaturaNoPdf(filePath);
    });
});

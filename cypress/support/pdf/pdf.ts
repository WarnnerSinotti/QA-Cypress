declare global {
    namespace Cypress {
        interface Chainable {
            validarPaginasNoPdf(filePath: string, numberPages: number): typeof validarPaginasNoPdf;
            validarTextoNoPdf(filePath: string, text: string): typeof validarPaginasNoPdf;
            validarAssinaturaNoPdf(filePath: string): typeof validarAssinaturaNoPdf;
        }
    }
}

export const validarPaginasNoPdf = (filePath: string, numberPages: number) => {
    cy.task<number>('readPdfGetNumPages', `${filePath}`).then((totalPages) => {
        cy.log(`O PDF possui ${totalPages} página(s).`);
        expect(totalPages).to.be.eq(numberPages);
    });
};

export const validarTextoNoPdf = (filePath: string, text: string) => {
    cy.task<string>('readPdf', `${filePath}`).should('contain', text);
};

export const validarAssinaturaNoPdf = (filePath: string) => {
    cy.task('readPdfGetSignature', filePath).then((hasSignature) => {
        if (hasSignature) {
            cy.log('O arquivo PDF possui assinatura.');
            cy.log('true', hasSignature);
        } else {
            cy.log('O arquivo PDF não possui assinatura.');
            cy.log('false', hasSignature);
        }
    });
};

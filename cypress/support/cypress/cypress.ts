declare global {
    namespace Cypress {
        interface Chainable {
            deleteFile(filePath: string): typeof deleteFile;
        }
    }
}

export const deleteFile = (filePath: string) => {
    cy.exec(`rm -f ${filePath}`, { failOnNonZeroExit: false });
};

declare global {
    namespace Cypress {
        interface Chainable {
            deleteFile(filePath: string): typeof deleteFile;
            scrollUntilElementVisible(selector: string, targetIndex: number, waitTime?: number): Chainable<null>;
        }
    }
}

export const deleteFile = (filePath: string) => {
    cy.exec(`rm -f ${filePath}`, { failOnNonZeroExit: false });
};

Cypress.Commands.add('scrollUntilElementVisible', (selector, targetIndex, waitTime = 500) => {
    cy.get(selector).then(($elements) => {
        if ($elements.length >= targetIndex) {
            cy.get(selector)
                .eq(targetIndex - 1)
                .scrollIntoView()
                .should('exist');
        } else {
            // Faz scroll para baixo e tenta novamente após um pequeno delay
            cy.scrollTo('bottom');
            cy.wait(waitTime); // Aguarda o carregamento de novos elementos
            cy.scrollUntilElementVisible(selector, targetIndex, waitTime); // Chama o comando novamente
        }
    });
});

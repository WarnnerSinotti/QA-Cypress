export function assertionAlert(text: string) {
    cy.get('[id="result"]').should('include.text', text);
}

describe('Teste de Geolocalização', () => {
    const latitude: number = 13.7749;
    const longitude: number = -122.4194;
    beforeEach(() => {
        cy.visit('/geolocation', {
            onBeforeLoad(win) {
                // Stub do método de geolocalização
                cy.stub(win.navigator.geolocation, 'getCurrentPosition').callsFake((successCallback) => {
                    // Chama o callback de sucesso com as coordenadas simuladas
                    successCallback({
                        coords: {
                            latitude: latitude,
                            longitude: longitude,
                        },
                    });
                });
            },
        });
    });

    it('Validando Geolocalização Fake', () => {
        cy.allureSeverity('normal');

        cy.get('h3').should('contain.text', 'Geolocation');

        cy.get('[onclick="getLocation()"]').should('contain.text', 'Where am I?').click();
        cy.get('#lat-value').should('contain', latitude);
        cy.get('#long-value').should('contain', longitude);
    });
});

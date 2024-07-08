/// <refrence types="cypress" />

import 'cypress-iframe';

describe('Favourite icon functionality', () => {
    it('should have class active after click', () => {
        cy.visit('https://demo.live88.io/operator/live88demo/live88-lobby/fun', { timeout: 70000 });

        cy.get('#iframeId').its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
            cy.get('.carousel-container.tables-list', { timeout: 15000 }).should('be.visible').first().as('carouselContainer');
        });
        cy.get('@carouselContainer').within(() => {
            cy.get('span[data-testid="FavouriteButton"]').first().should('exist').and('be.visible').as('favouriteButton');
        });
        cy.get('@favouriteButton').click().should('have.class', 'active');
    });
});

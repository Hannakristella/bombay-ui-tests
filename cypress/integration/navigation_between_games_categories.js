/// <refrences types="cypress" />

import 'cypress-iframe';

describe('Tests for navigating game categories and verifying content accuracy', () => {   
    it('Ensure that all game tables include the category name in their titles after selecting the category', () => {
        cy.visit('https://demo.live88.io/operator/live88demo/live88-lobby/fun', { timeout: 70000 });
        cy.get('#iframeId').its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
            cy.get('.menu-component').should('be.visible');
            cy.get('.menu-item.button-icon.baccarat').first().click();  
            cy.get('.table-name').each(($el) => {
                const text = $el.text();
                expect(text).to.include('Baccarat');
            });

            cy.get('.menu-item.button-icon.roulette').first().click();
            cy.get('.table-name').each(($el) => {
                const text = $el.text();
                expect(text).to.include('Roulette');
            });

            cy.get('.menu-item.button-icon.dragonTiger').first().click();
            cy.get('.table-name').each(($el) => {
                const text = $el.text();
                expect(text).to.include('Dragon Tiger');
            });

            cy.get('.menu-item.button-icon.poker').first().click();
            cy.get('.table-name').each(($el) => {
                const text = $el.text();
                expect(text).to.include('Poker');
            });
        });
    }); 
});

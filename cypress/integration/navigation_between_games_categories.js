/// <refrences types="cypress" />

import 'cypress-iframe';

function checkCategory(category, name) {
    cy.get(`.menu-item.button-icon.${category}`).first().click();  
    cy.get('.table-name').each(($el) => {
        const text = $el.text();
        expect(text).to.include(name);
    });
}

describe('Tests for navigating game categories and verifying content accuracy', () => {   
    it('Ensure that all game tables include the category name in their titles after selecting the category', () => {
        cy.visit('https://demo.live88.io/operator/live88demo/live88-lobby/fun', { timeout: 70000 });
        cy.get('#iframeId').its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).within(() => {
            cy.get('.menu-component').should('be.visible');
            checkCategory('baccarat', 'Baccarat');
            checkCategory('roulette', 'Roulette');
            checkCategory('dragonTiger', 'Dragon Tiger');
            checkCategory('poker', 'Poker');
        });
    }); 
});


/// <reference types="cypress" />
context('Daten', () => {
  it('Prüft ob data-view einwandfrei funktioniert', () => {
    cy.visit('https://test.codingdavinci.de/de/daten');
    // Check if filter works
    cy.wait(500);
    cy.get('#edit-project-type li:nth-child(1) .bef-link').click();
    cy.wait(500);
    cy.get('#edit-project-type li:nth-child(8) .bef-link').click();
    cy.wait(500);
    cy.get('#edit-project-type li:nth-child(10) .bef-link').click();
    cy.wait(500);
    cy.get('#edit-object-types li:nth-child(4) .bef-link').click();
    cy.wait(500);
    cy.get('#edit-license li:nth-child(2) .bef-link').click();
    cy.wait(500);
    cy.get('#edit-theme li:nth-child(1) .bef-link').click();
    cy.wait(500);
    cy.get('.col-lg-9').should('not.be.empty')
    cy.wait(500);

    cy.get('.react-autosuggest__input').click();
    cy.wait(500);
    cy.get('.react-autosuggest__input').type('test');
    cy.wait(500);
    cy.get('#edit-search').type('test');
    cy.wait(500);
    cy.get('.button:nth-child(1)').click();
    cy.wait(500);
    cy.get('.button:nth-child(1)').click();
    cy.wait(500);
    cy.get('.button:nth-child(2)').should('have.value', 'Zurücksetzen').click();
    cy.wait(500);
    cy.get('.card')
    cy.wait(500);

    // Check if pager works
    cy.get('.pager__item:nth-child(2) > a').click();
    cy.wait(500);
    cy.get('.pager__item:nth-child(8) span:nth-child(2)').click();
    cy.wait(500);
    cy.get('.pager__item:nth-child(10) span:nth-child(2)').click();
    cy.wait(500);
    cy.get('.pager__item--previous span:nth-child(2)').click();
    cy.wait(500);
    cy.get('.pager__item:nth-child(1) span:nth-child(2)').click();

  })
})
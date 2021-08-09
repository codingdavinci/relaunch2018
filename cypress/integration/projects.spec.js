/// <reference types="cypress" />
context('Daten', () => {
  it('Prüft ob projects-view einwandfrei funktioniert', () => {
    cy.visit('https://codingdavinci.de/de/');
    cy.get(".navbar-toggler-icon")
    .click();
    cy.get(".nav-item:nth-child(4) > .nav-link")
      .click();
    cy.url().should("contains", "https://codingdavinci.de/de/projekte");
    // Check if filter works
    cy.get('#edit-project-type li:nth-child(1) .bef-link').click();
    cy.get('#edit-project-type li:nth-child(8) .bef-link').click();
    cy.get('#edit-project-type li:nth-child(10) .bef-link').click();
    // cy.get('#edit-object-types li:nth-child(4) .bef-link').click();
    // cy.get('#edit-license li:nth-child(2) .bef-link').click();
    // cy.get('#edit-theme li:nth-child(1) .bef-link').click();
    cy.get('.col-lg-9').should('not.be.empty')
    cy.get('.card')

    // cy.get('.react-autosuggest__input').click();
    // cy.get('.react-autosuggest__input').type('test');
    cy.get('#edit-search').type('test');
    cy.get('.button:nth-child(1)').click();
    cy.get('.button:nth-child(1)').click();
    cy.contains('Es sind keine den Filtereinstellungen entsprechenden Projekte vorhanden.')
    cy.get('.button:nth-child(2)').should('have.value', 'Zurücksetzen').click();
    cy.get('.card')

    // Check if pager works
    cy.get('.pager__item:nth-child(2) > a').click();
    cy.get('.pager__item:nth-child(8) span:nth-child(2)').click();
    cy.get('.pager__item:nth-child(10) span:nth-child(2)').click();
    cy.get('.pager__item--previous span:nth-child(2)').click();
    cy.get('.pager__item:nth-child(1) span:nth-child(2)').click();

  })
})
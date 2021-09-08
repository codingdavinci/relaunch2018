/// <reference types="cypress" />
context('"Über uns"-Seite', () => {
  it('Seite erreichbar über Navigation', () => {
    cy.visit('https://test.codingdavinci.de/de');
    cy.get('.navbar-toggler-icon').click();
    cy.get('#mainMenuItem00').click();
    cy.get('.show > .menu-item:nth-child(1) > .nav-link').click();
    cy.url().should('contains', 'https://test.codingdavinci.de/de/was-ist-coding-da-vinci');
    // Cypress hat Probleme mit iFrames, {   "chromeWebSecurity": false } muss in Cypress gesetzt werden.
    // cy.get('.media--type-remote-video').scrollIntoView()
    // cy.get('.ytp-large-play-button').click();

  })
  it('Slider', () =>{
    cy.get('.horizontal-nav--next--icon').click();
    cy.get('.horizontal-nav--prev--icon').click();
  })

})
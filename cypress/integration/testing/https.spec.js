/// <reference types="cypress" />
context('HTTPS', () => {
  it('Prüft ob Seiten von http auf https umgeleitet werden', () => {
    cy.visit('https://'+Cypress.env('user')+':'+Cypress.env('password')+'@test.codingdavinci.de/');
    cy.wait(1000);
    cy.url().should('contains', 'https://');
  })
})
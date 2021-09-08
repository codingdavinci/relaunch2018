/// <reference types="cypress" />
context('Logo', () => {
  it('Prüft ob Clicks auf das Logo funktionieren', () => {
    cy.visit('https://test.codingdavinci.de/user');
    cy.wait(1000)
    cy.get('.d-sm-block').within(() => {
      cy.get('.menu--main--brand').click()})
    cy.url({timeout: 1000}).should('eq', 'https://test.codingdavinci.de/')
  })
})
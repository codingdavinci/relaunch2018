/// <reference types="cypress" />
context('Cookiebanner', () => {
  it('Prüft generelle Funktionalität', () => {
    cy.visit('https://'+Cypress.env('user')+':'+Cypress.env('password')+'@test.codingdavinci.de/');
    cy.clearCookies()
      cy.getCookies().should('be.empty')
      cy.get('.agree-button').click();
      cy.getCookie('cookie-agreed').should('have.property', 'value', '2')
      cy.wait(1000)
      cy.clearCookies()
      cy.wait(1000)
      cy.visit('https://'+Cypress.env('user')+':'+Cypress.env('password')+'@test.codingdavinci.de/');
      cy.clearCookies()
      cy.wait(1000)
      cy.getCookies().should('be.empty')
      cy.get('.decline-button').click();
      cy.getCookie('cookie-agreed').should('have.property', 'value', '0')
  })
})
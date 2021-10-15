/// <reference types="cypress" />
context('Login', () => {
  it('Prüft ob die Loginmaske einwandfrei funktioniert', () => {
    cy.visit('https://'+Cypress.env('user')+':'+Cypress.env('password')+'@test.codingdavinci.de/user');
    cy.url().should('eq', 'https://'+Cypress.env('user')+':'+Cypress.env('password')+'@test.codingdavinci.de/de/user/login');

    cy.get('#edit-name')
      .type('fake@email.com').should('have.value', 'fake@email.com')
    cy.get('#edit-pass')
      .type('abcdefg').should('have.value', 'abcdefg')
    cy.get('#edit-submit')
      .click()
    cy.get('.messages--error').should('not.be.empty')
    cy.contains('Haben Sie Ihr Passwort vergessen?').click()

    cy.get('.page-title').should('contain', 'Passwort zurücksetzen')
    cy.get('#edit-name').should('have.value', 'fake@email.com')
  })
})
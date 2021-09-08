/// <reference types="cypress" />
context('Sprachschalter', () => {
  it('Deutsch - Englisch', () => {
    cy.visit('https://test.codingdavinci.de/');
    cy.get('.en > .language-link').click();
    cy.wait(500);
    cy.url().should('eq', 'https://test.codingdavinci.de/en');
  })

  it('Deutsch - Französisch', () => {
    cy.visit('https://test.codingdavinci.de/');
    cy.get('.fr > .language-link').click();
    cy.wait(500);
    cy.url().should('eq', 'https://test.codingdavinci.de/fr');
  })

  it('Französisch - Englisch', () =>{
    cy.visit('https://test.codingdavinci.de/fr');
    cy.get('.en > .language-link').click();
    cy.wait(500);
    cy.url().should('eq', 'https://test.codingdavinci.de/en');
  })

  it('Französisch - Deutsch', () =>{
    cy.visit('https://test.codingdavinci.de/fr');
    cy.get('.de > .language-link').click();
    cy.wait(500);
    cy.url().should('eq', 'https://test.codingdavinci.de/de');
  })

  it('Englisch - Deutsch', () =>{
    cy.visit('https://test.codingdavinci.de/en');
    cy.get('.de > .language-link').click();
    cy.wait(500);
    cy.url().should('eq', 'https://test.codingdavinci.de/de');
  })

  it('Englisch - Französisch', () =>{
    cy.visit('https://test.codingdavinci.de/en');
    cy.get('.fr > .language-link').click();
    cy.wait(500);
    cy.url().should('eq', 'https://test.codingdavinci.de/fr');
  })
})
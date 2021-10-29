/// <reference types="cypress" />
context('Sprachschalter', () => {
  it('Deutsch - Englisch', () => {
    cy.visit('https://codingdavinci.de/');
    cy.wait(500);
    cy.get('.en > .language-link').click();
    cy.wait(500);
    cy.url().should('eq', 'https://codingdavinci.de/en');
  })

  it('Deutsch - Französisch', () => {
    cy.visit('https://codingdavinci.de/');
    cy.wait(500);
    cy.get('.fr > .language-link').click();
    cy.wait(500);
    cy.url().should('eq', 'https://codingdavinci.de/fr');
  })

  it('Französisch - Englisch', () =>{
    cy.visit('https://codingdavinci.de/fr');
    cy.wait(500);
    cy.get('.en > .language-link').click();
    cy.wait(500);
    cy.url().should('eq', 'https://codingdavinci.de/en');
  })

  it('Französisch - Deutsch', () =>{
    cy.visit('https://codingdavinci.de/fr');
    cy.wait(500);
    cy.get('.de > .language-link').click();
    cy.wait(500);
    cy.url().should('eq', 'https://codingdavinci.de/de');
  })

  it('Englisch - Deutsch', () =>{
    cy.visit('https://codingdavinci.de/en');
    cy.wait(500);
    cy.get('.de > .language-link').click();
    cy.wait(500);
    cy.url().should('eq', 'https://codingdavinci.de/de');
  })

  it('Englisch - Französisch', () =>{
    cy.visit('https://codingdavinci.de/en');
    cy.wait(500);
    cy.get('.fr > .language-link').click();
    cy.wait(500);
    cy.url().should('eq', 'https://codingdavinci.de/fr');
  })
})
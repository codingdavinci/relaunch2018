/// <reference types="cypress" />
context('News', () => {
  it('Prüft ob news-view einwandfrei funktioniert', () => {
    cy.visit('https://'+Cypress.env('user')+':'+Cypress.env('password')+'@test.codingdavinci.de/de/');
    cy.get(".navbar-toggler-icon")
    .click();
    cy.get(".nav-item:nth-child(5) > .nav-link")
      .click();
    cy.url().should("contains", 'https://'+Cypress.env('user')+':'+Cypress.env('password')+'@test.codingdavinci.de/de/news');
    // Check if filter works
    cy.get('.menu:nth-child(2) > .menu-item:nth-child(2) > a').click();
    // cy.url().should('contains', 'https://'+Cypress.env('user')+':'+Cypress.env('password')+'@test.codingdavinci.de/de/tags/cdv-berlin-2015');
    cy.get('.menu-item:nth-child(11) > a').click();
    // cy.url().should('contains', 'https://'+Cypress.env('user')+':'+Cypress.env('password')+'@test.codingdavinci.de/de/tags/cdv-saar-lor-lux-2020');
    cy.get('.menu:nth-child(2) > .menu-item:nth-child(5) > a').click();
    // cy.url().should('contains', 'https://'+Cypress.env('user')+':'+Cypress.env('password')+'@test.codingdavinci.de/de/tags/cdv-niederrheinland-2021');
    cy.get('.menu-item:nth-child(22) > a').click();
    // cy.url().should('contains', 'https://'+Cypress.env('user')+':'+Cypress.env('password')+'@test.codingdavinci.de/de/tags/workshop');
    cy.get('.menu-item:nth-child(10) > a').click();
    // cy.url().should('contains', 'https://'+Cypress.env('user')+':'+Cypress.env('password')+'@test.codingdavinci.de/de/tags/cdv-rhein-main-2018');
    cy.get('.menu:nth-child(2) > .menu-item:nth-child(7) > a').click();
    // cy.url().should('contains', 'https://'+Cypress.env('user')+':'+Cypress.env('password')+'@test.codingdavinci.de/de/tags/cdv-nord-2016');
    cy.get('.views-row:nth-child(1) .node__links:nth-child(2) a:nth-child(1)').click();
    // cy.url().should('contains', 'https://'+Cypress.env('user')+':'+Cypress.env('password')+'@test.codingdavinci.de/de/news/die-alten-wissen-es-nicht-immer-besser-oder-coding-da-vinci');
    cy.go('back')
  })
})
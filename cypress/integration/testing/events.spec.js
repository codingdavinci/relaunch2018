/// <reference types="cypress" />
context("Events", () => {
  it("Allgemeine Tests", () => {
    cy.visit('https://'+Cypress.env('user')+':'+Cypress.env('password')+'@test.codingdavinci.de/de/events');
    cy.wait(500);
    cy.get(".node--view-mode-teaser")
      .first()
      .click();
    cy.wait(500);
    cy.go("back");
    cy.wait(500);
    cy.get(".navbar-toggler-icon")
      .click();
    cy.wait(500);
    cy.get(".nav-item:nth-child(2) > .nav-link")
      .click();
    cy.wait(500);
    cy.visit('https://'+Cypress.env('user')+':'+Cypress.env('password')+'@test.codingdavinci.de/de/events');
    cy.wait(500);
    cy.get(".node--view-mode-preview")
      .first()
      .click();
    cy.wait(500);
    cy.go('back')
  });
});

/// <reference types="cypress" />
context("Events", () => {
  it("Allgemeine Tests", () => {
    cy.visit("https://codingdavinci.de/de/events");
    cy.get(".node--view-mode-teaser")
      .first()
      .click();
    cy.go("back");
    cy.get(".navbar-toggler-icon")
      .click();
    cy.get(".nav-item:nth-child(2) > .nav-link")
      .click();
    cy.url().should("contains", "https://codingdavinci.de/de/events");
    cy.get(".node--view-mode-preview")
      .first()
      .click();
    cy.go('back')
  });
});

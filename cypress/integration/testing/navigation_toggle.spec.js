/// <reference types="cypress" />
context("Navigation", () => {
  it("Öffnet und schließt die Navigation", () => {
    cy.visit("https://test.codingdavinci.de/");
    cy.get(".navbar-toggler").click();
    cy.get(".navbar--menu").should("have.class", "show");
    cy.wait(1000);
    cy.get(".navbar-toggler").click();
    cy.get(".navbar--menu").should("not.have.class", "show");
  });
});

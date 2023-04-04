//@ts-ignore
Cypress.Commands.add("verifyPresenceOfFilterPage", () => {
  cy.get(`[data-qa="aggregation-options-filter"]`)
    .should("be.visible")
    .click()
    .then(function () {
      cy.url().should("contain.text", "delivery/food");
      cy.url().should("contain.text", "filter");
      cy.get(`[data-qa="filter-modal-header-heading"]`).should(
        "contain.text",
        "Filter"
      );
    });
});

//@ts-ignore
Cypress.Commands.add("ClickOnSearchCuisinButton", () => {
  cy.get(`[data-qa="aggregation-options-search"]`)
    .should("be.visible")
    .click()
    .then(function () {
      cy.url().should("contain.text", "delivery/food");
      cy.url().should("contain.text", "search");
    });
});

//@ts-ignore
Cypress.Commands.add("scrollAndGetTex", (selector: string) => {
  cy.get(selector).then(($data) => {
    //count = $data.;
    let count = 0;
    cy.log("beginning count" + count);
    let i = 0;
    while (i < 10) {
      try {
        cy.scrollTo("bottom");

        cy.wait(2000);
        cy.get(selector).eq(0).scrollIntoView().should("be.visible");

        //cy.wait(2000);
        i++;
      } catch (error) {}

      cy.log("end count" + count);
    }
  });
});

//@ts-ignore   data-qa="cuisine"

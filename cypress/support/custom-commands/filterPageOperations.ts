//@ts-ignore
Cypress.Commands.add("selectMinimumValueRadioFilter", (index: number) => {
  cy.get(`[data-qa="radio-element"]`)
    .eq(index)
    .should("be.visible")
    .click()
    .then(function () {
      cy.get(`[data-qa="modal-footer"]`)
        .find(`[data-qa="button"]`)
        .should(`be.visible`)
        .click()
        .then(function () {
          cy.get(`[data-qa="filter-modal-header-heading"]`).should("not.exist");
        });
    });
});

//@ts-ignore

Cypress.Commands.add("selectOnlyOfferedRestaurants", (selector: string) => {
  cy.get(selector)
    .should("be.visible")
    .check()
    .then(function () {
      cy.get(`[data-qa="modal-footer"]`)
        .find(`[data-qa="button"]`)
        .should(`be.visible`)
        .click()
        .then(function () {
          cy.get(`[data-qa="filter-modal-header-heading"]`).should("not.exist");
        });
    });
});

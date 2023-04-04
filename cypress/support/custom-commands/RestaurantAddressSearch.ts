//@ts-ignore
Cypress.Commands.add("searchRestaurantAddress", (address: string) => {
  cy.get(`input[id="combobox-input_0"]`)
    .should("be.visible")
    .type(address)
    .then(function () {
      cy.get(
        `[data-qa="location-panel-search-input-address-action-right"]`
      ).should(`be.visible`);
      cy.get(`[data-qa="location-panel-search-panel"]`).should("be.visible");
      cy.get(`[data-qa="location-panel-results-item-element"]`)
        .children(`div[data-qa="text"]`)
        .should("be.visible")
        .click();
    });
});

//@ts-ignore
import { searchResults } from "../../fixtures/selectors.json";

//@ts-ignore
Cypress.Commands.add("searchRestaurantByPlaceOrItem", (itemOrPlace: string) => {
  cy.get(`data-qa="restaurant-list-search-element"`)
    .should("be.visible")
    .type(itemOrPlace)
    .then(function () {
      cy.get(searchResults).should(`be.visible`);
    });
});

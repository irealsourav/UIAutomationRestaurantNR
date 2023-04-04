//@ts-nocheck
import { address, cuisine } from "../fixtures/testData.json";
import { cuisineSelectorRestaurentPage } from "../fixtures/selectors.json";
import { recurse } from "cypress-recurse";

describe("Verify restaurant Minimum oreder", () => {
  it("Hit the URL", () => {
    cy.visit("/", {
      headers: {
        "sec-ch-ua-platform": "Windows",
        "sec-fetch-dest": "document",
        "sec-fetch-mode": "navigate",
        "sec-fetch-site": "same-origin",
        "accept-language": "en-US,en;q=0.9,bn;q=0.8",
        authority: "www.lieferando.de",
        accept: "text/html",
        "user-agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36",
      },
    });
  });
  it("search for a restaurant near address", () => {
    //@ts-ignore
    cy.searchRestaurantAddress(address);
  });

  it("Click on search restaurant By Item Or Cuisine button", () => {
    //@ts-ignore
    cy.ClickOnSearchCuisinButton();
    cy.searchRestaurantByPlaceOrItem(cuisine);
  });

  it("Navigate Back to Restaurants page and validate data using recurse", () => {
    recurse(
      () =>
        cy
          .get(cuisineSelectorRestaurentPage)
          .contains(`Italian`)
          .should(() => {}),
      ($data) => $data.length <= 0,
      {
        limit: 10,
        post() {
          cy.get(cuisineSelectorRestaurentPage)
            .contains(`Italian`)
            .then(($data) => {
              cy.scrollTo(`bottom`);
              cy.get(cuisineSelectorRestaurentPage)
                .contains(`Italian`)
                .should(`have.length.lte`, $data.length);
            });
        },
      }
    ).scrollIntoView();
  });
});

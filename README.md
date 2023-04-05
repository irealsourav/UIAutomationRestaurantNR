# UIAutomationRestaurantNR

## This is a cypress code base for automating few scenarios related to search and filtering.
### Note:: This repository is not in running state due to an error 403 forbidden error in cypress browser while accessing the baseUrl :: "https://www.lieferando.de/en" .
### There is some code running to detect automation library and block them.I tried to make this codebase as robust as possible ,consider this as exact replica /prototype of a running codebase.

## Approach
#### I created custom commands based on there presence in the pages that I am navigating to.
#### I created three test cases :: filter by minimum order, search by cuisine "Italian", search only offered restaurants.
#### I created Four custom commands files :: filterPageOperations.ts, RestaurantAddressSearch.ts,searchRestaurantByPlaceOrItem.ts,ViewRestaurants.ts.
#### Also created two data files inside fixtures section :: testData.json, selectors.json
#### For counting the restaurants name I used a normal generic approach and recurse approach (using cypress-recurse library)

## Tools/Libraries
#### Cypress,cypress-recurse,typescript


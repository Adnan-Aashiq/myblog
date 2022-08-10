export class ListingPage {
    openPage() {
        cy.visit("https://dxplus.mom.gov.sg/templates/index.html")
        cy.get("article>div:nth-child(2) .MomGridContainer--gutter-l div:nth-child(9)").click()
    }
    experienceTesting(){
        cy.get(".MomListingPage__SearchResults .MomSearchBar__SearchInputWrapper input[id*='mom-component--']").type("experience 1")
        cy.get(".MomListingPage__SearchResults .MomSearchBar__SearchInputWrapper input[id*='mom-component--']").clear()
        cy.get(".MomListingPage__SearchFilter div:nth-child(3) .MomInputCheckbox.MomInputCheckbox--variant-vertical div:nth-child(1) label[for*='mom-component--']").click()
        cy.get(".MomListingPage__SearchFilter div:nth-child(4) .MomInputCheckbox.MomInputCheckbox--variant-vertical div:nth-child(3) label[for*='mom-component--']").click()
        cy.get(".MomListingPage__SearchFilter div:nth-child(5) .MomInputCheckbox.MomInputCheckbox--variant-vertical div:nth-child(2) label[for*='mom-component--']").click()
        cy.get(".MomListingPage__SortFilter button[id*='mom-component--']").click()
        cy.get(".MomPagination__Navigation button:nth-child(3)").click()
    }
}
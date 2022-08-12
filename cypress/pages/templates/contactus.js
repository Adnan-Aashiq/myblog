export class ContactUs {
    openPage() {
        cy.visit("https://dxplus.mom.gov.sg/templates/index.html")
        cy.get(':nth-child(4) > :nth-child(1) > :nth-child(1) > .DocsCardMenu > .DocsCardMenu__GridContainer > :nth-child(1) > .DocsCardMenu__Card').click()
    }
    header() {
        cy.get(':nth-child(1) > div.MomMenu__item > .MomMenu__item-text').click()
        cy.get('.MomMenu__item-container--single > .MomMenu__item > .MomMenu__item-text').click()
    }
    search(){
        cy.get('.MomInputSelect__ToggleText').click()
        cy.get('.MomInputDropdownList > :nth-child(5)').click()
        cy.get(".MomSearchBar__InputWrapper div:nth-child(2) .MomInputText--input-state-default input[placeholder='What are you looking for?']").type("abc")
        cy.get('.rsg--button-29').click()
    }
}
export class FAQ {
    openPage() {
        cy.visit("https://dxplus.mom.gov.sg/templates/index.html")
        cy.get(':nth-child(4) > :nth-child(1) > :nth-child(1) > .DocsCardMenu > .DocsCardMenu__GridContainer > :nth-child(5) > .DocsCardMenu__Card').click()
    }
    header() {
        cy.get(':nth-child(1) > div.MomMenu__item > .MomMenu__item-text').click()
        cy.get('.MomMenu__item-container--single > .MomMenu__item > .MomMenu__item-text').click()
    }
    search() {
        //cy.get(".MomFAQPage div:nth-child(3) .MomSearchBar--show-dropdown input[id*='mom-component--']").type("abc")
        cy.get('.list__title p a:nth-child(1)').click()
        cy.get('.list__title p a:nth-child(2)').click()
    }
    faqs() {
        
        cy.get(':nth-child(1) > .MomAccordionItem__Header').click()
        cy.get(':nth-child(2) > .MomAccordionItem__Header').click()
        cy.get(':nth-child(3) > .MomAccordionItem__Header > .MomAccordionItem__Title').click()
        cy.get(':nth-child(4) > .MomAccordionItem__Header').click()
        cy.get(':nth-child(5) > .MomAccordionItem__Header').click()
    }
}
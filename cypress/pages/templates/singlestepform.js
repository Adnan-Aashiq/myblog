export class SingleStepForm{
    openPage() {
        cy.visit("https://dxplus.mom.gov.sg/templates/index.html")
        cy.get("article>div:nth-child(2) .MomGridContainer--gutter-l div:nth-child(16)").click()
    }
}
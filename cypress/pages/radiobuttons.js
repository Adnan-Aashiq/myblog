/// <reference types="Cypress" />

export class RadioButtons{
    typetext() {
        cy.visit("https://dxplus.mom.gov.sg/components/index.html")
        cy.get(".DocsTableOfContents__Input").type("Radio button")
        cy.get(':nth-child(1) > :nth-child(1) > :nth-child(2) > :nth-child(1) > :nth-child(1) > [data-testid="rsg-toc-link"]').click()
        
    }
    example(){
        cy.get("article>div:nth-child(4)").as("locators")
        cy.get("@locators").find(".MomInputRadio--variant-vertical div:nth-child(1) svg").click()
        cy.get("@locators").find(".MomInputRadio--variant-vertical div:nth-child(3) svg").click()
    }
    horizontalStyle(){
        cy.get("article>div:nth-child(6)").as("locators")
        cy.get("@locators").find(".MomInputRadio--variant-horizontal div:nth-child(1) svg").click()
        cy.get("@locators").find(".MomInputRadio--variant-horizontal div:nth-child(2) svg").click()
    }
    cardStyle(){
        cy.get("article>div:nth-child(8)").as("locators")
        cy.get("@locators").find(".MomInputRadio--variant-card div:nth-child(3) svg").click()
        cy.get("@locators").find(".MomInputRadio--variant-card div:nth-child(1) svg").click()
    }
    default(){
        cy.get("article>div:nth-child(10)").as("locators")
        cy.get("@locators").find(".MomInputRadio--variant-card div:nth-child(1) svg").click()
        cy.get("article>div:nth-child(12)").as("locators1")
        cy.get("@locators1").find(".MomInputRadio--variant-card div:nth-child(2) svg").click()
    }
    validation(){
        cy.get("article>div:nth-child(16)").as("locators")
        cy.get("@locators").find(".MomInputRadio--variant-vertical div:nth-child(2) svg").click()
        cy.get("@locators").find(".MomFormMessage__Text.mom-p-s").should('have.text', 'This is an error message')
        cy.get("article>div:nth-child(18)").as("locators1")
        cy.get("@locators1").find(".MomInputRadio--variant-vertical div:nth-child(3) svg").click()
        cy.get("@locators1").find(".MomFormMessage__Text.mom-p-s").should('have.text', 'This is a warning message')
    }

}
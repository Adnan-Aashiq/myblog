/// <reference types="Cypress" />
export class Checkbox{
    typetext() {
        cy.visit("https://dxplus.mom.gov.sg/components/index.html")
        cy.get(".DocsTableOfContents__Input").type("checkbox")
        cy.get(':nth-child(1) > :nth-child(1) > :nth-child(2) > :nth-child(1) > :nth-child(1) > [data-testid="rsg-toc-link"]').click()
        cy.wait(3000)
    }
    single_checkbox(){
        cy.get("article>div:nth-child(4)").as("locators")
        cy.get("@locators").find("svg").click()
        //cy.get("@locators").find("svg").should('be.checked')
    }
    group_checkbox(){
        cy.get("article>div:nth-child(6)").as("locators")
        cy.get("@locators").find(".MomInputCheckbox--variant-vertical div:nth-child(1) svg").click()
        cy.wait(1000)
        cy.get("@locators").find(".MomInputCheckbox--variant-vertical div:nth-child(3) svg").click()
        cy.wait(1000)
        cy.get("@locators").find(".MomInputCheckbox--variant-vertical div:nth-child(2) svg").click()
    }
    checkboxstates(){
        cy.get("article>div:nth-child(8)").as("locators")
        cy.get("@locators").find("svg").click()
        cy.get("article>div:nth-child(10)").as("locators1")
        cy.get("@locators1").find("svg").click()
    }
    checkboxeswitherror(){
        cy.get("article>div:nth-child(14)").as("locators")
        cy.get("@locators").find(".MomInputCheckbox--variant-vertical div:nth-child(1) svg").click()
        cy.wait(1000)
        cy.get("@locators").find(".MomInputCheckbox--variant-vertical div:nth-child(3) svg").click()
        cy.wait(1000)
        cy.get("@locators").find(".MomInputCheckbox--variant-vertical div:nth-child(2) svg").click()
        cy.get("@locators").find(".MomFormMessage__Item > p").should('have.text', 'This is an error message')
    }
    checkboxeswithwarning(){
        cy.get("article>div:nth-child(16)").as("locators")
        cy.get("@locators").find(".MomInputCheckbox--variant-vertical div:nth-child(1) svg").click()
        cy.wait(1000)
        cy.get("@locators").find(".MomInputCheckbox--variant-vertical div:nth-child(3) svg").click()
        cy.wait(1000)
        cy.get("@locators").find(".MomInputCheckbox--variant-vertical div:nth-child(2) svg").click()
        cy.get("@locators").find(".MomFormMessage__Item > p").should('have.text', 'This is a warning message')
    }

}
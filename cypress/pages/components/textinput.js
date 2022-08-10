/// <reference types="Cypress" />
export class TextInput{
    typetext() {
        cy.visit("https://dxplus.mom.gov.sg/components/index.html")
        cy.get(".DocsTableOfContents__Input").type("Text Input")
        cy.get(':nth-child(1) > :nth-child(1) > .DocsComponentsList > .DocsComponentsList__Item > .DocsComponentsList__LinkWrapper > [data-testid="rsg-toc-link"]').click()
    }
    example(){
        cy.get("article>div:nth-child(4)").as("locators")
        cy.get("@locators").find(".MomInputText__Input").type("XYZ private limited")
    }
    patterns(){
        cy.get("article>div:nth-child(6)").as("locators")
        cy.get("@locators").find(".MomInputText__Input").type("89FT12345")
        cy.get("article>div:nth-child(8)").as("locators")
        cy.get("@locators").find(".MomInputText__Input").type("0091")
        cy.get("article>div:nth-child(10)").as("locators")
        cy.get("@locators").find(".MomInputText__Input").type("40170")
        cy.get("article>div:nth-child(12)").as("locators")
        cy.get("@locators").find(".MomInputText__Input").type("F123456789")
        cy.get("article>div:nth-child(14)").as("locators")
        cy.get("@locators").find(".MomInputText__Input").type("Afrin Gaffar")

    }
    variants(){
        cy.get("article>div:nth-child(16)").as("locators")
        cy.get("@locators").find(".MomInputText__Input").type("XYZ private limited")
        cy.get("article>div:nth-child(18)").as("locators")
        cy.get("@locators").find(".MomInputText__Input").type("$2589")
        cy.get("article>div:nth-child(20)").as("locators")
        cy.get("@locators").find(".MomInputText__Input").type("3.5")
        cy.get("article>div:nth-child(22)").as("locators")
        cy.get("@locators").find(".MomInputText__Input").type("G8400092O")
        cy.get("article>div:nth-child(24)").as("locators")
        cy.get("@locators").find(".MomInputText__Input").type("abc@company.com")
        cy.get("article>div:nth-child(26)").as("locators")
        cy.get("@locators").find(".MomInputText__Input").type("955-577-71")
    }
    states(){
        cy.get("article>div:nth-child(28)").as("locators")
        cy.get("@locators").find(".MomInputText__Input").type("Default")
    }
    validations(){
        cy.get("article>div:nth-child(32)").as("locators")
        cy.get("@locators").find(".MomInputText__Input").type("This is an error message")
        cy.get("@locators").find(".MomFormMessage__Text.mom-p-s").should('have.text', 'This is an error message')
        cy.get("article>div:nth-child(34)").as("locators")
        cy.get("@locators").find(".MomInputText__Input").type("This is a warning message")
        cy.get("@locators").find(".MomFormMessage__Text.mom-p-s").should('have.text', 'This is a warning message')
    }
}
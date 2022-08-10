/// <reference types="Cypress" />

export class DatePicker {
    typetext() {
        cy.visit("https://dxplus.mom.gov.sg/components/index.html")
        cy.get(".DocsTableOfContents__Input").type("date picker")
        cy.get(':nth-child(1) > :nth-child(1) > .DocsComponentsList > .DocsComponentsList__Item > .DocsComponentsList__LinkWrapper').click()
    }
    daymonthYear() {
        cy.get("article>div:nth-child(4)").as("locators")
        cy.get("@locators").find(".MomInputDate__Picker").click()
        cy.get("@locators").find("div:nth-child(2) .up").click()
        cy.get("@locators").find("div:nth-child(3) .month__year_btn.up").click()
        cy.get("@locators").find("div:nth-child(4) .prev").click()
        cy.get("@locators").find("div:nth-child(4) span:nth-child(11)").click()
        cy.get('[style=""] > :nth-child(9)').click()
        cy.get('[style=""] > div > :nth-child(24)').click()
    }
    monthYear() {
        cy.get("article>div:nth-child(6)").as("locators")
        cy.get("@locators").find(".MomInputDate__Picker").click()
        cy.get("@locators").find("div:nth-child(2) .up").click()
        cy.get('[style=""] > :nth-child(5)').click()
        cy.get('[style=""] > :nth-child(10)').click()
    }
    dropdown() {
        cy.get("article>div:nth-child(8)").as("locators")
        cy.get("@locators").find(".MomFormFlexWrapper div:nth-child(1) button[id*='mom-component--']").click()
        cy.get("@locators").find(".MomInputSelect__Dropdown div:nth-child(7)").click()
        cy.get("@locators").find(".MomFormFlexWrapper div:nth-child(2) button[id*='mom-component--']").click()
        cy.get("@locators").find(".MomInputSelect__Dropdown div:nth-child(5)").click()
        cy.get("@locators").find(".MomFormFlexWrapper div:nth-child(3) button[id*='mom-component--']").click()
        cy.get("@locators").find(".MomInputSelect__Dropdown div:nth-child(5)").click()
    }
    dateinputRange() {
        cy.get("article>div:nth-child(10)").as("locators")
        cy.get("@locators").find(".MomInputDateRange__Picker").click()
        cy.get('.is-left > .vc-svg-icon').click()
        cy.get('.is-left > .vc-svg-icon').click()
        cy.get('.id-2022-06-07 > .vc-day-content').click()
        cy.get('.id-2022-06-19 > .vc-day-content').click()
    }
    defaultState(){
        cy.get("article>div:nth-child(12)").as("locators")
        cy.get("@locators").find(".MomInputDate__Picker").click()
        for(let i=0;i<9;i++){
            cy.get('[style=""] > header > .next').click()
        }
        cy.get('[style=""] > div > :nth-child(33)').click()
    }
    errorValidation(){
        cy.get("article>div:nth-child(16)").as("locators")
        cy.get("@locators").find(".MomInputDate__Picker").click()
        for(let i=0;i<7;i++){
            cy.get('[style=""] > header > .prev').click()
        }
        cy.get('[style=""] > div > :nth-child(33)').click()
        cy.get("@locators").find(".MomFormMessage__Text.mom-p-s").should('have.text', 'This is an error message')
    }
    warningValidation(){
        cy.get("article>div:nth-child(18)").as("locators")
        cy.get("@locators").find(".MomInputDate__Picker").click()
        for(let i=0;i<5;i++){
            cy.get('[style=""] > header > .next').click()
        }
        cy.get('[style=""] > div > :nth-child(33)').click()
        cy.get("@locators").find(".MomFormMessage__Text.mom-p-s").should('have.text', 'This is a warning message')
    }

}
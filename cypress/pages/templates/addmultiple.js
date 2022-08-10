export class AddMultiple {
    openPage() {
        cy.visit("https://dxplus.mom.gov.sg/templates/index.html")
        cy.get("article>div:nth-child(2) .MomGridContainer--gutter-l div:nth-child(3)").click()
    }
    workExperience() {
        cy.get("article>div:nth-child(2) #input1").type("Label 1")
        cy.get("article>div:nth-child(2) #input2").type("Label 2")
    }
    workExperienceDetails() {
        cy.get("article>div:nth-child(2) .contain div:nth-child(5)").as("locators")
        cy.get("@locators").find('div:nth-child(2) div:nth-child(2) .MomInputText__Input').type("Abc Private limited")
        cy.get("@locators").find('div:nth-child(3) div:nth-child(2) .MomInputText__Input').type("Germany")
        cy.get("@locators").find('div:nth-child(4) div:nth-child(2) .MomInputText__Input').type("Software Engineer")
        cy.get("@locators").find('div:nth-child(6) div:nth-child(2) .MomInputDate__Picker').click()
        cy.get("@locators").find('div:nth-child(6) div:nth-child(2) .day__month_btn.up').click()
        cy.get("@locators").find('div:nth-child(6) div:nth-child(2) .vdp-datepicker  div:nth-child(3) span:nth-child(4)').click()
        cy.get('[style=""] > div > :nth-child(10)').click()
        cy.get("@locators").find('div:nth-child(7) div:nth-child(2) .MomInputDate__Picker').click()
        cy.get("@locators").find('div:nth-child(7) div:nth-child(2) .day__month_btn.up').click()
        cy.get("@locators").find('div:nth-child(7) div:nth-child(2) .vdp-datepicker  div:nth-child(3) span:nth-child(4)').click()
        cy.get('[style=""] > div > :nth-child(10)').click()
        cy.get("@locators").find('div:nth-child(8) div:nth-child(2) .MomInputText__Input').type("2500")
    }
    personalDetails(){
        cy.get(':nth-child(1) > .MomInputCheckboxButton__Label > .MomInputCheckboxButton__LabelIcon > svg').click()
        cy.get(':nth-child(3) > .MomInputRadioButton__Label > .MomInputRadioButton__LabelIcon > svg').click()
        cy.get("article>div:nth-child(2) .contain div:nth-child(3) .MomInputText--size-l input[id*='mom-component--']").type("+923658978452")
        cy.get('.MomFormGroupAddMultiple > :nth-child(2) > .MomLink__Text > span').click()
        cy.get('.MomFormActionButton__ContinueButton').click()
    }
}
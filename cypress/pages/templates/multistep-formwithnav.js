export class MultiStepFormWithNav {
    openPage() {
        cy.visit("https://dxplus.mom.gov.sg/templates/index.html")
        cy.get(':nth-child(20) > .DocsCardMenu__Card').click()
    }
    sectionHeader1() {
        cy.get('[data-testid="Multi step form with nav-example-1"] > [data-testid="preview-wrapper"] > :nth-child(1) > :nth-child(1) > .MomPage__Wrapper > .MomPage > #main > [show-declaration=""] > .MomMultiStepForm > .MomMultiStepForm__Content > :nth-child(2) > .MomFormGroup__Input > .MomInputText').type("Label 1")
        cy.get('[data-testid="Multi step form with nav-example-1"] > [data-testid="preview-wrapper"] > :nth-child(1) > :nth-child(1) > .MomPage__Wrapper > .MomPage > #main > [show-declaration=""] > .MomMultiStepForm > .MomMultiStepForm__Content > :nth-child(3) > .MomFormGroup__Input > .MomInputText > #input2').type("8965")
        cy.get('[data-testid="Multi step form with nav-example-1"] > [data-testid="preview-wrapper"] > :nth-child(1) > :nth-child(1) > .MomPage__Wrapper > .MomPage > #main > [show-declaration=""] > .MomMultiStepForm > .MomMultiStepForm__Content > :nth-child(4) > .MomFormGroup__Input > .MomInputText > #input3').type("5")
        cy.get('[data-testid="Multi step form with nav-example-1"] > [data-testid="preview-wrapper"] > :nth-child(1) > :nth-child(1) > .MomPage__Wrapper > .MomPage > #main > [show-declaration=""] > .MomMultiStepForm > .MomMultiStepForm__Content > :nth-child(5) > .MomFormGroup__Input > .MomInputSelect > #input4').click()
        cy.get('.MomInputDropdownList > :nth-child(1)').click()
    }
    selectDate() {
        cy.get('[data-testid="Multi step form with nav-example-1"] > [data-testid="preview-wrapper"] > :nth-child(1) > :nth-child(1) > .MomPage__Wrapper > .MomPage > #main > [show-declaration=""] > .MomMultiStepForm > .MomMultiStepForm__Content > :nth-child(6) > .MomFormGroup__Input > .MomInputDate > .MomInputDate__Picker').click()
        cy.get('[style=""] > header > .day__month_btn').click()
        for (let i = 0; i < 4; i++) {
            cy.get('[style=""] > header > .next').click()
        }
        cy.get('[style=""] > :nth-child(10)').click()
        cy.get('[style=""] > div > :nth-child(20)').click()
    }
    selectLabel() {
        cy.get("div[data-testid='Multi step form with nav-example-1'] .MomFormFlexWrapper div:nth-child(1) button[id*='mom-component--']").click()
        cy.get('.MomInputDropdownList > :nth-child(5)').click()
        cy.get("div[data-testid='Multi step form with nav-example-1'] .MomFormFlexWrapper div:nth-child(2) button[id*='mom-component--']").click()
        cy.get('.MomInputDropdownList > :nth-child(7)').click()
        cy.get("div[data-testid='Multi step form with nav-example-1'] .MomFormFlexWrapper div:nth-child(3) button[id*='mom-component--']").click()
        cy.get('.MomInputDropdownList > :nth-child(3)').click()
        cy.get('#input7').type("abcd efghi jklmnop")
        cy.get('[data-testid="Multi step form with nav-example-1"] > [data-testid="preview-wrapper"] > :nth-child(1) > :nth-child(1) > .MomPage__Wrapper > .MomPage > #main > [show-declaration=""] > .MomMultiStepForm > .MomMultiStepForm__Content > .MomFormDeclarationSection > .MomFormDeclarationSection__Declaration > .MomFormDeclarationSection__DeclarationCheckbox > .MomInputCheckboxButton__Label > .MomInputCheckboxButton__LabelIcon > svg').click()
        
    }
    viewCode(){
        cy.get('[data-testid="Multi step form with nav-example-1"] > .rsg--controls-25 > :nth-child(1) > div > .rsg--button-29').click()
    }
}
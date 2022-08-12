export class MultiColForm {
    openPage() {
        cy.visit("https://dxplus.mom.gov.sg/templates/index.html")
        cy.get("article>div:nth-child(2) .MomGridContainer--gutter-l div:nth-child(12)").click()
    }
    section1leftCol() {
        cy.get(':nth-child(1) > :nth-child(1) > .MomFormGroup__Input > .MomInputText > #input1').type("2323")
        cy.get(':nth-child(1) > :nth-child(2) > .MomFormGroup__Input > .MomInputText > #input2').type("2563")
        cy.get(':nth-child(1) > :nth-child(2) > .MomFormGroup__Input > .MomInputText > #input2').type("2")
        cy.get(':nth-child(1) > :nth-child(4) > .MomFormGroup__Input > .MomInputSelect > #input4').click()
        cy.get('.MomInputDropdownList > :nth-child(1)').click()
        cy.get(':nth-child(1) > :nth-child(5) > .MomFormGroup__Input > .MomInputDate > .MomInputDate__Picker').click()
        for (let i = 0; i < 6; i++) {
            cy.get('[style=""] > header > .prev').click()
        }
        cy.get('[style=""] > div > :nth-child(25)').click()
        cy.get(".MomFormFlexWrapper div:nth-child(1) button[id*='mom-component--']").click()
        cy.get('.MomInputDropdownList > :nth-child(4)').click()
        cy.get(".MomFormFlexWrapper div:nth-child(2) button[id*='mom-component--']").click()
        cy.get('.MomInputDropdownList > :nth-child(7)').click()
        cy.get(".MomFormFlexWrapper div:nth-child(3) button[id*='mom-component--']").click()
        cy.get('.MomInputDropdownList > :nth-child(3)').click()
    }
    section1rightCol() {
        cy.get(':nth-child(2) > :nth-child(1) > .MomFormGroup__Input > .MomInputText > #input1').type("Right Label")
        cy.get(':nth-child(2) > :nth-child(2) > .MomFormGroup__Input > .MomInputText > #input2').type("8963")
        cy.get(':nth-child(2) > :nth-child(3) > .MomFormGroup__Input > .MomInputText > #input3').type("8")
        cy.get(':nth-child(2) > :nth-child(4) > .MomFormGroup__Input > .MomInputSelect > #input4').click()
        cy.get('.MomInputDropdownList > :nth-child(2)').click()
        cy.get(':nth-child(2) > :nth-child(5) > .MomFormGroup__Input > .MomInputDate > .MomInputDate__Picker').click()
        for (let i = 0; i < 6; i++) {
            cy.get('[style=""] > header > .next').click()
        }
        cy.get('[style=""] > div > :nth-child(27)').click()
        cy.get(".MomInputTextarea--input-state-default").type("abcdefghijklmnopqurstuwxyz")
    }
    section2(){
        cy.get('.MomInputCheckbox > :nth-child(4) > .MomInputCheckboxButton__Label > .MomInputCheckboxButton__LabelIcon > svg').click()
        cy.get(':nth-child(1) > .MomInputRadioButton__Label > .MomInputRadioButton__LabelIcon > svg').click()
        cy.get('.MomFormDeclarationSection__DeclarationCheckbox > .MomInputCheckboxButton__Label > .MomInputCheckboxButton__LabelIcon > svg').click()
        
    }

}
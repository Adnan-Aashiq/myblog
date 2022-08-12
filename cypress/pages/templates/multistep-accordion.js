export class MultiStepAccordion {
    openPage() {
        cy.visit("https://dxplus.mom.gov.sg/templates/index.html")
        cy.get(':nth-child(21) > .DocsCardMenu__Card').click()
    }
    sectionHeader1() {
        cy.get('.MomAccordionItem--is-expanded > .MomAccordionItem__Header').click()
        cy.get(':nth-child(1) > .MomAccordionItem__Header').click()
    }
    sectionHeader1filling() {
        cy.get('#input1').type("label 1")
        cy.get('#input2').type("8963")
        cy.get('#input3').type("8")
        cy.get('#input4').click()
        cy.get('.MomInputDropdownList > :nth-child(1)').click()
        cy.get('.MomInputDate__Picker').click()
    }
    sectionHeader1filling1() {
        cy.get('.day__month_btn').click()
        for (let i = 0; i < 4; i++) {
            cy.get('[style=""] > header > .prev').click()
        }
        cy.get('[style=""] > :nth-child(5)').click()
        cy.get('div > :nth-child(25)').click()

        cy.get(".MomFormFlexWrapper div:nth-child(1) button[id*='mom-component--']").click()
        cy.get('.MomInputDropdownList > :nth-child(5)').click()
        cy.get(".MomFormFlexWrapper div:nth-child(2) button[id*='mom-component--']").click()
        cy.get('.MomInputDropdownList > :nth-child(7)').click()
        cy.get(".MomFormFlexWrapper div:nth-child(2) button[id*='mom-component--']").click()
        cy.get('.MomInputDropdownList > :nth-child(3)').click()
        cy.get('#input7').type("abcd efghi jklmnop")
    }
    sectionHeader2() {
        cy.get(':nth-child(2) > .MomAccordionItem__Header').click()
        cy.get(':nth-child(3) > .MomInputCheckboxButton__Label > .MomInputCheckboxButton__LabelIcon > svg').click()
        cy.get(':nth-child(4) > .MomInputCheckboxButton__Label > .MomInputCheckboxButton__LabelIcon > svg').click()
        cy.get(':nth-child(5) > .MomInputRadioButton__Label > .MomInputRadioButton__LabelIcon > svg').click()
        cy.get(':nth-child(3) > .MomAccordionItem__Header').click()
        cy.get(':nth-child(4) > .MomAccordionItem__Header').click()
    }
    viewCode(){
        cy.get('.rsg--button-29').click()
    }
}
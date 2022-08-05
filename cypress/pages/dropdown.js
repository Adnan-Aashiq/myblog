export class DropDown{

    typetext(text){
        cy.visit("https://dxplus.mom.gov.sg/components/index.html")
        cy.get(".DocsTableOfContents__Input").type("dropdown")
        cy.get(':nth-child(2) > .DocsComponentsList__LinkWrapper > [data-testid="rsg-toc-link"]').click()
        
    }
    exampleDD(){
        cy.get("article > div:nth-child(4)").as("locators")
        cy.get("@locators").find("button[id*='mom-component']").click()
        cy.get('.MomInputDropdownList > :nth-child(5)').click()
    }
    variantDD(){
        cy.get("article > div:nth-child(6)").as("locators")
        cy.get("@locators").find("button[id*='mom-component']").click()
        cy.get('.MomInputDropdownList > :nth-child(3)').click()
    }
    withplaceholderDD(){
        cy.get("article > div:nth-child(8)").as("locators")
        cy.get("@locators").find("button[id*='mom-component']").click()
        cy.get('.MomInputDropdownList > :nth-child(8)').click()
    }
    withdisabledoptionsDD(){
        cy.get("article > div:nth-child(10)").as("locators")
        cy.get("@locators").find("button[id*='mom-component']").click()
        cy.get('.MomInputDropdownList > :nth-child(6)').click()
    }
    
}


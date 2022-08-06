export class DropDown{

    typetext(){
        cy.visit("https://dxplus.mom.gov.sg/components/index.html")
        cy.get(".DocsTableOfContents__Input").type("dropdown")
        cy.get(':nth-child(2) > .DocsComponentsList__LinkWrapper > [data-testid="rsg-toc-link"]').click()
        cy.wait(3000)
        
    }
    exampleDD(){
        cy.get("article > div:nth-child(4)").as("locators")
        cy.get("@locators").find("button[id*='mom-component']").click()
        cy.get('.MomInputDropdownList > :nth-child(5)').click()
        cy.get("@locators").find("button[id*='mom-component']")
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
    autosuggestDD(){
        cy.get("article > div:nth-child(12)").as("locators")
        cy.get("@locators").find("#autosuggest").type("four")
        cy.get('.MomInputDropdownList__Option').click()
    }
    dynamic_autosuggestDD(){
        cy.get("article > div:nth-child(14)").as("locators")
        cy.get("@locators").find("#dynamic").type("Sinagpore")
    }
    autosuggest_withfreetextDD(){
        cy.get("article > div:nth-child(16)").as("locators")
        cy.get("@locators").find("#freetext").type("o")
        cy.get('.MomInputDropdownList > :nth-child(2)').click()
    }
    filterDD(){
        cy.get("article > div:nth-child(18)").as("locators")
        cy.get("@locators").find("button[id*='mom-component']").click()
        cy.get('.MomInputDropdownList > :nth-child(4)').click()        
    }
    filterDD(){
        cy.get("article > div:nth-child(18)").as("locators")
        cy.get("@locators").find("button[id*='mom-component']").click()
        cy.get('.MomInputDropdownList > :nth-child(4)').click()        
    }
    
}


export class MomTable {
    typetext() {
        cy.visit("https://dxplus.mom.gov.sg/components/index.html")
        cy.get(".DocsTableOfContents__Input").type("momtable")
        cy.get(':nth-child(2) > .DocsComponentsList > :nth-child(1) > .DocsComponentsList__LinkWrapper > [data-testid="rsg-toc-link"]').click()
    }
    canvas() {
        cy.get("article>div:nth-child(5)").as("locators")
        cy.get("@locators").find(".MomTableTh--first-column  svg:nth-child(1)").click()
        cy.wait(1500)
        cy.get("@locators").find(".MomTableTh--first-column  svg:nth-child(1)").click()

        cy.get(':nth-child(1) > :nth-child(2) > :nth-child(1) > .addItemButton').click()

        cy.get(':nth-child(5) > :nth-child(7) > .rsg--button-31').click()
        cy.get(':nth-child(2) > :nth-child(2) > :nth-child(1) > .addItemButton').dblclick()
        cy.get(':nth-child(3) > :nth-child(2) > select').select("col1")
        cy.get(':nth-child(4) > :nth-child(2) > select').select("asc")
        cy.get('tbody > :nth-child(5) > :nth-child(2) > input').click()

        cy.get(':nth-child(6) > :nth-child(2) > select').select("single")
        cy.get(':nth-child(7) > :nth-child(2) > select').select("error")
        cy.get(':nth-child(8) > :nth-child(2) > input').click()
        cy.get(':nth-child(9) > :nth-child(2) > select').select("middle")
        cy.get(':nth-child(13) > :nth-child(2) > input').type("2")
        cy.get(':nth-child(16) > :nth-child(2) > select').select("card")
        cy.get(':nth-child(18) > :nth-child(2) > input').click()
    }
    simpleusage() {
        cy.get("article>div:nth-child(7)").as("locators")
        cy.get("@locators").find("button[class*=rsg--button-]").click()
    }
    stripeddisplay() {
        cy.get("article>div:nth-child(9)").as("locators")
        cy.get("@locators").find("button[class*=rsg--button-]").click()
    }
    datetimecol() {
        cy.get("article>div:nth-child(11)").as("locators")
        cy.get("@locators").find("button[class*=rsg--button-]").click()
    }
    fullwidthtable() {
        cy.get("article>div:nth-child(13)").as("locators")
        cy.get("@locators").find("button[class*=rsg--button-]").click()
    }
    longscrolling() {
        cy.get("article>div:nth-child(15)").as("locators")
        cy.get("@locators").find("button[class*=rsg--button-]").click()
    }
    sortablecol() {
        cy.get("article>div:nth-child(17)").as("locators")
        cy.get("@locators").find("button[class*=rsg--button-]").click()
    }
    clickabletable() {
        cy.get("article>div:nth-child(19)").as("locators")
        cy.get("@locators").find("button[class*=rsg--button-]").click()
    }
    select_table() {
        cy.get("article>div:nth-child(21)").as("locators")
        cy.get("@locators").find("button[class*=rsg--button-]").click()
    }
    tablewithinputstates() {
        cy.get("article>div:nth-child(23)").as("locators")
        cy.get("@locators").find("button[class*=rsg--button-]").click()
    }
    disabledtable() {
        cy.get("article>div:nth-child(25)").as("locators")
        cy.get("@locators").find("button[class*=rsg--button-]").click()
    }
    tablewithpagination() {
        cy.get("article>div:nth-child(27)").as("locators")
        cy.get('.space-between-child > :nth-child(1) > .MomPagination > .MomPagination__Navigation > .MomPagination__Button--next').click()
        cy.get(':nth-child(2) > .MomPagination > .MomPagination__Navigation > :nth-child(4)').click()
        cy.get("@locators").find("button[class*=rsg--button-]").click()
    }
    carddisplayformobile() {
        cy.get("article>div:nth-child(29)").as("locators")
        cy.get('[data-testid="preview-wrapper"] > :nth-child(1) > :nth-child(1) > .MomTable > .MomPagination > .MomPagination__Navigation > :nth-child(4)').click()
        cy.get("@locators").find("button[class*=rsg--button-]").click()
    }


}
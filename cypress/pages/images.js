export class Images{
    typetext() {
        cy.visit("https://dxplus.mom.gov.sg/components/index.html")
        cy.get(".DocsTableOfContents__Input").type("image")
        cy.get(':nth-child(1) > :nth-child(1) > :nth-child(2) > :nth-child(1) > :nth-child(1) > [data-testid="rsg-toc-link"]').click()
        cy.wait(3000)
    }
    imagecarousel(){
        cy.get("article>div:nth-child(6)").as("locators")
        for(let i=0;i<6;i++){
            cy.get("@locators").find(".MomImageCarousel__NextButton").click()
        }
        for(let i=0;i<4;i++){
            cy.get("@locators").find(".MomImageCarousel__PrevButton").click()
        }
        cy.get("@locators").find(".MomImageCarousel__ThumbnailNextButton").click()
        //cy.wait(2000)
        cy.get("@locators").find(".MomImageCarousel__ThumbnailPrevButton").click()
    }
    carouselwithdescriptions(){
        cy.get("article>div:nth-child(8)").as("locators")
        cy.get("@locators").find(".MomImageCarousel__NextButton").click()
        cy.get("@locators").find(".MomImageCarousel__PrevButton").click()
        cy.get("@locators").find(".MomImageCarousel__DescriptionWrapper>p")
        .should('have.text', 'Image description, captions goes here')
    }
    carousel_zoomableimage(){
        cy.get("article>div:nth-child(10)").as("locators")
        cy.get("@locators").find(".MomImageCarousel__NextButton").click()   
        cy.get("@locators").find(".MomImageCarousel__PrevButton").click()
        cy.get('.MomImageCarousel__Image--zoomable img').trigger('mousedown')

    }
    modalwithmultipleimages(){
        cy.get("article>div:nth-child(14)").as("locators")
        cy.get("@locators").find(".MomImageModal__Preview>img:nth-child(2)").click()
        cy.wait(1000)
        cy.get(" .MomImageModal__ThumbnailImages>img:nth-child(1)").click()
        cy.wait(1000)
        cy.get(" .MomImageModal__ThumbnailImages>img:nth-child(3)").click()
        cy.wait(1000)
        cy.get(".MomImageModal__CloseButton").click()
        
    }

}
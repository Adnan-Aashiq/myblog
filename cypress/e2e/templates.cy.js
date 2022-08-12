/// <reference types="Cypress" />

import {AddMultiple} from "../pages/templates/addmultiple"
import { ListingPage } from "../pages/templates/listingpage"
import { MultiStepAccordion } from "../pages/templates/multistep-accordion"
import { MultiColForm } from "../pages/templates/multicolform"
import { MultiStepFormWithNav } from "../pages/templates/multistep-formwithnav"
import { FAQ } from "../pages/templates/faq"
import { ContactUs } from "../pages/templates/contactus"


const AddMultipleobj = new AddMultiple()
const listingpageobj = new ListingPage()
const MultiStepAccordionobj = new MultiStepAccordion()
const multicolformobj = new MultiColForm()
const MultiStepFormWithNavobj = new MultiStepFormWithNav()
const Faqobj = new FAQ()
const ContactUsobj = new ContactUs()


describe('All Templates pages testing', function () {
    it('Add Multiple page components testing', function () {
        AddMultipleobj.openPage()
        AddMultipleobj.workExperience()
        AddMultipleobj.workExperienceDetails()
        AddMultipleobj.personalDetails()
    })
    it('Listing page components testing', function () {
        listingpageobj.openPage()
        listingpageobj.experienceTesting()
    })
    it('Multi Step Accordion Form page components testing', function () {
        MultiStepAccordionobj.openPage()
        MultiStepAccordionobj.sectionHeader1()
        MultiStepAccordionobj.sectionHeader1filling()
        MultiStepAccordionobj.sectionHeader1filling1()
        MultiStepAccordionobj.sectionHeader2()
        MultiStepAccordionobj.viewCode()
    })
    it('Multi Column Form page components testing', function () {
        multicolformobj.openPage()
        multicolformobj.section1leftCol()
        multicolformobj.section1rightCol()
        multicolformobj.section2()
    })
    it('Multi Step Form With Nav page components testing', function () {
        MultiStepFormWithNavobj.openPage()
        MultiStepFormWithNavobj.sectionHeader1()
        MultiStepFormWithNavobj.selectDate()
        MultiStepFormWithNavobj.selectLabel()
        MultiStepFormWithNavobj.viewCode()
    })
    it('FAQ page components testing', function () {
        Faqobj.openPage()
        Faqobj.header()
        Faqobj.search()
        Faqobj.faqs()
    })
    it('Contact Us page components testing', function () {
        ContactUsobj.openPage()
        ContactUsobj.header()
        ContactUsobj.search()
    })
})
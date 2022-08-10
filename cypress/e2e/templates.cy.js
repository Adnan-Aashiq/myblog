/// <reference types="Cypress" />

import {AddMultiple} from "../pages/templates/addmultiple"
import { ListingPage } from "../pages/templates/listingpage"
import { MatrixForm } from "../pages/templates/matrixform"
import { MultiColForm } from "../pages/templates/multicolform"
import { MyInfoForm } from "../pages/templates/myinfoform"
import { PaymentPage } from "../pages/templates/paymentpage"
import { SingleStepForm } from "../pages/templates/singlestepform"


const AddMultipleobj = new AddMultiple()
const listingpageobj = new ListingPage()
const matrixformobj = new MatrixForm()
const multicolformobj = new MultiColForm()
const MyInfoFormobj = new MyInfoForm()
const PaymentPageobj = new PaymentPage()
const SingleStepFormobj = new SingleStepForm()


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
    it.only('Matrix Form page components testing', function () {
        matrixformobj.openPage()
    })
    it('Multi Column Form page components testing', function () {
        multicolformobj.openPage()
    })
    it('My Info Form page components testing', function () {
        MyInfoFormobj.openPage()
    })
    it('Payment Form page components testing', function () {
        PaymentPageobj.openPage()
    })
    it('Single Step Form page components testing', function () {
        SingleStepFormobj.openPage()
    })
})
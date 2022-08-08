/// <reference types="Cypress" />

import { DropDown } from "../pages/dropdown";
import { MomTable } from "../pages/momtable";
import { Images } from "../pages/images";
import { Checkbox } from "../pages/checkbox";




const DropDownobj= new DropDown()
const MomTableobj = new MomTable()
const Imagesobj = new Images()
const Checkboxobj = new Checkbox()




describe('All components pages testing', function () {
    it('dropdown page components testing', function () {
        DropDownobj.typetext()
        DropDownobj.exampleDD()
        DropDownobj.variantDD()
        DropDownobj.withplaceholderDD()
        DropDownobj.withdisabledoptionsDD()
        DropDownobj.autosuggestDD()
        DropDownobj.dynamic_autosuggestDD()
        DropDownobj.autosuggest_withfreetextDD()
        DropDownobj.filterDD()
        DropDownobj.statesDD()
        DropDownobj.validationsDD()
        DropDownobj.sizeDD()
    })
    it('momtable page components testing', function () {
        MomTableobj.typetext()
        MomTableobj.canvas()
        MomTableobj.simpleusage()
        MomTableobj.stripeddisplay()
        MomTableobj.datetimecol()
        MomTableobj.fullwidthtable()
        MomTableobj.longscrolling()
        MomTableobj.sortablecol()
        MomTableobj.clickabletable()
        MomTableobj.select_table()
        MomTableobj.tablewithinputstates()
        MomTableobj.disabledtable()
        MomTableobj.tablewithpagination()
        MomTableobj.carddisplayformobile()
    })
    it('Images page components testing', function () {
        Imagesobj.typetext()
        Imagesobj.imagecarousel()
        Imagesobj.carouselwithdescriptions()
        Imagesobj.carousel_zoomableimage()
        Imagesobj.modalwithmultipleimages()
    })
    it.only('Checkboxes page components testing', function () {
        Checkboxobj.typetext()
        Checkboxobj.single_checkbox()
        Checkboxobj.group_checkbox()
        Checkboxobj.checkboxstates()
        Checkboxobj.checkboxeswitherror()
        Checkboxobj.checkboxeswithwarning()
    })
})

// <reference types="cypress"/>
import { DropDown } from "../pages/dropdown";
import { MomTable } from "../pages/momtable";

const DropDownobj= new DropDown()
const MomTableobj = new MomTable()

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
    it.only('momtable page components testing', function () {
        MomTableobj.typetext()
        //MomTableobj.canvas()
        // MomTableobj.simpleusage()
        // MomTableobj.stripeddisplay()
        // MomTableobj.datetimecol()
        // MomTableobj.fullwidthtable()
        // MomTableobj.longscrolling()
        // MomTableobj.sortablecol()
        // MomTableobj.clickabletable()
        // MomTableobj.select_table()
        MomTableobj.tablewithinputstates()
        MomTableobj.disabledtable()
        MomTableobj.tablewithpagination()
        MomTableobj.carddisplayformobile()
    })
})

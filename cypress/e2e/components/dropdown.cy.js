// <reference types="cypress"/>

import { DropDown } from "../../pages/dropdown";

const DropDownobj= new DropDown()

describe('dropdown page testing', function () {
    it('dropdown page components testing', function () {
        DropDownobj.typetext()
        DropDownobj.exampleDD()
        DropDownobj.variantDD()
        DropDownobj.withplaceholderDD()
        DropDownobj.withdisabledoptionsDD()
    })


})

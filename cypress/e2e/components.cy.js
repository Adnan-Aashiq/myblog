/// <reference types="Cypress" />

import { DropDown } from "../pages/components/dropdown";
import { MomTable } from "../pages/components/momtable";
import { Images } from "../pages/components/images";
import { Checkbox } from "../pages/components/checkbox";
import { DatePicker } from "../pages/components/datepicker";
import { RadioButtons } from "../pages/components/radiobuttons";
import { TextInput } from "../pages/components/textinput";




const DropDownobj = new DropDown()
const MomTableobj = new MomTable()
const Imagesobj = new Images()
const Checkboxobj = new Checkbox()
const DatePickerobj = new DatePicker()
const RadioButtonsobj = new RadioButtons()
const TextInputobj = new TextInput()

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
    it('Checkboxes page components testing', function () {
        Checkboxobj.typetext()
        Checkboxobj.single_checkbox()
        Checkboxobj.group_checkbox()
        Checkboxobj.checkboxstates()
        Checkboxobj.checkboxeswitherror()
        Checkboxobj.checkboxeswithwarning()
    })
    it('Date Picker page components testing', function () {
        DatePickerobj.typetext()
        DatePickerobj.daymonthYear()
        DatePickerobj.monthYear()
        DatePickerobj.dropdown()
        DatePickerobj.dateinputRange()
        DatePickerobj.defaultState()
        DatePickerobj.errorValidation()
        DatePickerobj.warningValidation()
    })
    it('Radio Button page components testing', function () {
        RadioButtonsobj.typetext()
        RadioButtonsobj.example()
        RadioButtonsobj.horizontalStyle()
        RadioButtonsobj.cardStyle()
        RadioButtonsobj.default()
        RadioButtonsobj.validation()
    })
    it('Radio Button page components testing', function () {
        TextInputobj.typetext()
        TextInputobj.example()
        TextInputobj.patterns()
        TextInputobj.variants()
        TextInputobj.states()
        TextInputobj.validations()

    })
})

import { Page } from "@playwright/test";


export const DataEntryLocators = (page:Page)=>({
        name : page.getByRole("textbox",{name:'Name'}),
        email : page.getByRole("textbox",{name:'EMail'}),
        phone : page.getByRole("textbox",{name:'Phone'}),
        address : page.getByRole('textbox',{name:'Address:'}),
        genders : page.locator('input[name="gender"]+label'),
        days : page.locator('input.form-check-input[type="checkbox"]+label'),
        country : page.locator('#country')
});
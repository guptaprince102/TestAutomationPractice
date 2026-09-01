import { Page } from "@playwright/test";

export const dummyTicketLocators = (page : Page)=>({
    optionRadioLoc : page.locator("#product_549"),
    passengerFirstName : page.locator("#travname"),
    passengerLastName : page.locator("#travlastname"),
    dobLoc : page.locator("#dob"),
    genderLoc : page.locator('input[name="sex"]+label')
})
import { test, Page, expect } from "@playwright/test";
import { DatePickers } from "../pages/DatePickers";
import { TestConfig } from "../test.config";


let config : TestConfig = new TestConfig();

test.beforeAll(async()=>{

    config = new TestConfig();
    
})

test("@functional Verifying the DropDown Date Picker by Label", async({page})=>{

    let datePicker = new DatePickers(page);
    await page.goto(config.appUrl);
    await datePicker.fillDropDownDateByLabel();
    await expect(datePicker.dropDownDate).not.toBeEmpty();
})

test("@functional Verifying the DropDown Date Picker by Index", async({page})=>{

    let datePicker = new DatePickers(page);
    await page.goto(config.appUrl);
    await datePicker.fillDropDownDateByIndex();
    await expect(datePicker.dropDownDate).not.toBeEmpty();
})
import { test, Page, expect } from "@playwright/test";
import { DatePickers } from "../pages/DatePickers";
import { TestConfig } from "../test.config";

let datePicker : DatePickers;
let config : TestConfig;
let page : Page;

test.beforeEach(async({browser})=>{
    let context = await browser.newContext();
    page = await context.newPage();
    config = new TestConfig();
    await page.goto(config.appUrl);
    datePicker = new DatePickers(page);
})

test.afterEach(async()=>{
    await page.close();
    
})

test("@functional Verifying the input Date Picker", async()=>{

    await datePicker.fillInputDate();
    await expect(datePicker.inputDate).not.toBeEmpty();
})

test("@functional Verifying the DropDown Date Picker by Text", async()=>{

    await datePicker.fillDropDownDateByText();
    await expect(datePicker.dropDownDate).not.toBeEmpty();
})
test("@functional Verifying the DropDown Date Picker by Value", async()=>{

    await datePicker.fillDropDownDateByValue();
    await expect(datePicker.dropDownDate).not.toBeEmpty();
})
test("@functional Verifying the DropDown Date Picker by Label", async()=>{

    await datePicker.fillDropDownDateByLabel();
    await expect(datePicker.dropDownDate).not.toBeEmpty();
})

test("@functional Verifying the DropDown Date Picker by Index", async()=>{

    await datePicker.fillDropDownDateByIndex();
    await expect(datePicker.dropDownDate).not.toBeEmpty();
})
import { test, Page, expect } from "@playwright/test";
import { DatePickers } from "../pages/DatePickers";
import { TestConfig } from "../test.config";


let config : TestConfig = new TestConfig();

test.beforeAll(async()=>{

    config = new TestConfig();
    
})

// test.afterEach(async()=>{
//     await page.close();
    
// })

test("@functional Verifying the input Date Picker", async({page})=>{

    let datePicker = new DatePickers(page);
    await page.goto(config.appUrl);
    await datePicker.fillInputDate();
    await expect(datePicker.inputDate).not.toBeEmpty();
})

test("@functional Verifying the DropDown Date Picker by Text", async({page})=>{

    
    let datePicker = new DatePickers(page);
    await page.goto(config.appUrl);
    await datePicker.fillDropDownDateByText();
    await expect(datePicker.dropDownDate).not.toBeEmpty();
})
test("@functional Verifying the DropDown Date Picker by Value", async({page})=>{

    let datePicker = new DatePickers(page);
    await page.goto(config.appUrl);
    await datePicker.fillDropDownDateByValue();
    await expect(datePicker.dropDownDate).not.toBeEmpty();
})

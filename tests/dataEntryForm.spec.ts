import {test, expect, Page} from "@playwright/test";
import { TestConfig } from "../test.config";
import { DataEntryForm } from "../pages/DataEntryForm";
import { DataEntryLocators } from "../Locators/DataEntryFormLocators";

let dataEntryPage : DataEntryForm
let page1:Page;


test.beforeAll(async({browser})=>{
    let context = await browser.newContext();
    page1 = await context.newPage();
    dataEntryPage = new DataEntryForm(page1);
    
    

});
// test.afterAll(async()=>{
//     await page.close();

// });

test("@functional Verifing the user data form", async()=>{
    let config = new TestConfig();
    
    await page1.goto(config.appUrl);
    await dataEntryPage.fillDataEntryForm();
    await expect(dataEntryPage.locators.name).not.toBeEmpty({timeout:5000});
    await expect(dataEntryPage.locators.email).not.toBeEmpty();
    await expect(dataEntryPage.locators.phone).not.toBeEmpty();
    await expect(dataEntryPage.locators.address).not.toBeEmpty();
    
    expect(await dataEntryPage.selectGender()).toBe(true);
    await dataEntryPage.selectDay();
    await dataEntryPage.selectCountry();

})
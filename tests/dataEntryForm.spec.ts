import {test, expect, Page} from "@playwright/test";
import { TestConfig } from "../test.config";
import { DataEntryForm } from "../pages/DataEntryForm";

let config : TestConfig;
let dataEntryPage : DataEntryForm
let page : Page;

test.beforeAll(async({browser})=>{
    let context = await browser.newContext();
    page = await context.newPage();
    let config = new TestConfig();
    await page.goto(config.appUrl);
    await page.waitForLoadState('load');
    dataEntryPage = new DataEntryForm(page);

});
test.afterAll(async({browser})=>{
    await browser.close();

});

test("@functional Verifing the user data form", async()=>{
    await dataEntryPage.fillDataEntryForm();
    
    await expect(dataEntryPage.name).not.toBeEmpty({timeout:5000});
    await expect(dataEntryPage.email).not.toBeEmpty();
    await expect(dataEntryPage.phone).not.toBeEmpty();
    await expect(dataEntryPage.address).not.toBeEmpty();
    
    expect(await dataEntryPage.selectGender()).toBe(true);
    await dataEntryPage.selectDay();
    await dataEntryPage.selectCountry();
    await page.waitForTimeout(5000);
    

})
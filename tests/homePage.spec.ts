import { test, Page, expect } from "@playwright/test";
import { HomePage } from "../pages/HomePage";
import { TestConfig } from "../test.config";

let homePage : HomePage;
let config : TestConfig;

test.beforeAll(async({browser})=>{
    let context = await browser.newContext();
    let page = await context.newPage();
    config = new TestConfig();
    await page.goto(config.appUrl);
    homePage = new HomePage(page);
})

test.afterAll(async({browser})=>{
    await browser.close();
})

test('@smoke Verify if Home Page exists', async()=>  {

    expect(homePage.isHomePageExist).toBeTruthy();

})

test("@smoke Verify if user landed on the right page", async()=>  {

    let titleDescription : string|null =  await homePage.getTitleDescription();
    expect(titleDescription).toBe("For Selenium, Cypress & Playwright");
    
})
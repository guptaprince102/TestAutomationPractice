import { test, Page, expect } from "@playwright/test";
import { HomePage } from "../pages/HomePage";
import { TestConfig } from "../test.config";

let homePage : HomePage;
let config : TestConfig;
let page : Page;

test.beforeAll(async({browser})=>{
    let context = await browser.newContext();
    page = await context.newPage();
    config = new TestConfig();
    await page.goto(config.appUrl);
    homePage = new HomePage(page);
})

test.afterAll(async()=>{
    await page.close();
})

test('@smoke Verify if Home Page exists', async()=>  {

    expect(await homePage.isHomePageExist()).toBeTruthy();

})

test("@smoke Verify if user landed on the right page", async()=>  {

    let titleDescription : string|null =  await homePage.getTitleDescription();
    expect(titleDescription).toBe("For Selenium, Cypress & Playwright");
    
})
import { test, Page, expect } from "@playwright/test";
import { HomePage } from "../pages/HomePage";
import { TestConfig } from "../test.config";


let config : TestConfig;


test.beforeEach(async()=>{
    
    config = new TestConfig();
})

// test.afterAll(async()=>{
//     await page.close();
// })

test('@smoke Verify if Home Page exists', async({page})=>  {

    await page.goto(config.appUrl);
    let homePage = new HomePage(page);
    expect(await homePage.isHomePageExist()).toBeTruthy();

})

test("@smoke Verify if user landed on the right page", async({page})=>  {

    await page.goto(config.appUrl);
    let homePage = new HomePage(page);
    let titleDescription : string|null =  await homePage.getTitleDescription();
    expect(titleDescription).toBe("For Selenium, Cypress & Playwright");
    
})
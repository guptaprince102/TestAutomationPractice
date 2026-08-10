import { test, expect, Page } from "@playwright/test";
import { TestConfig } from "../test.config";
import { StaticWebTable } from "../pages/StaticWebTable";


let page : Page;
let config : TestConfig;
let staticWebTable : StaticWebTable;

test.beforeAll(async({browser})=>{
    const context = await browser.newContext();
    page = await context.newPage();
    config = new TestConfig();
    await page.goto(config.appUrl);
    await page.waitForLoadState('load');
    staticWebTable = new StaticWebTable(page);

})
test.afterAll(async()=>{
    await page.close();
})

test("@functional verifying number of rows", async()=>{
    
    expect(await staticWebTable.getRowCount()).toBe(7);
    
})
test("@functional verifying number of columns", async()=>{
    
    expect(await staticWebTable.getColumnCount()).toBe(4);
    
})

test("@functional Verifying columns details", async()=>{

    expect(await staticWebTable.getColumnDetails()).toBeTruthy();
})
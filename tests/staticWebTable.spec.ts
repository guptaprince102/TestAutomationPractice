import { test, expect, Page } from "@playwright/test";
import { TestConfig } from "../test.config";
import { StaticWebTable } from "../pages/StaticWebTable";

let config : TestConfig;

test.beforeAll(async()=>{
    
    
    config = new TestConfig();
})
// test.afterAll(async()=>{
//     await page.close();
// })

test("@functional verifying number of rows", async({page})=>{
    
    await page.goto(config.appUrl);
    let staticWebTable = new StaticWebTable(page);
    expect(await staticWebTable.getRowCount()).toBe(7);
    
})
test("@functional verifying number of columns", async({page})=>{
    
    await page.goto(config.appUrl);
    let staticWebTable = new StaticWebTable(page);
    expect(await staticWebTable.getColumnCount()).toBe(4);
    
})

test("@functional Verifying columns details", async({page})=>{

    await page.goto(config.appUrl);
    let staticWebTable = new StaticWebTable(page);
    expect(await staticWebTable.getColumnDetails()).toBeTruthy();
})
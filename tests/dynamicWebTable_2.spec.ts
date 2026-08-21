import { Page, test, expect } from "@playwright/test";
import { TestConfig } from "../test.config";
import { DyamicWebTable } from "../pages/DynamicWebTable";

let testConfig : TestConfig;

test.beforeAll(async()=>{
    
    testConfig = new TestConfig();
})

test("@functional Verifying the Memory of firefox in a Dynamic Table", async({page})=>{
    
    let dynamicTable = new DyamicWebTable(page);
    await page.goto(testConfig.appUrl);
    const firefoxMemory : string = await dynamicTable.getDetails("firefox","memory");
    expect(await dynamicTable.firefoxMemory.innerText()).toEqual(firefoxMemory);
})

test("@functional Verifying the Disk of firefox in a Dynamic Table", async({page})=>{
    
    let dynamicTable = new DyamicWebTable(page);
    await page.goto(testConfig.appUrl);
    const firefoxDisk : string = await dynamicTable.getDetails("firefox","disk");
    expect(await dynamicTable.firefoxDisk.innerText()).toEqual(firefoxDisk);
})
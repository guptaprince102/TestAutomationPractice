import { Page, test, expect } from "@playwright/test";
import { TestConfig } from "../test.config";
import { DyamicWebTable } from "../pages/DynamicWebTable";

let testConfig : TestConfig;
test.beforeEach(async()=>{
    
    testConfig = new TestConfig();
})

// test.afterEach(async()=>{
//     await page.close();
// })

test("@functional Verifying the CPU % of chrome in a Dynamic Table", async({context})=>{
    
    let page = await context.newPage();
    let dynamicTable = new DyamicWebTable(page);
    await page.goto(testConfig.appUrl);
    const chromeCPU : string = await dynamicTable.getDetails('chrome', 'cpu');
    expect(await dynamicTable.chromeCPU.innerText()).toEqual(chromeCPU);
    
})

test("@functional Verifying the Network of chrome in a Dynamic Table", async({context})=>{
    
    let page = await context.newPage();
    let dynamicTable = new DyamicWebTable(page);
    await page.goto(testConfig.appUrl);
    const chromeNetwork : string = await dynamicTable.getDetails("chrome","network");
    expect(await dynamicTable.chromeNetwork.innerText()).toEqual(chromeNetwork);
})

test("@functional Verifying the Memory of firefox in a Dynamic Table", async({context})=>{
    
    let page = await context.newPage();
    let dynamicTable = new DyamicWebTable(page);
    await page.goto(testConfig.appUrl);
    const firefoxMemory : string = await dynamicTable.getDetails("firefox","memory");
    expect(await dynamicTable.firefoxMemory.innerText()).toEqual(firefoxMemory);
})

test("@functional Verifying the Disk of firefox in a Dynamic Table", async({context})=>{
    
    let page = await context.newPage();
    let dynamicTable = new DyamicWebTable(page);
    await page.goto(testConfig.appUrl);
    const firefoxDisk : string = await dynamicTable.getDetails("firefox","disk");
    expect(await dynamicTable.firefoxDisk.innerText()).toEqual(firefoxDisk);
})

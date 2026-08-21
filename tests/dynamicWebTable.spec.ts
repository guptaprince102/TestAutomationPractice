import { Page, test, expect } from "@playwright/test";
import { TestConfig } from "../test.config";
import { DyamicWebTable } from "../pages/DynamicWebTable";

let testConfig : TestConfig;

test.beforeAll(async()=>{
    
    testConfig = new TestConfig();
})

// test.afterEach(async()=>{
//     await page.close();
// })

test("@functional Verifying the CPU % of chrome in a Dynamic Table", async({page})=>{
    
    let dynamicTable = new DyamicWebTable(page);
    await page.goto(testConfig.appUrl);
    const chromeCPU : string = await dynamicTable.getDetails('chrome', 'cpu');
    expect(await dynamicTable.chromeCPU.innerText()).toEqual(chromeCPU);
    
})

test("@functional Verifying the Network of chrome in a Dynamic Table", async({page})=>{
    
    let dynamicTable = new DyamicWebTable(page);
    await page.goto(testConfig.appUrl);
    const chromeNetwork : string = await dynamicTable.getDetails("chrome","network");
    expect(await dynamicTable.chromeNetwork.innerText()).toEqual(chromeNetwork);
})



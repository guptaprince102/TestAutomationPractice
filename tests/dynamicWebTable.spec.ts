import { Page, test, expect } from "@playwright/test";
import { TestConfig } from "../test.config";
import { DyamicWebTable } from "../pages/DynamicWebTable";


let page : Page;
let dynamicTable : DyamicWebTable;
let testConfig : TestConfig;
test.beforeEach(async({context})=>{
    page = await context.newPage();
    testConfig = new TestConfig();
    dynamicTable = new DyamicWebTable(page);
    await page.goto(testConfig.appUrl);
})

test.afterEach(async()=>{
    await page.close();
})

test("@functional Verifying the CPU % of chrome in a Dynamic Table", async()=>{
    
    const chromeCPU : string = await dynamicTable.getDetails('chrome', 'cpu');
    expect(await dynamicTable.chromeCPU.innerText()).toEqual(chromeCPU);
    
})

test("@functional Verifying the Network of chrome in a Dynamic Table", async()=>{
    
    const chromeNetwork : string = await dynamicTable.getDetails("chrome","network");
    expect(await dynamicTable.chromeNetwork.innerText()).toEqual(chromeNetwork);
})

test("@functional Verifying the Memory of firefox in a Dynamic Table", async()=>{
    
    const firefoxMemory : string = await dynamicTable.getDetails("firefox","memory");
    expect(await dynamicTable.firefoxMemory.innerText()).toEqual(firefoxMemory);
})

test("@functional Verifying the Disk of firefox in a Dynamic Table", async()=>{
    
    const firefoxDisk : string = await dynamicTable.getDetails("firefox","disk");
    expect(await dynamicTable.firefoxDisk.innerText()).toEqual(firefoxDisk);
})

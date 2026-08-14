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

test.only("Verifying the data of Dynamic Table", async()=>{
    
    const chromeCPU : string = await dynamicTable.getDetails('chrome', 'cpu');
    const firefoxMemory : string = await dynamicTable.getDetails("firefox","memory");
    const chromeNetwork : string = await dynamicTable.getDetails("chrome","network");
    const firefoxDisk : string = await dynamicTable.getDetails("firefox","disk");

    expect(await dynamicTable.chromeCPU.innerText()).toEqual(chromeCPU);
    expect(await dynamicTable.firefoxMemory.innerText()).toEqual(firefoxMemory);
    expect(await dynamicTable.chromeNetwork.innerText()).toEqual(chromeNetwork);
    expect(await dynamicTable.firefoxDisk.innerText()).toEqual(firefoxDisk);
    
    
    await page.waitForTimeout(5000);

})

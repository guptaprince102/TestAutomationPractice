import { Page, test, expect } from "@playwright/test";
import { PaginationTable } from "../pages/PaginationTable";
import { TestConfig } from "../test.config";

let testConfig : TestConfig;

test.beforeEach(async()=>{
    
    testConfig = new TestConfig();
    

})
// test.afterEach(async()=>{
//     await page.close();
// })

test("@functional Verifying the pagination by clicking on the checkboxes", async({page})=>{

    await page.goto(testConfig.appUrl);
    let paginationTable = new PaginationTable(page);
    await paginationTable.checkCheckboxes();
})
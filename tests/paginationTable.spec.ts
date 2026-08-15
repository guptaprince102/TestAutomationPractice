import { Page, test, expect } from "@playwright/test";
import { PaginationTable } from "../pages/PaginationTable";
import { TestConfig } from "../test.config";

let page : Page;
let paginationTable : PaginationTable;
let testConfig : TestConfig;

test.beforeEach(async({context})=>{
    page = await context.newPage();
    testConfig = new TestConfig();
    await page.goto(testConfig.appUrl);
    paginationTable = new PaginationTable(page);

})
test.afterEach(async()=>{
    await page.close();
})

test("@functional Verifying the pagination by clicking on the checkboxes", async()=>{

    await paginationTable.checkCheckboxes();
})
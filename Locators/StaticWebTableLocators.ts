import { Page } from "@playwright/test";

export const staticWebTableLocators = (page : Page)=>({
    tableLoc : page.locator('table[name="BookTable"]'),
    rowLoc : page.locator('table[name="BookTable"]').locator('tr'),
    tableHeadersLoc : page.locator('table[name="BookTable"]').locator('tr').locator('th'),
    columnLoc : page.locator('table[name="BookTable"]').locator('tr').locator('td')
})
import { Page } from "@playwright/test";

export const paginationTableLocator = (page : Page)=>({
    pagination : page.locator('#pagination'),
    productTable : page.locator('#productTable tbody')
})
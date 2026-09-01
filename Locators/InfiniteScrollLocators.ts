import { Page } from "@playwright/test";

export const infiniteScrollLocators = (page : Page)=>({
    booksLoc : page.locator('#productsDiv h3')

});
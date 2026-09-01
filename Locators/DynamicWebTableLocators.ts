import { Page } from "@playwright/test";

export const dynamicWebTableLocators = (page : Page)=>({
    tableLoc : page.locator('#taskTable'),
    tableHeadLoc : page.locator('#taskTable').locator('#headers'),
    tableRowLoc : page.locator('#taskTable').locator('#rows'),
    chromeCPU : page.locator('.chrome-cpu'),
    firefoxMemory : page.locator('.firefox-memory'),
    chromeNetwork : page.locator('.chrome-network'),
    firefoxDisk : page.locator('.firefox-disk')
})
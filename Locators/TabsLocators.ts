import { Page } from "@playwright/test";

export const tabsLocators = (page : Page)=>({
    tabLoc : page.getByRole('button', { name: 'New Tab' }),
    popUpLoc : page.getByRole('button', { name: 'Popup Windows' })
})
import { Page } from "@playwright/test";

export const dialogLocators = (page : Page)=>({
    alertDialogLoc : page.getByRole('button',{name:'Simple Alert'}),
    confirmDialogLoc : page.getByRole('button',{name:'Confirmation Alert'}),
    promptDialogLoc : page.getByRole('button',{name:'Prompt Alert'}),
    promptDemo : page.locator('#demo')
})
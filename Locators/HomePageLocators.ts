import { Page } from "@playwright/test";

export const homePageLocators = (page : Page)=>({
    pwPracticeButton : page.getByRole("link",{name:"PlaywrightPractice"}),
    titleDescription : page.locator('p.description')

});
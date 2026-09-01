import { Locator, Page } from "@playwright/test";
import { homePageLocators } from "../Locators/HomePageLocators";

export class HomePage{

    private readonly page: Page;
    private readonly locators;

    constructor(page:Page){

        this.page = page;
        this.locators = homePageLocators(page);
    }

    async isHomePageExist():Promise<boolean>{
        let pageTitle:string = await this.page.title();
        if(pageTitle){
            return true;
        }
        return false;
    }

    async getTitleDescription():Promise<string|null>{
       return  await this.locators.titleDescription.textContent()??null;

    }
    async goToPlawrightPractice(){
        await this.locators.pwPracticeButton.click();
    }
}
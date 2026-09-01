import { Page, Locator, BrowserContext } from "@playwright/test";
import { tabsLocators } from "../Locators/TabsLocators";

export class Tabs{

    private readonly page : Page;
    private readonly locators;

    constructor(page : Page){
        this.page = page;
        this.locators = tabsLocators(page);
        
    }

    async clickTabButton():Promise<string>{
        // const page1Promise = this.page.waitForEvent('popup');
        // await this.tabLoc.click();
        // const page1 = await page1Promise;
        const [newPage] = await Promise.all([this.page.waitForEvent('popup'), 
                                             this.locators.tabLoc.click()])
        return await newPage.title();

    }

     async clickPopUpButton(){
        
        const page3Promise = this.page.waitForEvent('popup');
        await this.locators.popUpLoc.click();
        const page3 = await page3Promise;

    }

}
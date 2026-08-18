import { Page, Locator, BrowserContext } from "@playwright/test";


export class Tabs{

    private readonly page : Page;
    private readonly tabLoc : Locator;
    private readonly popUpLoc : Locator;

    constructor(page : Page){
        this.page = page;
        this.tabLoc = page.getByRole('button', { name: 'New Tab' });
        this.popUpLoc = page.getByRole('button', { name: 'Popup Windows' });
    }

    async clickTabButton():Promise<string>{
        // const page1Promise = this.page.waitForEvent('popup');
        // await this.tabLoc.click();
        // const page1 = await page1Promise;
        const [newPage] = await Promise.all([this.page.waitForEvent('popup'), 
                                             this.tabLoc.click()])
        return await newPage.title();

    }

     async clickPopUpButton(){
        
        const page3Promise = this.page.waitForEvent('popup');
        await this.popUpLoc.click();
        const page3 = await page3Promise;

    }

}
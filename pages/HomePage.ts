import { Locator, Page } from "@playwright/test";

export class HomePage{

    private readonly page: Page;
    private readonly pwPracticeButton: Locator
    private readonly titleDescription : Locator

    constructor(page:Page){

        this.page = page;
        this.pwPracticeButton = page.getByRole("link",{name:"PlaywrightPractice"});
        this.titleDescription = page.locator('p.description');

    }

    async isHomePageExist(){
        let pageTitle:string = await this.page.title();
        if(pageTitle){
            return true;
        }
        return false;
    }

    async getTitleDescription():Promise<string|null>{
       return  await this.titleDescription.textContent()??null;

    }
    async goToPlawrightPractice(){
        await this.pwPracticeButton.click();
    }




}
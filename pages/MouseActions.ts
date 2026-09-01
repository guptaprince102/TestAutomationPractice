import { Page, Locator } from "@playwright/test";
import { randomDataUtil } from "../utils/randomDataGenerator";
import {mouseActionLocators} from "../Locators/MouseActionsLocators"


export class MouseActions{

    private readonly page : Page;
    private readonly locators;


    constructor(page : Page){
        this.page = page;
        this.locators = mouseActionLocators(page);
    }

    async hoverAction(){
        await this.locators.pointMe.hover();
        const hoverOptions : Locator[] = await this.page.locator('.dropdown-content a').all();
        const randomOption:Locator = randomDataUtil.getRandomValue(hoverOptions);
        await randomOption.hover();

    }

    async doubleClickAction(input1 : string, input2 : string):Promise<string>{

        await this.locators.field1.fill(input1);
        await this.locators.copyBtn.dblclick();
        
        await this.locators.field1.fill(input2);
        await this.locators.copyBtn.click({clickCount:2});
        const output = await this.locators.field2.inputValue();
        return output;
    }

    async dragAndDropAction(){

        await this.locators.dragBtn.dragTo(this.locators.dropBtn);
    }
}
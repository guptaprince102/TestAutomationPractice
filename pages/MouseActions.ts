import { Page, Locator } from "@playwright/test";
import { randomDataUtil } from "../utils/randomDataGenerator";


export class MouseActions{

    private readonly page : Page;
    private readonly pointMe : Locator;
    private readonly field1 : Locator;
    private readonly field2 : Locator;
    private readonly copyBtn : Locator;
    private readonly dragBtn : Locator;
    private readonly dropBtn : Locator;


    constructor(page : Page){
        this.page = page;
        this.pointMe = page.getByText('Point Me', {exact : true});
        this.field1 = page.locator('#field1');
        this.field2 = page.locator('#field2');
        this.copyBtn = page.getByRole('button',{name:'Copy Text'});
        this.dragBtn = page.locator('#draggable');
        this.dropBtn = page.locator('#droppable');
        
    }

    async hoverAction(){
        await this.pointMe.hover();
        const hoverOptions : Locator[] = await this.page.locator('.dropdown-content a').all();
        
        const randomOption:Locator = randomDataUtil.getRandomValue(hoverOptions);
        await randomOption.hover();
        

    }

    async doubleClickAction(input1 : string, input2 : string):Promise<string>{

        await this.field1.fill(input1);
        await this.copyBtn.dblclick();
        
        await this.field1.fill(input2);
        await this.copyBtn.click({clickCount:2});
        const output = await this.field2.inputValue();
        return output;
    }

    async dragAndDropAction(){

        await this.dragBtn.dragTo(this.dragBtn);
    }
}
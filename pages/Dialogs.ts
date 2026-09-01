import { Page, Locator } from "@playwright/test";
import { dialogLocators } from "../Locators/DialogsLocators";

export class Dialogs{
    private readonly page : Page;
    private readonly locators;
    

    constructor(page : Page){
        this.page = page;
        this.locators = dialogLocators(page);
    }
    async alertDialog():Promise<{dialogMessage:string, dialogType:string}>{

        let dialogMessage = '';
        let dialogType = '';
        this.page.on('dialog',(dialog)=>{
             dialogMessage = dialog.message();
             dialogType = dialog.type();
             dialog.accept();
        });
        await this.locators.alertDialogLoc.click();
        return {dialogMessage:dialogMessage, dialogType:dialogType};
    }
    
    async acceptConfirmDialog():Promise<{dialogMessage:string, dialogType:string}>{

        let dialogMessage = '';
        let dialogType = '';
        this.page.on('dialog', dialog=>{
             dialogMessage = dialog.message();
             dialogType = dialog.type();
             dialog.accept();
        });
        await this.locators.confirmDialogLoc.click();
        return {dialogMessage:dialogMessage, dialogType:dialogType};
    }

    async dismissConfirmDialog():Promise<{dialogMessage:string, dialogType:string}>{

        let dialogMessage = '';
        let dialogType = '';
        this.page.on('dialog', dialog=>{
             dialogMessage = dialog.message();
             dialogType = dialog.type();
             dialog.dismiss();
        });
        await this.locators.confirmDialogLoc.click();
        return {dialogMessage:dialogMessage, dialogType:dialogType};
    }

    async acceptPromptDialog(inputPrompt : string):Promise<{dialogMessage:string, dialogType:string, dialogInput:string, dialogOutput:string}>{

        let dialogMessage = '';
        let dialogType = '';
        let dialogInput ='';
        this.page.on('dialog', dialog=>{
             dialogMessage = dialog.message();
             dialogType = dialog.type();
             dialogInput = dialog.defaultValue();
             dialog.accept(inputPrompt);
        });
        await this.locators.promptDialogLoc.click();
        let dialogOutput = await this.locators.promptDemo.innerText();
        return {dialogMessage:dialogMessage, dialogType:dialogType, dialogInput:dialogInput,dialogOutput:dialogOutput };
    }

    async dismissPromptDialog():Promise<{dialogMessage:string, dialogType:string, dialogInput:string, dialogOutput:string}>{

        let dialogMessage = '';
        let dialogType = '';
        let dialogInput ='';
        this.page.on('dialog', dialog=>{
             dialogMessage = dialog.message();
             dialogType = dialog.type();
             dialogInput = dialog.defaultValue();
             dialog.dismiss();
        });
        await this.locators.promptDialogLoc.click();
        let dialogOutput = await this.locators.promptDemo.innerText();
        return {dialogMessage:dialogMessage, dialogType:dialogType, dialogInput:dialogInput, dialogOutput:dialogOutput};
    }
}
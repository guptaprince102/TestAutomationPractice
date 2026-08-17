import { Page, Locator } from "@playwright/test";

export class Dialogs{
    private readonly page : Page;
    private readonly alertDialogLoc : Locator;
    private readonly confirmDialogLoc : Locator;
    private readonly promptDialogLoc : Locator;
    private readonly promptDemo : Locator;
    

    constructor(page : Page){
        this.page = page;
        this.alertDialogLoc = page.getByRole('button',{name:'Simple Alert'});
        this.confirmDialogLoc = page.getByRole('button',{name:'Confirmation Alert'});
        this.promptDialogLoc = page.getByRole('button',{name:'Prompt Alert'});
        this.promptDemo = page.locator('#demo');
    }
    async alertDialog():Promise<{dialogMessage:string, dialogType:string}>{

        let dialogMessage = '';
        let dialogType = '';
        this.page.on('dialog',(dialog)=>{
             dialogMessage = dialog.message();
             dialogType = dialog.type();
             dialog.accept();
        });
        await this.alertDialogLoc.click();
        return {dialogMessage:dialogMessage, dialogType:dialogType};
    }
    
    async acceptConfirmDialog():Promise<{dialogMessage:string, dialogType:string}>{

        let dialogMessage = '';
        let dialogType = '';
        this.page.on('dialog',(dialog)=>{
             dialogMessage = dialog.message();
             dialogType = dialog.type();
             dialog.accept();
        });
        await this.confirmDialogLoc.click();
        return {dialogMessage:dialogMessage, dialogType:dialogType};
    }

    async dismissConfirmDialog():Promise<{dialogMessage:string, dialogType:string}>{

        let dialogMessage = '';
        let dialogType = '';
        this.page.on('dialog',(dialog)=>{
             dialogMessage = dialog.message();
             dialogType = dialog.type();
             dialog.dismiss();
        });
        await this.confirmDialogLoc.click();
        return {dialogMessage:dialogMessage, dialogType:dialogType};
    }

    async acceptPromptDialog(inputPrompt : string):Promise<{dialogMessage:string, dialogType:string, dialogInput:string, dialogOutput:string}>{

        let dialogMessage = '';
        let dialogType = '';
        let dialogInput ='';
        this.page.on('dialog',(dialog)=>{
             dialogMessage = dialog.message();
             dialogType = dialog.type();
             dialogInput = dialog.defaultValue();
             dialog.accept(inputPrompt);
        });
        await this.promptDialogLoc.click();
        let dialogOutput = await this.promptDemo.innerText();
        return {dialogMessage:dialogMessage, dialogType:dialogType, dialogInput:dialogInput,dialogOutput:dialogOutput };
    }

    async dismissPromptDialog():Promise<{dialogMessage:string, dialogType:string, dialogInput:string, dialogOutput:string}>{

        let dialogMessage = '';
        let dialogType = '';
        let dialogInput ='';
        this.page.on('dialog',(dialog)=>{
             dialogMessage = dialog.message();
             dialogType = dialog.type();
             dialogInput = dialog.defaultValue();
             dialog.dismiss();
        });
        await this.promptDialogLoc.click();
        let dialogOutput = await this.promptDemo.innerText();
        return {dialogMessage:dialogMessage, dialogType:dialogType, dialogInput:dialogInput, dialogOutput:dialogOutput};
    }
}
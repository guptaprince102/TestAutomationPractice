import { Page, test, expect } from "@playwright/test";
import { Dialogs } from "../pages/Dialogs";
import { TestConfig } from "../test.config";


let testConfig : TestConfig;

test.beforeEach(async()=>{
    
    testConfig = new TestConfig();
})

test('@functional Verifying by accepting the Prompt Dialog', async({page})=>{

    await page.goto(testConfig.appUrl);
    let dialogs = new Dialogs(page);
    const inputText:string = 'John Cena';
    const result = await dialogs.acceptPromptDialog(inputText);
    expect.soft(result.dialogMessage).toBe('Please enter your name:');
    expect.soft(result.dialogType).toBe('prompt');
    expect.soft(result.dialogInput).toBe('Harry Potter');
    expect.soft(result.dialogOutput).toContain(inputText);
})

test('@functional Verifying by dismissing the Prompt Dialog', async({page})=>{

    await page.goto(testConfig.appUrl);
    let dialogs = new Dialogs(page);
    const result = await dialogs.dismissPromptDialog();
    expect.soft(result.dialogMessage).toBe('Please enter your name:');
    expect.soft(result.dialogType).toBe('prompt');
    expect.soft(result.dialogInput).toBe('Harry Potter');
    expect.soft(result.dialogOutput).toContain('cancelled');
})
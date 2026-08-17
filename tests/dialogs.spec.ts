import { Page, test, expect } from "@playwright/test";
import { Dialogs } from "../pages/Dialogs";
import { TestConfig } from "../test.config";


let testConfig : TestConfig;

test.beforeEach(async()=>{
    
    testConfig = new TestConfig();
})
// test.afterEach(async()=>{
//     await page.close();
// })

test('Verifying the Simple Alert', async({context})=>{

    let page = await context.newPage();
    await page.goto(testConfig.appUrl);
    let dialogs = new Dialogs(page);
    const result = await dialogs.alertDialog();
    expect.soft(result.dialogMessage).toBe('I am an alert box!');
    expect.soft(result.dialogType).toBe('alert');

})

test('Verifying by accepting the Confirmation Dialog', async({context})=>{

    let page = await context.newPage();
    await page.goto(testConfig.appUrl);
    let dialogs = new Dialogs(page);
    const result = await dialogs.acceptConfirmDialog();
    expect.soft(result.dialogMessage).toBe('Press a button!');
    expect.soft(result.dialogType).toBe('confirm');

})

test('Verifying by dismissing the Confirmation Dialog', async({context})=>{

    let page = await context.newPage();
    await page.goto(testConfig.appUrl);
    let dialogs = new Dialogs(page);
    const result = await dialogs.dismissConfirmDialog();
    expect.soft(result.dialogMessage).toBe('Press a button!');
    expect.soft(result.dialogType).toBe('confirm');

})

test('Verifying by accepting the Prompt Dialog', async({context})=>{

    let page = await context.newPage();
    await page.goto(testConfig.appUrl);
    let dialogs = new Dialogs(page);
    const inputText:string = 'John Cena';
    const result = await dialogs.acceptPromptDialog(inputText);
    expect.soft(result.dialogMessage).toBe('Please enter your name:');
    expect.soft(result.dialogType).toBe('prompt');
    expect.soft(result.dialogInput).toBe('Harry Potter');
    expect.soft(result.dialogOutput).toContain(inputText);
})

test('Verifying by dismissing the Prompt Dialog', async({context})=>{

    let page = await context.newPage();
    await page.goto(testConfig.appUrl);
    let dialogs = new Dialogs(page);
    const result = await dialogs.dismissPromptDialog();
    expect.soft(result.dialogMessage).toBe('Please enter your name:');
    expect.soft(result.dialogType).toBe('prompt');
    expect.soft(result.dialogInput).toBe('Harry Potter');
    expect.soft(result.dialogOutput).toContain('cancelled');
})
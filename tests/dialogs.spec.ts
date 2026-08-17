import { Page, test, expect } from "@playwright/test";
import { Dialogs } from "../pages/Dialogs";
import { TestConfig } from "../test.config";

let page : Page;
let dialogs : Dialogs;
let testConfig : TestConfig;

test.beforeEach(async({context})=>{
    page = await context.newPage();
    testConfig = new TestConfig();
    await page.goto(testConfig.appUrl);
    dialogs = new Dialogs(page);

})
test.afterEach(async()=>{
    await page.close();
})

test('Verifying the Simple Alert', async()=>{

    const result = await dialogs.alertDialog();
    expect.soft(result.dialogMessage).toBe('I am an alert box!');
    expect.soft(result.dialogType).toBe('alert');

})

test('Verifying by accepting the Confirmation Dialog', async()=>{

    const result = await dialogs.acceptConfirmDialog();
    expect.soft(result.dialogMessage).toBe('Press a button!');
    expect.soft(result.dialogType).toBe('confirm');

})

test('Verifying by dismissing the Confirmation Dialog', async()=>{

    const result = await dialogs.dismissConfirmDialog();
    expect.soft(result.dialogMessage).toBe('Press a button!');
    expect.soft(result.dialogType).toBe('confirm');

})

test('Verifying by accepting the Prompt Dialog', async()=>{

    const inputText:string = 'John Cena';
    const result = await dialogs.acceptPromptDialog(inputText);
    expect.soft(result.dialogMessage).toBe('Please enter your name:');
    expect.soft(result.dialogType).toBe('prompt');
    expect.soft(result.dialogInput).toBe('Harry Potter');
    expect.soft(result.dialogOutput).toContain(inputText);
})

test('Verifying by dismissing the Prompt Dialog', async()=>{

    const result = await dialogs.dismissPromptDialog();
    expect.soft(result.dialogMessage).toBe('Please enter your name:');
    expect.soft(result.dialogType).toBe('prompt');
    expect.soft(result.dialogInput).toBe('Harry Potter');
    expect.soft(result.dialogOutput).toContain('cancelled');
})
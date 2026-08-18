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

test('@functional Verifying the Simple Alert', async({page})=>{

    await page.goto(testConfig.appUrl);
    let dialogs = new Dialogs(page);
    const result = await dialogs.alertDialog();
    expect.soft(result.dialogMessage).toBe('I am an alert box!');
    expect.soft(result.dialogType).toBe('alert');

})

test('@functional Verifying by accepting the Confirmation Dialog', async({page})=>{

    await page.goto(testConfig.appUrl);
    let dialogs = new Dialogs(page);
    const result = await dialogs.acceptConfirmDialog();
    expect.soft(result.dialogMessage).toBe('Press a button!');
    expect.soft(result.dialogType).toBe('confirm');

})

test('@functional Verifying by dismissing the Confirmation Dialog', async({page})=>{

    await page.goto(testConfig.appUrl);
    let dialogs = new Dialogs(page);
    const result = await dialogs.dismissConfirmDialog();
    expect.soft(result.dialogMessage).toBe('Press a button!');
    expect.soft(result.dialogType).toBe('confirm');

})


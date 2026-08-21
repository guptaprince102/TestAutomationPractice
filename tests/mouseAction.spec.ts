import { Page, test, expect } from "@playwright/test";
import { TestConfig } from "../test.config";
import { MouseActions } from "../pages/MouseActions";

let testConfig : TestConfig;

test.beforeAll(async()=>{
    testConfig = new TestConfig();
})

test('Verifing Hover Actions', async({page})=>{

    let mouseAction = new MouseActions(page);
    await page.goto(testConfig.appUrl);
    await mouseAction.hoverAction();

});

test('Verifing Double Click Actions', async({page})=>{

    let mouseAction = new MouseActions(page);
    await page.goto(testConfig.appUrl);
    const inputs = ['test1', 'Test2 by Prince']
    const output = await mouseAction.doubleClickAction(inputs[0], inputs[1]);
    expect(output).toEqual(inputs[1]);
});

test.only('Verifing Drag and Drop Actions', async({page})=>{

    let mouseAction = new MouseActions(page);
    await page.goto(testConfig.appUrl);
    await mouseAction.dragAndDropAction();
    await page.waitForTimeout(2000);
});
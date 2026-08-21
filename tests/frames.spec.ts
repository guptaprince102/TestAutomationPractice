import { Page, expect, test } from "@playwright/test";
import { Frames } from "../pages/Frames";
import { TestConfig } from "../test.config";

let testConfig : TestConfig

test.beforeAll(async()=>{
    testConfig = new TestConfig();
})

test.fixme('@functional verifing the frames', async({page})=>{
    let frames = new Frames(page);
    await page.goto(testConfig.frameURL);
    await frames.doFrames();
})
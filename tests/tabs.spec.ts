import { test, expect } from '@playwright/test';
import { TestConfig } from '../test.config';
import { Tabs } from '../pages/Tabs';

let testConfig : TestConfig;

test.beforeEach(async()=>{
  testConfig = new TestConfig();
})

test('@functional Verifing new tab', async ({ page }) => {

  let tabs = new Tabs(page);
  await page.goto(testConfig.appUrl);
  const newTabTitle = await tabs.clickTabButton();
  expect(newTabTitle).toContain('SDET');
});

test('@functional Verifing Pop Ups', async ({ context }) => {

  const page = await context.newPage()
  let tabs = new Tabs(page);
  await page.goto(testConfig.appUrl);
  await tabs.clickPopUpButton();
  const pages = context.pages();
  for(let pw of pages.slice(1)){
    await pw.close();
  }
  expect(context.pages()).toHaveLength(1);
});
import { Page, test, expect } from "@playwright/test";
import { TestConfig } from "../test.config";
import { InfiniteScroll } from "../pages/InfiniteScroll";

let testConfig : TestConfig;

test.beforeEach(async()=>{
    testConfig = new TestConfig();
})

test.only('@functional Verifing the infinite scroll by getting total number of books', async({page})=>{

    let infiniteScroll = new InfiniteScroll(page);
    await page.goto(testConfig.infiniteScrollingURL);
    const booksCount = await infiniteScroll.getBooksCount();
    expect(booksCount).toEqual(180);

})

import { test, Page, expect } from "@playwright/test";
import { DummyTickets } from "../pages/DummyTickets";
import { TestConfig } from "../test.config";

let dummyTicket : DummyTickets;
let config : TestConfig;
let page : Page;

test.beforeEach(async({browser})=>{
    let context = await browser.newContext();
    page = await context.newPage();
    config = new TestConfig();
    await page.goto(config.dummyTicketURL);
    dummyTicket = new DummyTickets(page);
})

test.afterEach(async()=>{
    await page.close();
    
})

test("@functional Verifying by filling passenger details", async()=>{

    await dummyTicket.fillPassengerDetails();

})
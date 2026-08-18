import { test, Page, expect } from "@playwright/test";
import { DummyTickets } from "../pages/DummyTickets";
import { TestConfig } from "../test.config";


let config : TestConfig;

test.beforeEach(async()=>{
    
    config = new TestConfig();  
})

// test.afterEach(async()=>{
//     await page.close();
    
// })

test("@functional Verifying by filling passenger details", async({page})=>{

    await page.goto(config.dummyTicketURL);
    let dummyTicket = new DummyTickets(page);
    await dummyTicket.fillPassengerDetails();

})
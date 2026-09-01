import { Page, Locator } from "@playwright/test";
import { randomDataUtil } from "../utils/randomDataGenerator";
import { dummyTicketLocators } from "../Locators/DummyTicketsLocators";

export class DummyTickets{
    private readonly page:Page;
    private readonly locators;



    constructor(page:Page){
        this.page = page;
        this.locators = dummyTicketLocators(page);
        

    }
    async selectDate(month:string, year:string, date:string){
        await this.page.locator("select.ui-datepicker-month").selectOption(month);
        await this.page.locator("select.ui-datepicker-year").selectOption(year);
        const dateCells : Locator[] = await this.page.locator("table.ui-datepicker-calendar a").all();
        for(const cell of dateCells){
            if(await cell.innerText() === date){
                await cell.click();
                break;
            }
        }

    }

    async fillPassengerDetails(){
        await this.locators.optionRadioLoc.click();
        await this.locators.passengerFirstName.fill("Akash");
        await this.locators.passengerLastName.fill("Ratore");
        await this.locators.dobLoc.click();
        await this.selectDate("Mar", "2001", "2");
        const gender = randomDataUtil.getRandomValue((await this.locators.genderLoc.allInnerTexts()).map(value=>value.trim()));
        await this.page.getByRole("radio", {name:gender, exact:true}).click();
    }

}
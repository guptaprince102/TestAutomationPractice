import { Page, Locator } from "@playwright/test";
import { randomDataUtil } from "../utils/randomDataGenerator";

export class DummyTickets{
    private readonly page:Page;
    private readonly optionRadioLoc: Locator;
    private readonly passengerFirstName : Locator;
    private readonly passengerLastName : Locator;
    private readonly dobLoc : Locator;
    private readonly genderLoc : Locator;


    constructor(page:Page){
        this.page = page;
        this.optionRadioLoc = page.locator("#product_549");
        this.passengerFirstName = page.locator("#travname");
        this.passengerLastName = page.locator("#travlastname");
        this.dobLoc = page.locator("#dob");
        this.genderLoc = page.locator('input[name="sex"]+label');

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
        await this.optionRadioLoc.click();
        await this.passengerFirstName.fill("Akash");
        await this.passengerLastName.fill("Ratore");
        await this.dobLoc.click();
        await this.selectDate("Mar", "2001", "2");
        const gender = randomDataUtil.getRandomValue((await this.genderLoc.allInnerTexts()).map(value=>value.trim()));
        await this.page.getByRole("radio", {name:gender, exact:true}).click();
    }

}
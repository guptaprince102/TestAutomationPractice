import { Locator, Page } from "@playwright/test";
import { randomDataUtil } from "../utils/randomDataGenerator";
import { datePickerLocators } from "../Locators/DatePickersLocators";


export class DatePickers{

    // private readonly page: Page;
    readonly locators;
    


    constructor(page:Page){

        // this.page = page;
        this.locators = datePickerLocators(page)
        

    }

    async fillInputDate(){
        await this.locators.inputDate.fill('12/19/1990');
    }

    async fillDropDownDateByText(){
        await this.locators.dropDownDate.click();
        await this.locators.yearLoc.click();
        const availableyears : string[] = await this.locators.yearLoc.locator('option').allInnerTexts();
        const selectedYear : string = randomDataUtil.getRandomValue(availableyears)??"";
        if(selectedYear){
            await this.locators.yearLoc.selectOption(selectedYear);
        }
        await this.locators.monthLoc.click();
        const availableMonths : string[] = await this.locators.monthLoc.locator('option').allInnerTexts();
        const selectedMonth : string = randomDataUtil.getRandomValue(availableMonths)??"";
        if(availableMonths){
            await this.locators.monthLoc.selectOption(selectedMonth);
        }  

        const availableDates: Locator[] = await this.locators.dateTable.all();
        const selectedDate = randomDataUtil.getRandomValue(availableDates);
        await selectedDate?.click();
    }

    async fillDropDownDateByValue(){
        await this.locators.dropDownDate.click();
        await this.locators.yearLoc.click();
        await this.locators.yearLoc.selectOption({value:"2018"});
        await this.locators.monthLoc.click();
        await this.locators.monthLoc.selectOption({value:"4"});
        const availableDates: Locator[] = await this.locators.dateTable.all();
        const selectedDate = randomDataUtil.getRandomValue(availableDates);
        await selectedDate?.click();
    }
    async fillDropDownDateByLabel(){
        await this.locators.dropDownDate.click();
        await this.locators.yearLoc.click();
        await this.locators.yearLoc.selectOption({label:"2030"});
        await this.locators.monthLoc.click();
        await this.locators.monthLoc.selectOption({label:"Dec"});
        const availableDates: Locator[] = await this.locators.dateTable.all();
        const selectedDate = randomDataUtil.getRandomValue(availableDates);
        await selectedDate?.click();
    }
    async fillDropDownDateByIndex(){
        await this.locators.dropDownDate.click();
        await this.locators.yearLoc.click();
        await this.locators.yearLoc.selectOption({index:10});
        await this.locators.monthLoc.click();
        await this.locators.monthLoc.selectOption({index:10});
        const availableDates: Locator[] = await this.locators.dateTable.all();
        const selectedDate = randomDataUtil.getRandomValue(availableDates);
        await selectedDate?.click();
    }
}
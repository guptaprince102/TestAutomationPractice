import { Locator, Page } from "@playwright/test";
import { randomDataUtil } from "../utils/randomDataGenerator";


export class DatePickers{

    private readonly page: Page;
    readonly inputDate : Locator;
    readonly dropDownDate : Locator;
    private readonly monthLoc : Locator;
    private readonly yearLoc : Locator;
    private readonly dateTable : Locator;


    constructor(page:Page){

        this.page = page;
        this.inputDate = page.locator('#datepicker');
        this.dropDownDate = page.locator('#txtDate');
        this.monthLoc = page.locator(".ui-datepicker-month");
        this.yearLoc = page.locator(".ui-datepicker-year");
        this.dateTable = page.locator(".ui-datepicker-calendar td");

    }

    async fillInputDate(){
        await this.inputDate.fill('12/19/1990');
    }

    async fillDropDownDateByText(){
        await this.dropDownDate.click();
        await this.yearLoc.click();
        const availableyears : string[] = await this.yearLoc.locator('option').allInnerTexts();
        const selectedYear : string = randomDataUtil.getRandomValue(availableyears)??"";
        if(selectedYear){
            await this.yearLoc.selectOption(selectedYear);
        }
        await this.monthLoc.click();
        const availableMonths : string[] = await this.monthLoc.locator('option').allInnerTexts();
        const selectedMonth : string = randomDataUtil.getRandomValue(availableMonths)??"";
        if(availableMonths){
            await this.monthLoc.selectOption(selectedMonth);
        }  

        const availableDates :Locator[]= await this.dateTable.all();
        await randomDataUtil.getRandomValue(availableDates)?.click();

    }

    async fillDropDownDateByValue(){
        await this.dropDownDate.click();
        await this.yearLoc.click();
        await this.yearLoc.selectOption({value:"2018"});
        await this.monthLoc.click();
        await this.monthLoc.selectOption({value:"4"});
        const availableDates :Locator[]= await this.dateTable.all();
        await randomDataUtil.getRandomValue(availableDates)?.click();
        
    }
    async fillDropDownDateByLabel(){
        await this.dropDownDate.click();
        await this.yearLoc.click();
        await this.yearLoc.selectOption({label:"2030"});
        await this.monthLoc.click();
        await this.monthLoc.selectOption({label:"Dec"});
        const availableDates :Locator[]= await this.dateTable.all();
        await randomDataUtil.getRandomValue(availableDates)?.click();
        
    }
    async fillDropDownDateByIndex(){
        await this.dropDownDate.click();
        await this.yearLoc.click();
        await this.yearLoc.selectOption({index:10});
        await this.monthLoc.click();
        await this.monthLoc.selectOption({index:10});
        const availableDates :Locator[]= await this.dateTable.all();
        await randomDataUtil.getRandomValue(availableDates)?.click();
        
    }
}
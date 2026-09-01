import { Locator, Page } from "@playwright/test";
import { randomDataUtil } from "../utils/randomDataGenerator";
import { DataEntryLocators } from "../Locators/DataEntryFormLocators";


export class DataEntryForm{
    private readonly page : Page;
    readonly locators;

    constructor(page : Page){
        this.page = page;
        this.locators = DataEntryLocators(page);
    }

    async fillDataEntryForm(){
        await this.locators.name.fill(randomDataUtil.getFullName());
        await this.locators.email.fill(randomDataUtil.getEmail());
        await this.locators.phone.fill(randomDataUtil.getPhone());
        await this.locators.address.fill(randomDataUtil.getAddress());
    }

    async selectGender():Promise<boolean>{
        
        const genderTypes = await this.locators.genders.allTextContents();
        const gender = randomDataUtil.getRandomValue(genderTypes);
        const genderLocator = this.page.getByRole('radio',{name:gender, exact:true});

        await genderLocator.click();
        return genderLocator.isChecked();

    }

    async selectDay(){
        let days = await this.locators.days.allTextContents();
        let selectDays = randomDataUtil.getRandomValues(days) ?? [];
        for(let day of selectDays){
            await this.page.getByRole('checkbox', { name:day }).check();
        }

    }

    async selectCountry(){
        
        const availableCountries = (await this.locators.country.locator('option').allInnerTexts()).map(text=>text.trim());
        
        const selectCountry = randomDataUtil.getRandomValue(availableCountries)??"";
        
        if(selectCountry){
            await this.locators.country.selectOption(selectCountry);
        }
    }

}
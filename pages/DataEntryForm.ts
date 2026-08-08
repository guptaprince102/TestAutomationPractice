import { Locator, Page } from "@playwright/test";
import { randomDataUtil } from "../utils/randomDataGenerator";


export class DataEntryForm{
    private readonly page : Page;
    readonly name : Locator;
    readonly email : Locator;
    readonly phone : Locator;
    readonly address : Locator;
    private readonly genders : Locator;
    private readonly days : Locator;
    private readonly country : Locator;


    constructor(page : Page){
        this.page = page;
        this.name = page.getByRole("textbox",{name:'Name'});
        this.email = page.getByRole("textbox",{name:'EMail'});
        this.phone = page.getByRole("textbox",{name:'Phone'});
        this.address = page.getByRole('textbox',{name:'Address:'});
        this.genders = page.locator('input[name="gender"]+label');
        this.days = page.locator('input.form-check-input[type="checkbox"]+label');
        this.country = page.locator('#country');
    }

    async fillDataEntryForm(){
        await this.name.fill(randomDataUtil.getFullName());
        await this.email.fill(randomDataUtil.getEmail());
        await this.phone.fill(randomDataUtil.getPhone());
        await this.address.fill(randomDataUtil.getAddress());
    }

    async selectGender():Promise<boolean>{
        
        const genderTypes = await this.genders.allTextContents();
        const gender = randomDataUtil.getRandomValue(genderTypes);
        const genderLocator = this.page.getByRole('radio',{name:gender, exact:true});

        await genderLocator.click();
        return genderLocator.isChecked();

    }

    async selectDay(){
        let days = await this.days.allTextContents();
        let selectDays = randomDataUtil.getRandomValues(days) ?? [];
        for(let day of selectDays){
            await this.page.getByRole('checkbox', { name:day }).check();
        }

    }

    async selectCountry(){
        
        const availableCountries = (await this.country.locator('option').allTextContents()).map(text=>text.trim());
        
        const selectCountry = randomDataUtil.getRandomValue(availableCountries)??"";
        
        if(selectCountry){
            await this.country.selectOption(selectCountry);
        }
    }

}
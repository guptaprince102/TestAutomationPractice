import { Page, Locator } from "@playwright/test";
import { staticWebTableLocators } from "../Locators/StaticWebTableLocators";


export class StaticWebTable{

    private readonly locators;


    constructor(page:Page){
        this.locators = staticWebTableLocators(page);
    }

    async getRowCount():Promise<number>{
        return await this.locators.rowLoc.count();
        // return (await (this.rowLoc.all())).length;
    }

    async getColumnCount():Promise<number>{
       
        return await this.locators.tableHeadersLoc.count();
    }

    async getColumnDetails():Promise<boolean>{

        const rows : Locator[] = await this.locators.rowLoc.all();
        let bookCount = 0;
        for(const row of rows.slice(1)){
            const authorLoc : string =  await row.locator('td').nth(1).innerText();
            if(authorLoc=== "Mukesh"){
               
                bookCount += 1;
            }
        }
        return bookCount===2;
    }

}
import { Page, Locator } from "@playwright/test";
import { dynamicWebTableLocators } from "../Locators/DynamicWebTableLocators";

export class DyamicWebTable{
    readonly locators;


    constructor(page:Page){
        this.locators = dynamicWebTableLocators(page);

    }

    async getDetails(browser : string, data:string):Promise<string>{
        
        //converting inputs to lowercases
        const inputBrowser = browser.trim().toLowerCase();
        const inputData = data.trim().toLowerCase();
        
        //get the Header's position in form of Map<string, number>
        const headersOutput = new Map<string, number>();

        const headers = await this.locators.tableHeadLoc.locator('th').all();

        for (let index = 0; index < headers.length; index++) {
            const headerText = (await headers[index].innerText()).trim().toLowerCase();
            headersOutput.set(headerText, index);
        }

        let dataPosition=0;     //init data position 

        //loop through the keys(headers) of the headers Map
        for(const key of headersOutput.keys()){
            
            //condition to check if the input data is included in the Map
            if(key.trim().toLowerCase().includes(inputData)){
                dataPosition = headersOutput.get(key)??0; //it gives the data index in the table
                break;
            }
        }
        let fetchedData = '';   //init the data value

        //storing the rows locator in an array
        const rows : Locator[] = await this.locators.tableRowLoc.locator('tr').all();
        
        //looping through the rows
        for(const row of rows){
            //storing the output browsers from the 0th position in lowercase
            let outputBrowser = (await row.locator('td').nth(0).innerText()).trim().toLowerCase();
            
            //condition to check if input browser is same as output browser
            if(outputBrowser.includes(inputBrowser)){
                //storing the data of the browser from the position fetched from the Map
                fetchedData = await row.locator('td').nth(dataPosition).innerText();
                break;
            }
        }
        
        return fetchedData;
    }
}
import { Page, Locator } from "@playwright/test";

export class DyamicWebTable{
    private readonly page : Page;
    private readonly tableLoc : Locator;
    private readonly tableHeadLoc : Locator;
    private readonly tableRowLoc : Locator;
    readonly chromeCPU : Locator;
    readonly firefoxMemory : Locator;
    readonly chromeNetwork : Locator;
    readonly firefoxDisk : Locator;


    constructor(page:Page){

        this.page = page;
        this.tableLoc = page.locator('#taskTable');
        this.tableHeadLoc = this.tableLoc.locator('#headers');
        this.tableRowLoc = this.tableLoc.locator('#rows');
        this.chromeCPU = page.locator('.chrome-cpu');
        this.firefoxMemory = page.locator('.firefox-memory');
        this.chromeNetwork = page.locator('.chrome-network');
        this.firefoxDisk = page.locator('.firefox-disk');

    }

    async getDetails(browser : string, data:string):Promise<string>{
        
        //converting inputs to lowercases
        const inputBrowser = browser.trim().toLowerCase();
        const inputData = data.trim().toLowerCase();
        
        //get the Header's position in form of Map<string, number>
        const headersOutput: Map<string, number> = await (async () => {

            const headers = new Map<string, number>();
            
            //storing all the headers in an array
            const headersArr = await this.tableHeadLoc.locator('th').all();
            let index = 0; //init index of the browser

            //loop through all the headers locator
            for (const header of headersArr) {
                //setting all the headers and index in the Map
                headers.set(await header.innerText(), index);
                index++; //incrementing the index
            }

            return headers;
        })();

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
        const rows : Locator[] = await this.tableRowLoc.locator('tr').all();
        
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
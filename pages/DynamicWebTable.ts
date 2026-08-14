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
    async getHeadLocations():Promise<Map<string, number>>{
        const headers = new Map<string, number>();
        const headersArr = await this.tableHeadLoc.locator('th').all();
        let index = 0;
        for(const header of headersArr){
            headers.set(await header.innerText(), index);
            index++;
        }

        return headers;
    }

    async getDetails(browser : string, data:string):Promise<string>{
        const inputBrowser = browser.trim().toLowerCase();
        const inputData = data.trim().toLowerCase();
        const headers = await this.getHeadLocations();
        let dataPosition=0;
        for(const key of headers.keys()){
            if(key.trim().toLowerCase().includes(inputData)){
                dataPosition = headers.get(key)??0; 
                break;
            }
        }
        let fetchedData = '';
        const rows = await this.tableRowLoc.locator('tr').all();
        for(const row of rows){
            let outputBrowser = (await row.locator('td').nth(0).innerText()).trim().toLowerCase();
            if(outputBrowser.includes(inputBrowser)){
               fetchedData = await row.locator('td').nth(dataPosition).innerText();
               break;
            }
        }
        console.log('fetched Data',fetchedData);
        
        return fetchedData;
    }




}
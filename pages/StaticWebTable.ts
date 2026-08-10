import { Page, Locator } from "@playwright/test";


export class StaticWebTable{

    private readonly page : Page;
    private readonly tableLoc : Locator;
    private readonly rowLoc : Locator;
    private readonly tableHeadersLoc : Locator;
    private readonly columnLoc : Locator;


    constructor(page:Page){
        this.page = page;
        this.tableLoc = page.locator('table[name="BookTable"]');
        this.rowLoc = this.tableLoc.locator('tr');
        this.tableHeadersLoc = this.rowLoc.locator('th');
        this.columnLoc = this.rowLoc.locator('td');
    }

    async getRowCount():Promise<number>{
        return await this.rowLoc.count();
        // return (await (this.rowLoc.all())).length;
    }

    async getColumnCount():Promise<number>{
       
        return await this.tableHeadersLoc.count();
    }

    async getColumnDetails():Promise<boolean>{

        const rows : Locator[] = await this.rowLoc.all();
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
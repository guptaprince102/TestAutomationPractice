import { Page, Locator } from "@playwright/test";

export class PaginationTable{
    private readonly page : Page;
    private readonly pagination : Locator;
    private readonly productTable : Locator;

    constructor(page : Page){
        this.page = page;
        this.pagination = page.locator('#pagination');
        this.productTable = page.locator('#productTable tbody');

    }
    async checkCheckboxes():Promise<void> {
        //get all the pages links in an array
        const pages : Locator[] = await this.pagination.getByRole('listitem').all();
        
        //loop through each page and clicking on each page link
        for(let eachPage of pages){
            await eachPage.click();
            
            //store all the rows locators in an array
            const rows = await this.productTable.locator('tr').all();
            
            for(const row of rows){
                
                // await row.waitFor();
                //get the product name from the second column element
                const productName = await row.locator('td').nth(1).innerText();

                //get the product price from the third column element
                const productPrice = await row.locator('td').nth(2).innerText();

                //printing product details
                // console.log(`Price of ${productName} is `,productPrice );

                //clicking on each checkbox
                // await row.locator('td').nth(3).locator('input').check();
                if(productName.toLowerCase().includes('router'))
                    await row.locator('td input').check();
                
            }
        }
    
    }
}


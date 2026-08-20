import { Page, Locator } from "@playwright/test";

export class InfiniteScroll{

    private readonly page : Page;
    private readonly booksLoc : Locator;


    constructor(page : Page){
        this.page = page;
        this.booksLoc = page.locator('#productsDiv h3');
    }

    async getBooksCount():Promise<number>{
        
        let booksTitle =[]; 
        let intialHeight = 0;
        while(true){
            const finalHeight = await this.page.evaluate(()=>{
                return document.body.scrollHeight;
            })
            await this.page.evaluate(()=>{
                window.scrollTo(0, document.body.scrollHeight);
            })
            await this.page.waitForTimeout(1000);
            if(intialHeight === finalHeight){
                booksTitle = await this.booksLoc.allInnerTexts();
                break;
            }
            intialHeight = finalHeight;
        }
        return booksTitle.length;
    }
}
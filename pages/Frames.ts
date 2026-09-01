import { Page, Locator, Frame, FrameLocator, expect } from "@playwright/test";
import { framesLocators } from "../Locators/FramesLocators"

export class Frames{

    private readonly page : Page;
    // readonly frame1 : Frame | null;
    // readonly frame2 : Frame | null;
    // readonly frame3 : FrameLocator | null;
    private readonly locators;


    constructor(page : Page){
        this.page = page;
        this.locators = framesLocators(page);
    }

    async doFrames(){
        const frameCount = this.page.frames().length;
        console.log("Number of Frames", frameCount);
        const frameA = this.locators.frame1?.locator('body');
        if(frameA){
            console.log('Inside Frame1 Block');
            
            await frameA.locator('input[name="mytext1"]').fill("This is Frame1 by Prince");
            await expect(frameA.locator('input[name="mytext1"]')).toBeVisible();
            await this.page.waitForTimeout(2000);
            await this.locators.frame1?.fill('input[name:"mytext1"]', 'Input 2 This is Frame1 by Prince');
            await this.page.waitForTimeout(2000);
            console.log(this.locators.frame1?.childFrames());
        }
        
        const frameB = this.locators.frame2;
        if(frameB){
            console.log('Inside Frame2 Block');
            await frameB.getByRole('textbox', {name:'mytext2'}).fill('this is Frame2 by Prince');
            await expect(frameB.locator('input[name="mytext2"]')).toBeVisible();
            await this.page.waitForTimeout(2000);
            console.log(this.locators.frame2?.childFrames());
        }

        const frameC = this.locators.frame3;
        if(frameC){
            await expect(frameC.locator('input[name="mytext3"]')).toBeVisible();
            await frameC.locator('[name="mytext3"]').fill('this is Frame3 by Prince');
            await this.page.waitForTimeout(2000);
        }
    }

}
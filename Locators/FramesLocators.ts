import { Page } from "@playwright/test";

export const framesLocators = (page : Page)=>({
    frame1 : page.frame({url:"https://ui.vision/demo/webtest/frames/frame_1"}),
    frame2 : page.frame({url:'https://ui.vision/demo/webtest/frames/frame_2'}),
    frame3 : page.frameLocator('[src="frame_3.html"]')
});
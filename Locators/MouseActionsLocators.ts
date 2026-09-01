import { Page } from "@playwright/test";

export const mouseActionLocators = (page : Page)=>({
    pointMe : page.getByText('Point Me', {exact : true}),
    field1 : page.locator('#field1'),
    field2 : page.locator('#field2'),
    copyBtn : page.getByRole('button',{name:'Copy Text'}),
    dragBtn : page.locator('#draggable'),
    dropBtn : page.locator('#droppable')
})
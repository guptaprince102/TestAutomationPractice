import { Page } from "@playwright/test";

export const datePickerLocators = (page:Page)=>({
    inputDate : page.locator('#datepicker'),
    dropDownDate : page.locator('#txtDate'),
    monthLoc : page.locator(".ui-datepicker-month"),
    yearLoc : page.locator(".ui-datepicker-year"),
    dateTable : page.locator(".ui-datepicker-calendar td:not(.ui-datepicker-other-month):not(.ui-datepicker-unselectable)")

});
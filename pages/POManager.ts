import { Page } from "@playwright/test";
import { HomePage } from "./HomePage";
import { DataEntryForm } from "./DataEntryForm";
import { DatePickers } from "./DatePickers";

export class POManager {
    private readonly page: Page
    private readonly homePage: HomePage
    private readonly dataEntryForm: DataEntryForm
    private readonly datePicker: DatePickers

    constructor(page: Page) {
        this.page = page; 
        this.homePage = new HomePage(page);
        this.dataEntryForm = new DataEntryForm(page);
        this.datePicker = new DatePickers(page);
    }

    getHomePage() {
        return this.homePage;
    }
    getDataEntryFormPage() {
        return this.dataEntryForm;
    }
    getDatePickerPage() {
        return this.datePicker;
    }
}
import { Locator, Page } from "@playwright/test";
import testdata from "../datafolder/somedata.json";

export class somepage{
        private page:Page
        private name:Locator
    constructor(page:Page)
    {
        this.page=page;
        this.name=page.locator("")
    }

    registrationdata(data:any)
    {
            this.name.fill(testdata[0].name)
            
    }
}
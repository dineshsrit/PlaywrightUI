import { Page, Locator, expect } from "@playwright/test";
import womenPage from "./Womespage";


export class shopPage{

    page:Page
    Shop:Locator

    constructor(page:Page)
    {
        this.page=page
        this.Shop=page.getByRole('link', {name:'Sign out'})
    }


   async isinShop(): Promise<womenPage>
    {
       await expect(this.Shop).toBeVisible()
       return new womenPage(this.page)
    }


}

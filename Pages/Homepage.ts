import { Locator, Page } from "@playwright/test";
import { loginPage } from "./Loginpage";

export class homePage
{
    page:Page
    sigin:Locator;

    constructor(page:Page)
    {
        this.page=page;
        this.sigin=page.locator("//div[@class='header_user_info']//a")

    }

    async goto()
    {
        console.log("navigation started")
        await this.page.goto("/")
        //await this.page.waitForLoadState('domcontentloaded')
        console.log("navigation loaded")
    }

    async homepage():Promise<loginPage>
 
    {
        await this.sigin.click()
        console.log("login page clicked")
        return new loginPage(this.page)
    }
}

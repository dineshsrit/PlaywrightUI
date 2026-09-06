import { expect, Locator, Page } from "@playwright/test"
import { user } from '../datafolder/dateinterface';
import { shopPage } from "./ShopPage";

export class loginPage{
    page:Page
  
    emailaddress:Locator
    password:Locator
    sigin:Locator

    constructor(page:Page)
    {
        this.page=page;
        this.emailaddress=page.locator("input#email")
        this.password=page.locator("input#passwd")
        this.sigin=page.locator("button#SubmitLogin")
    }

//    async isLogin(){
        
//         await expect(this.login).toBeVisible()
//         //let visible= this.login.isVisible()
//         //expect(visible).toBeTruthy()
//     }

 async  doLogin(username:string, password:string)
    {

       
      await this.emailaddress.fill(username)
      await this.password.fill(password)


    
        
    }

   async signInClick():Promise<shopPage>{
        await this.sigin.click()
        await this.page.waitForURL("my-account")
         return new shopPage(this.page)
    }

}
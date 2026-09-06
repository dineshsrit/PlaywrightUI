import {test} from '@playwright/test'
import { homePage } from "../../Pages/Homepage";
import { loginPage } from '../../Pages/Loginpage';
import { addressinfodata, userinfodata } from '../../datafolder/userinfodata';
import { shopPage } from '../../Pages/ShopPage';
import womenPage from '../../Pages/Womespage';




test("Login test", async({page})=>
{
    let home=new homePage(page)
    await home.goto()
    let login=await home.homepage()
    await login.doLogin(userinfodata.username,userinfodata.password)
    let shop=await login.signInClick()
    //await page.pause()
   let women= await shop.isinShop();
   await women.womenClick()
   await women.dressHover()
   await women.qtyandstockavailable("2","L")
   await women.addtoCart()
   await women.isProductAdded()
    let checkputpom=await women.proceedtoCheckOut()
   await checkputpom.isStockAvailable()
   await  checkputpom.proceedtoCheck()
   await checkputpom.isAddressAvailable()
   await  checkputpom.agreedShipping()
   //await checkputpom.isPaymentAvailable()


})
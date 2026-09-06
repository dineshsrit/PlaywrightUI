import { expect, Page } from '@playwright/test';
import{test} from '@playwright/test'
import { homePage } from '../../Pages/Homepage';

import { userinfodata } from "../../datafolder/userinfodata";


test('test the login', async({page})=>
{
    const h1=new homePage(page)
    await h1.goto()
   const l1=await h1.homepage()
    await l1.isLogin()
    
    await l1.doLogin(userinfodata.username, userinfodata.password)
    //await page.pause()
    let s1=await l1.signInClick();
  
   await s1.isinShop()
   
})


import { test as base, Page } from '@playwright/test'
import page from '@playwright/test';

type loginfixture={

    loggedPage:Page;
}

 export const test=  base.extend<loginfixture>({

    loggedPage: async({page}, use)=>
    {
    await page.goto("https://automationpractice.techwithjatin.com/login?back=my-account")

    await page.locator("#email").fill("dinesh.m477@gmail.com")
    await page.locator("#passwd").fill("Danny@1234")
    await page.getByRole('button', {name:'Sign in'}).click()
    await use(page)
    }
    

   })

  export { expect } from '@playwright/test';
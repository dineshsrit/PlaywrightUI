import test, { BrowserContext, expect } from "@playwright/test";
import { Page } from '@playwright/test';

//import {test, expect} from '../../fixture/loginfixture'



 let browsers:BrowserContext;
 let page:Page;


test.beforeAll(async({browser})=>{

  browsers= await browser.newContext()
  page=await browsers.newPage()

     await page.goto("https://automationpractice.techwithjatin.com/login?back=my-account")

    await page.locator("#email").fill("dinesh.m477@gmail.com")
    await page.locator("#passwd").fill("Danny@1234")
    await page.getByRole('button', {name:'Sign in'}).click()
})

test.afterAll(async ()=>{
    await page.getByRole('link', {name:'Sign out'}).click()
   await browsers.close()
})


// test.beforeEach(async ({page})=>
// {
//      await page.goto("https://automationpractice.techwithjatin.com/login?back=my-account")

//     await page.locator("#email").fill("dinesh.m477@gmail.com")
//     await page.locator("#passwd").fill("Danny@1234")
//     await page.getByRole('button', {name:'Sign in'}).click()
// })


// test.afterEach(async({page})=>
// {
//      await page.getByRole('link', {name:'Sign out'}).click()
// })

test('validate the login', async ({page})=>
{
   

    await expect(page.getByText('Order history and details')).toContainText('Order')
    await page.getByText('Order history and details').click()
    await expect(page.getByText('You have not placed any orders.')).toContainText('You have not')
    console.log(await page.getByText('You have not placed any orders.').innerText())

   

} )


test('validate tshirs', async ({page})=>
{
   

    await expect(page.getByRole('link', {name:'T-shirts'})).toContainText('T-shirts')
    await page.getByRole('link', {name:'T-shirts'}).click()

    await expect(page.locator("//p[normalize-space()='Catalog']")).toContainText('Catalog')

    console.log(await page.locator("//p[normalize-space()='Catalog']").innerText())

   
})
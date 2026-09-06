import {test} from '@playwright/test'

test('mousekeykoard', async({page})=>
{
   await page.goto("https://demo.evershop.io/account/login")
   let email= page.locator("//input[@id='field-email']")
   await email.click()
   await page.keyboard.type('dinesh@gmail.com')
    let signin=await page.getByText('Welcome Back!', {exact:true}).innerText()
    await email.click()
    await page.keyboard.type(signin)
   await page.pause()
})
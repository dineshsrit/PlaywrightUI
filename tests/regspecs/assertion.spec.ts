

import {test, expect} from '@playwright/test';
import { pathToFileURL } from 'url';


test('assertion', async({page})=>
{
    await page.goto('https://www.testmuai.com/selenium-playground/simple-form-demo/')

    const message=await page.getByPlaceholder("Please enter your Message");
    await expect.soft(message).toBeEditable()

    const checkvalue=await page.locator("#showInput");
    await expect(checkvalue).toBeEnabled()


   await message.fill('testing')

   await checkvalue.click()

  
  // await page.locator("#message").innerText()

    await page.locator("#message").waitFor({state:'visible'})
   await expect(page.locator("#message")).toHaveText('testing')

    //await page.waitForTimeout(2000);
})


test('no message', async({page})=>
{
     await page.goto('https://www.testmuai.com/selenium-playground/simple-form-demo/')

    const message=await page.getByPlaceholder("Please enter your Message");
    await expect.soft(message).toBeEditable()

    const checkvalue=await page.locator("#showInput");
    await expect(checkvalue).toBeEnabled()

   const blank= await page.locator("#message").innerText()


   await expect(await page.locator("#message")).toBeEmpty()

   console.log("the text is", blank)
})

test('no number', async({page})=>
{
    await page.goto("https://www.testmuai.com/selenium-playground/simple-form-demo/")

    //await page.pause()

   console.log( await page.getByText('Get Sum').isEnabled())
    console.log( await page.getByText('Get Sum').isVisible())

    await page.getByText('Get Sum').waitFor({state:'attached'})
    await page.getByText('Get Sum').click();

   await page.locator("#addmessage").waitFor({state:'visible'})
   // await page.waitForLoadState()

   
    await expect(page.locator("#addmessage")).toContainText('not a number')



})
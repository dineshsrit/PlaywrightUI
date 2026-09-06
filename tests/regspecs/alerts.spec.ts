import test, { expect } from '@playwright/test';
import * as path from 'path';


test('file uplod', async({page})=>
{
   

  await page.on('dialog', dialog=>{
        dialog.accept()
   })

   await page.goto("https://www.testmuai.com/selenium-playground/javascript-alert-box-demo/")

   await page.waitForTimeout(2000)

   await page.locator("//*[contains(normalize-space(),'Confirm box:')]/button").click();


  const expected=await page.locator("//p[@id='confirm-demo']").textContent();

   await expect(expected).toContain("You pressed !")

  console.log(expected)
   await page.pause()
});
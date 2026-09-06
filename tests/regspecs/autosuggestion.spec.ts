import test, { expect } from '@playwright/test';

test('autosuggestion', async({page})=>
{
    await page.goto('https://www.google.com/')
    await page.locator("//textarea[@name='q']").fill('playwright')
    await page.waitForSelector("//div[@role='presentation']");
   const list= page.locator("//div[@role='presentation']/span");
   console.log(await list.count())
   for(let i=0;i<await list.count();i++)
   {
    const text= await list.nth(i).textContent();
    console.log('the listed text', text)
       if(text=== 'playwright java')
       {
           await list.nth(i).click()
           break;
       }
   }

   await page.pause();
})
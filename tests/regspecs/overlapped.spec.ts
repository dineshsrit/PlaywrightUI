
import page from '@playwright/test'
import test from '@playwright/test'

test('overlapped', async({page})=>
{
    await page.goto("https://www.testmuai.com/selenium-playground/overlapped-element/");

  

    await page.getByPlaceholder('Subject').fill('placeholder');

      await page.waitForTimeout(1000);

})
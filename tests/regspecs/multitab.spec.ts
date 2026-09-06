
import test from "@playwright/test";

test('multitab', async({page, context})=>
{
    
  const newpage=  context.waitForEvent('page')

  await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

  await page.waitForLoadState('domcontentloaded');

  await page.getByRole('link', {name:"OrangeHRM, Inc"}).click()

  const newpagepromise= await newpage;

  await newpagepromise.waitForLoadState('load');
  console.log(await newpagepromise.title())
  await newpagepromise.close()
  await  page.bringToFront()
  console.log(await page.title())


})
import test, { expect } from '@playwright/test';

test('check box', async({page})=>
{
    await page.goto("https://www.testmuai.com/selenium-playground/checkbox-demo/")

   await page.waitForTimeout(2000)

   const checkbox=await page.locator("//h2[contains(normalize-space(),'Single Checkbox Demo')]/following-sibling::label");
   await checkbox.check()

   console.log("is it checked", await checkbox.isChecked())


   
   await checkbox.uncheck()

    await page.getByRole('button', {name:'Check All'}).click();

    const alloptions=page.locator("//h2[text()='Multiple Checkbox Demo']/following-sibling::div//input[contains(@name,option)]")
    
    console.log("the no of options", await alloptions.count())



    const options = page.getByRole('checkbox', {
    name: /^Option [1-4]$/
});


console.log(await options.count());

for (let i = 0; i < await options.count(); i++) {
    console.log(
        await options.nth(i).getAttribute('name'),
        await options.nth(i).isChecked()
    );

    const text=await options.nth(i).getAttribute('name');

    if(text === "option2")
    {
        await options.nth(i).uncheck()
        break;
    }
    
}

    // const options=await alloptions.count();
    // for(let i=1;i<=options;i++)
    // {
    //   const text=  await page.locator(`//h2[text()='Multiple Checkbox Demo']/following-sibling::div//input[contains(@name,'option${i}')]`).textContent()
    //   console.log(text)
    // }
   await page.pause()
})
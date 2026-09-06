
import {test} from '@playwright/test'


test('dropdowntest', async({page})=>
{
    
    await page.goto("https://demo.evershop.io/account/login")
    await page.locator("//input[@id='field-email']").fill("dineshm1@yopmail.com");
    await page.locator("//input[@id='field-password']").fill("Danny@1234");
    await page.locator("//button[text()='Sign In']").click();

    await page.goto("https://demo.evershop.io/cart")

    let tableheader= page.locator("//thead[@data-slot='table-header']//tr//th//span");
    console.log(await tableheader.count())
    let headerproduct=await tableheader.all()
    let productheader:String[]=[];
    for(const header of headerproduct )
    {
      let product=await header.innerText()
        productheader.push(product )
    }
    
    console.log(productheader)


    //await page.locator("//button[@id='field-shippingAddress.country']").click()

    //await page.getByText('Vietnam',{exact:true}).click()
    //await page.pause()
})

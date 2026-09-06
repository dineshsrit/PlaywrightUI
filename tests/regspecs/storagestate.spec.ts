
import {test, expect } from "@playwright/test"



test('validate the login', async ({page})=>
{
   
    await page.goto('/my-account')
    await expect(page.getByText('Order history and details')).toContainText('Order')
    await page.getByText('Order history and details').click()
    await expect(page.getByText('You have not placed any orders.')).toContainText('You have not')
    console.log(await page.getByText('You have not placed any orders.').innerText())

   

} )

test('validate tshirs', async ({page})=>
{
   
     await page.goto('/my-account')
    await expect(page.getByRole('link', {name:'T-shirts'})).toContainText('T-shirts')
    await page.getByRole('link', {name:'T-shirts'}).click()

    await expect(page.locator("//p[normalize-space()='Catalog']")).toContainText('Catalog')

    console.log(await page.locator("//p[normalize-space()='Catalog']").innerText())

   
})

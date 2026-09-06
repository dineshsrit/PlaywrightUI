import test, { expect } from "@playwright/test";
import { log } from "console";


test('table', async({page})=>
{

    await page.goto("https://www.testmuai.com/selenium-playground/table-sort-search-demo/")

   const headercount= await page.locator('thead tr th').count()

  console.log( await page.locator('thead tr th').nth(0).textContent())

   for(let i=0;i<headercount;i++ )
   {
        console.log(await page.locator('thead tr th').nth(i).textContent())
   }
    console.log("the no of header is", headercount)

    const rowcount=await page.locator('tbody tr').count()

    console.log("the no of rows", +rowcount)

    //console.log("the name is",  await page.locator('tbody').locator('tr').nth(3).locator('td').nth(2).textContent())

    // for(let i=0;i<rowcount;i++)
    // {
    //     console.log("the name is",  await page.locator('tbody').locator('tr').nth(i).locator('td').nth(2).textContent())
    // }

  
//     await page.locator("//input[@type='search']").fill('nelson')


//    console.log(await page.locator('tbody tr').locator('td').nth(0).textContent())

//    expect.soft(await page.locator('tbody tr').locator('td').nth(0).textContent()).toContain('nelson')

   await page.locator("//input[@type='search']").fill('test')

    expect( await page.locator('tbody tr td').textContent()).toContain('No')
}
)
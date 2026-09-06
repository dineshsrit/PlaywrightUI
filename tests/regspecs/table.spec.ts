

import test, { expect } from '@playwright/test';

test("table demo", async({page})=>
{

    await page.goto("https://www.testmuai.com/selenium-playground/table-search-filter-demo/");

    await page.waitForTimeout(1000);

   const rowno=await page.locator("//table[@id='task-table']/tbody//tr").count();

   console.log(rowno)

   //const task= await page.locator("//table[@id='task-table']/tbody//tr[1]/td[2]").textContent();

   //console.log(task)
   for(let i=1;i<=rowno;i++)
   {
    //console.log("the value of i", i);
    const task= await page.locator(`//table[@id='task-table']/tbody//tr[${i}]/td[2]`).textContent()
    await expect(task).toEqual('Development')
    
    console.log(task)
    break;

   }
})
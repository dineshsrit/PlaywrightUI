import test from '@playwright/test'


test("testing the calendar", async({page})=>
{
    
    await page.goto("https://qhisportalppr.moph.gov.qa/payer/#/ic/his")
    await page.locator("//input[@formcontrolname='startDate']").click()
    let row=await page.locator("//table[@class='mat-calendar-table']/tbody/tr")
     const header = await page.locator(".mat-calendar-period-button").textContent()
     console.log(header)
 
})
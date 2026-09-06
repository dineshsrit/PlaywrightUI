
import {test} from '@playwright/test'

test("locatorsm", async({page})=>{


    await page.goto("https://demo.evershop.io/account/login");
   let l1= page.locator("input")
   console.log(await l1.count()) // count function returns the no of elements returned 
  let listof=await l1.all() // returns the list of webelements matches the locator
  for(const e of listof)
  {
    //await page.pause()
    await e.fill("dinesh")
  }

  //locator.waitfor({state:visible}) --- can be used as assertion before performing any action
  //on the page

  await l1.nth(0).fill("jackpandi") // nth based on the index locator is identified and action is performed
  await l1.first().fill("surapandi")// find the first matching locator 
  await l1.last().fill("sura") // finds the last matching locator


  let l2=page.locator("//input[@id='field-email']")
  await l2.fill("dinesh")
  console.log("inner text", await l2.getAttribute("value"))
  console.log("inner HTML", await l2.innerHTML())
  console.log("is enabled", await l2.isEnabled())
  console.log("is visible", await l2.isVisible())

  //check () -- used to check the checkbox and radio button
  //uncheck() -- used to uncheck the checkbox and radion button
  

})
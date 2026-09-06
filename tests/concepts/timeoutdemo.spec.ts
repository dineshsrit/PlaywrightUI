

//globaltime out -- when the global time out is applied, it is applied to whole suite, it 
//is configured in the playwright.config.ts file as globaltimeout:time in ms, by default the timeout is 0

//timeout -- when this timeout is applicable in the playwright.config.ts, then it is applicable
//at the test level, by default it is 0

//navigation time out -- when the navigation timeout applied in the playwright.config.ts, it is applicable
//to the all test which is having the navigation

//test.settimeout(10000) --- this timeout is applicable at the test level

//navigationtimeout at the test level
//page.goto("https://www.facebook.com", {timeout:10000})
//navigation timeout can be kept at the playwright.config.ts under use object 
// use { navigationtimeout:10000}

//by default the timeout for each test is 30 seconds

//this 30 seconds timeout for each test, includes, beforeeach, function, Fixtures loading
// if the test does not complete within this time, timeout exception will be thrown

//when the any action is performed like click, fill, and other activities, autowaiting is performed by the
//playwright, where each action it checks for visible, Stable, Receives Event, Enabled, Editable

//when the locator is idenfied, it checks for the state, which detached, attached, visible, hidden

//page.setDefaultimeout(), this sets time for each action to be performed, if not performed, timeout
//error will be thrown, and it can be set at the Use{actiontimeout:10000}



import {test} from '@playwright/test'

test("test timeout", async({page})=>
{
    //test.setTimeout(35000)
   // page.setDefaultTimeout(10)
    await page.goto("https://demo.evershop.io/account/login", {timeout:25000, waitUntil:'load'})
    await page.locator("//input[@id='field-email']").fill("dinesh")
   await page.locator("//input[@id='field-password']").waitFor({state:"visible"})

})


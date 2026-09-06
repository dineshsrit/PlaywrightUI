

import {test} from '@playwright/test'

//test.use({baseURL:"https://www.instagram.com/"})

test("ignore the test", async({page})=>
{
    await page.goto("https://www.instagram.com/")
})

test("sample test", async({page})=>{
    await page.goto("https://www.facebook.com")
})
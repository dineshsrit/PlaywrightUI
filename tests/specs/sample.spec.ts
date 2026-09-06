import test from "@playwright/test"

test("sample test", async({page})=>
{
    await page.goto("https://www.amazon.in/")
    let returns=await page.locator("//a[@id='nav-orders']/span").allInnerTexts()
    for(let r of returns)
    {
        console.log( r)
    }
})
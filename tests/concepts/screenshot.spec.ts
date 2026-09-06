
import {test} from '@playwright/test'

test('screenshot', async({page}, testinfo)=>
{

    await page.goto('https://demo.evershop.io/')

    let screen=await page.screenshot({fullPage:true})
    testinfo.attach('screenshot1', {
        body:screen,
        contentType:'image/png'
    })



})

test("screenshotelement", async({page}, testinfo)=>{
     await page.goto('https://playwright.dev/')

     let locator= page.getByText('Get starte', {exact:true})

    let promisebuffer=await locator.screenshot()

    testinfo.attach("elemetscreenshor",{
        body:promisebuffer,
        contentType:'image/png'
    })
})
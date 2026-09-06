
import {test} from '@playwright/test'

test('tabs', async({page})=>
{
   await page.goto("https://www.facebook.com")
   let browsercontext= page.context()
  let  p1=await browsercontext.newPage()
    let pages1= browsercontext.pages()
    console.log(pages1.length)
   await p1.goto("https://www.google.com")

    for(const p of pages1)
    {
        let title=await p.title()
        if(title.includes('Google'))
        {
            console.log("the title is ", title)
        }
    }

  await page.pause()
  

})
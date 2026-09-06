import {test} from '@playwright/test'


test("About the Browser", async({browser})=>
{


  let context= await browser.newContext();
   let mypage= await context.newPage();
  await mypage.goto("https://www.shapemyinterview.com/")
  
  let secondpage=await context.newPage();
  await secondpage.goto("https://www.udemy.com")
  await secondpage.close()

   let pagess= context.pages()
   console.log(pagess.length)
   for(const p of pagess)
   {
        console.log(p.isClosed())
        
   }

  console.log("the second page is closed" +secondpage.isClosed())
 let browsertype= browser.browserType()
 console.log(browsertype.name())

 
 console.log(browser.isConnected())

 console.log(browser.version())



})
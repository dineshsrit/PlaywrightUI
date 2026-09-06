import {test} from '@playwright/test'



//different ways to find the frame
//1. framelocator -- returns the frame object and using the frame object locate the elements using
//different locator strategies
//2. frame -- uses the frame with name or {'url':'which is the src or url'}
//3. frames -- returns an array of frames
test('iframes',async({page})=>
{
    await page.goto("https://demo.automationtesting.in/Frames.html")

   /*let framelocator= page.frameLocator("//iframe[@id='singleframe']")
  await framelocator.locator("//input[@type='text']").fill("testing")
  */
  // let frame= page.frame({url:'SingleFrame.html'})
   //only if the frame returns the frameobject, the locator is identified, if it is 
   //null the below code will not be executed
   /*
   if(frame)
   {
      await  frame.locator("//input[@type='text']").fill('testingframe')
   }
   */
/*
   let frames=page.frames()
   console.log(frames.length)
  await frames[1].locator("//input[@type='text']").fill("frameworkingtesig")
  */
 

  await page.locator("//a[text()='Iframe with in an Iframe']").click();
  let fames=page.frames();
  let framelocator1=page.frameLocator("//div[@id='Multiple']//iframe")
  let pagelocator=framelocator1.frameLocator("//div[@class='iframe-container']//iframe")
  await pagelocator.locator("//input[@type='text']").fill("nestedfarmwir")
  //let frame =framelocator1.mainFrame()
  let ttitle=await framelocator1.locator("//div[@class='iframe-container']//h5").innerText()
  console.log(ttitle)
  
  await page.pause()
})
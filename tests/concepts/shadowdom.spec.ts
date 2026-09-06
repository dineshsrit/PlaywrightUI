import {test} from '@playwright/test'

//first find the shadowhost
//get access to the shadowroot
//using the shadowroot, find the element
//page.locator("shadowhost>>>element to be interacted") -- it is called as piecering
//"Shadow DOM is a browser feature that encapsulates a component's HTML, CSS, and JavaScript, 
// preventing its internal structure and styles from affecting or being affected by the main DOM."

test('shadow dom', async({page})=>
{
    await page.goto("https://selectorshub.com/iframe-in-shadow-dom/")
    let shadowroot= page.locator("div#userName")

    let frames=page.frames()

    for(const f of frames)
    {
        let name=f.name();
        if(name.includes('pact1'))
        {
            f.locator('input#jex').fill("nested filling")
        }
        //console.log("the frame name is",f.name())
        //console.log("the frame url is", f.url())
    }

  //  console.log(frames.length)
   // await frames.at(0)?.locator('input#jex').fill("nested filling")
    /*
    let framelocat= shadowroot.frameLocator('iframe#pact1');
    await framelocat.locator('input#jex').fill("nested filling")
    await framelocat.locator('button#connect').click()
    let framelocat2=framelocat.frameLocator('iframe#pact3')
    await framelocat2.locator('input#glaf').fill("second iframe")
    await framelocat2.locator('button#close').click()
    let shadowroot2= page.locator('div#app2')
    await shadowroot2.locator('input#pizza').fill("second shadow dom")
    let shadowroot3= page.locator('div#concepts')
    //await shadowroot3.locator('input#training').fill("training the host")
    */
    await page.pause()
})
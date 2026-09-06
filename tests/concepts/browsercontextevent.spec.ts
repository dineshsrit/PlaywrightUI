
import { test, type Page } from '@playwright/test';

test.skip('page events', async({context})=>
{
    //the even is registered and trigged when the new page is created using the context
    context.on('page', async (p)=>
    {
       //await p.goto("https://www.google.com")
       console.log(p.isClosed())
       console.log(p.viewportSize())
       
       //let title=await p.title()
       //console.log(await p.title())
        console.log("page event is triggered")
        //context.close()
    });
    
    let p1= await context.newPage();
    await p1.goto("https://www.google.com")
    console.log(await p1.title())
    //await p1.pause()
    

});


test.skip('page event', async ({ context }) => {

  context.on('page', async (p) => {
    await p.goto('https://www.google.com');
    console.log(await p.title());
    console.log('page event triggered');
  });

  await context.newPage();

  //await context.waitForEvent('page');

  // Do other work here
});


test.skip("context close", async({context, browser})=>
{
  
        context.on("close", async({})=>
        {
            console.log("context is closed")
           
        })

      let pages= await context.newPage();
    await  pages.goto("https://www.google.com")
      await context.close()
     let context2=await browser.newContext();
    let page2= await context2.newPage()
   await page2.goto("https://www.facebook.com")

})

test.skip("console events", async({context})=>
{
    //consoleMessage Object is created, and based on page, the console can be displayed
    context.on("console", async(cm)=>{
        let page =cm.page()
        let title=await page?.title();
        if(title?.includes("YouTube"))
        {
        console.log(cm.text())
        console.log("console events are triggered")
        }
        
    })

    let page1= await context.newPage();
   await page1.goto("https://www.youtube.com")

})


test.skip("waitforevent", async({context})=>
{
//in case of waitforEvent, it is registered and triggered only once, when the promise resolved
// and it should be used after the event
  let cm=  context.waitForEvent("console")

 let p1= await context.newPage()
await p1.goto("https://www.youtube.com")
console.log((await cm).text())
let p2= await context.newPage();
await p2.goto("https://www.facebook.com")
console.log((await cm).text())

})


test.skip("pagelocators", async({page})=>
{
    await page.goto("https://demo.evershop.io/account/register")
   await page.locator("//input[@id='field-full_name']").fill("dineshm")
   await page.locator("//input[@id='field-email']").fill("dineshm1@yopmail.com")
   await page.locator("//input[@id='field-password']").fill("Danny@1234")
   await page.locator("//button[normalize-space()='Sign Up']").click()
})



test.skip('test', async ({ page }) => {
  await page.goto('https://demo.evershop.io/account/register');
  await page.getByRole('textbox', { name: 'Full Name *' }).click();
  await page.getByRole('textbox', { name: 'Full Name *' }).click();
  await page.getByRole('textbox', { name: 'Full Name *' }).fill('dineshkumars');
  await page.getByRole('textbox', { name: 'Full Name *' }).press('Tab');
  await page.getByRole('textbox', { name: 'Email *' }).fill('dineshkumarm3@yopmail.com');
  await page.getByRole('textbox', { name: 'Email *' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password *' }).fill('kumar@1234');
  await page.getByRole('textbox', { name: 'Password *' }).press('Tab');
  await page.getByRole('button', { name: 'Sign Up' }).click();
});


test.skip("locator stargites", async({page, context})=>
{
    
    await page.goto("https://qhisportalppr.moph.gov.qa/home/#/main");
    const promisepage=context.waitForEvent('page')
    await page.getByText('Healthcare Providers').click();
    const somepage= await promisepage;
    await somepage.locator("//button[text()='Sign In']").click();
  
    console.log("===========================================")

})

test('testingcoden', async ({ page }) => {
  await page.goto('https://qhisportalppr.moph.gov.qa/payer/#/ic/signin');
  await page.getByText('Sign up', { exact: true }).click();
  await page.locator('#mat-input-0').click();
  await page.locator('#mat-input-0').fill('638378');
  await page.locator('ng-select').filter({ hasText: '×CR No' }).getByRole('combobox').click();
  await page.getByText('Establishment No', { exact: true }).click();
  await page.locator('mat-card').filter({ hasText: '1. Insurance Company (IC)' }).locator('input[type="text"]').nth(1).click();
  await page.locator('mat-card').filter({ hasText: '1. Insurance Company (IC)' }).locator('input[type="text"]').nth(1).fill('638378');
  await page.locator('mat-card').filter({ hasText: '1. Insurance Company (IC)' }).locator('input[type="text"]').nth(1).press('Tab');
  await page.locator('#mat-input-1').fill('Test Insurance Company Auto');
  await page.locator('#mat-input-1').press('Tab');
  await page.locator('#mat-input-2').click();
  await page.locator('#mat-input-2').fill('Test Insurance company Auto');
  await page.locator('#mat-input-2').press('Tab');
  await page.locator('#mat-input-3').click();
  await page.locator('#mat-input-3').fill('Jack pandi');
  await page.locator('#mat-input-3').press('Tab');
  await page.locator('#mat-input-6').click();
  await page.getByRole('button', { name: '07/07/' }).click();
  await page.locator('#mat-input-7').click();
  await page.getByRole('button', { name: 'Next month' }).click();
  await page.getByRole('button', { name: 'Next month' }).click();
  await page.getByRole('button', { name: 'Next month' }).click();
  await page.getByRole('button', { name: '09/10/' }).click();
  await page.locator('#mat-input-16').click();
  await page.locator('#mat-input-16').fill('63738797');
  await page.locator('#mat-input-16').press('Tab');
  await page.locator('#mat-input-8').click();
  await page.locator('#mat-input-8').fill('testinsurance@yopmail.com');
  await page.locator('#mat-input-8').press('Tab');
  await page.locator('mat-card').filter({ hasText: '1. Insurance Company (IC)' }).locator('input[type="text"]').nth(2).click();
  await page.getByRole('option', { name: 'QCB' }).click();
  await page.locator('#mat-input-9').click();
  await page.locator('#mat-input-9').fill('office header');
  await page.locator('#mat-input-10').click();
  await page.locator('#mat-input-10').fill('63738');
  await page.locator('#mat-input-10').press('Tab');
  await page.locator('#mat-input-11').fill('73830');
  await page.locator('#mat-input-11').press('Tab');
  await page.locator('#mat-input-12').fill('37378');
  await page.locator('#mat-input-12').press('Tab');
  await page.locator('div').filter({ hasText: /^Zone\*$/ }).getByRole('textbox').click();
  await page.getByRole('option', { name: '67' }).click();
//  await page.locator('#mat-input-17').click();
  await page.locator('#mat-input-17').fill('municaptu');
  await page.locator('#mat-input-17').press('Tab');
  await page.locator('#mat-input-13').fill('63738797');
  await page.locator('#mat-input-13').press('Tab');
  await page.locator('#mat-input-14').fill('www.testinsurance.com');
  //await page.locator('#mat-input-14').press('Tab');
  //await page.locator('#mat-input-18').click();
  //await page.locator('#mat-input-18').click();
  await page.locator('#mat-input-18').fill('29435619571');
  await page.locator('#mat-input-18').press('Tab');
  //await page.locator('#mat-input-20').click();
  await page.locator('#mat-input-20').fill('safvan@yopmail.com');
  await page.locator('#mat-input-20').press('Tab');
  await page.locator('#mat-input-21').fill('operations');
  await page.locator('#mat-input-21').press('Tab');
  //await page.getByText('+').nth(1).click();
  await page.locator('#mat-input-22').fill('73783793');
  await page.pause()
  const filechoosepath=page.waitForEvent('filechooser');
  await page.getByText('Drag and Drop Select a file or drop one hereadd').first().click();
  const filechooser=await filechoosepath;
   await filechooser.setFiles("C:\\Users\\Arnab Basak\\Downloads\\Warning Notification - Delay Resolution - 7 days.pdf")
  //await page.locator('body').setInputFiles("C:\\Users\\Arnab Basak\\Downloads\\Warning Notification - Delay Resolution - 7 days.pdf");
  const filechoosepath2=page.waitForEvent('filechooser');
  await page.getByText('Drag and Drop Select a file').nth(1).click();
  const filechooser2=await filechoosepath2;
 await filechooser2.setFiles("C:\\Users\\Arnab Basak\\Downloads\\Warning Notification - Delay Resolution - 7 days.pdf")
  //await page.locator('body').setInputFiles('Warning Notification - Delay Resolution - 7 days.pdf');
  //await page.pause()
  await page.locator("//span[@class='checkmark']").click();
  await page.locator("//button[@type='submit']").click();
});

test("timeout testing", async({page})=>
{
    page.goto("https://www.facebook.com", {timeout:1000})
}
);
import { test, expect } from '@playwright/test';

test.skip('has title', async ({ page }) => {
  await page.goto('https://www.google.com');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle("Google");
});

test.skip('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();



});

test.skip('launch test', async({page})=>
{
  
  await page.goto('https://www.google.com')
  let p1=page.context();
  let pages=await p1.newPage();
  await pages.goto("https://www.youtube.com")

  let browser1=p1.browser();
  let con1=await browser1?.newContext();
  let newpage=await con1?.newPage();
  await newpage?.goto("https://www.google.com")
 }
);


test("hooks test case",async ({page})=>
{ 
    await  page.goto("https://www.google.com")
})

test.afterAll(async ()=>{
  console.log("after all test case")
})

test.beforeAll(async()=>{
  console.log("before all the test case")
})

test.beforeEach(async({}, testinfo)=>{
    console.log(`before each testcase ${testinfo.title}: ${testinfo.workerIndex} : ${testinfo.parallelIndex}`)
})

test.afterEach(async({}, testinfo)=>
{
    console.log(`after each testcase ${testinfo.title}: ${testinfo.workerIndex} : ${testinfo.parallelIndex}`)
})
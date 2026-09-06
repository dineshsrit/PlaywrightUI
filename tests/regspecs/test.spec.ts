import { test, expect } from '@playwright/test';
import path from 'path';

test('test', async ({ page }) => {

    await page.goto("https://qhisportalppr.moph.gov.qa/provider/#/hcp/his")

 // await page.getByText('Drag And Drop Select file or drop one hereadd').first().click();

  
    const filepath=path.join(process.cwd(),'testdata',"sample.pdf");
 const uploadSection = page.locator('.dragMain').nth(0);
 

const fileInput = uploadSection.locator('input[type="file"]');

console.log("updated locator is", fileInput)

await fileInput.setInputFiles(filepath);

const uploadSection1 = page.locator('.dragMain').nth(1);

const fileInput1 = uploadSection1.locator('input[type="file"]');

await fileInput1.setInputFiles(filepath);


await page.pause()
});
import test from '@playwright/test';
import * as path from 'path';


test('file uplod', async({page})=>
{
   await page.goto("https://qhisportalppr.moph.gov.qa/provider/#/hcp/his")

   const filepath=path.join(process.cwd(),'testdata','sample.pdf');
    await page.locator("(//input[@id='drag'])[1]").setInputFiles(filepath);
    await page.locator("(//input[@id='drag'])[2]").setInputFiles(filepath);

    await page.pause();

});
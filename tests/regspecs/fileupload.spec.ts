
import test from '@playwright/test';
import * as path from 'path';


test('file uplod', async({page})=>
{
   await page.goto("https://www.testmuai.com/selenium-playground/upload-file-demo/")

   const filepath=path.join(process.cwd(),'testdata','sample.pdf');
    await page.locator("#file").setInputFiles(filepath);

    await page.pause();

});
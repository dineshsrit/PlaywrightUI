
import {test as setup, expect} from '@playwright/test'
import path from 'path'

const authfilepath=path.resolve('auth/user.json')
setup('authenticate', async({page})=>
{
     await page.goto("login?back=my-account")

    await page.locator("#email").fill("dinesh.m477@gmail.com")
    await page.locator("#passwd").fill("Danny@1234")
    await page.getByRole('button', {name:'Sign in'}).click()
    //await expect(page).toHaveURL(/\/my-account/)
    await page.context().storageState({path:authfilepath})

})
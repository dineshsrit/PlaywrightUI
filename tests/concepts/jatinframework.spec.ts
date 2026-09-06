

import {test, expect} from '@playwright/test'

import { User } from '../../datafolder/data.type'

test('testing of login', async({page})=>
{
    await page.goto("https://demo.evershop.io/account/login")

    await page.locator("input#field-email").fill(User.username)
    await page.locator("input#field-password").fill(User.password)
    await page.getByRole("button", {name:'Sign In'}).click()
    await expect(page.getByRole("link", {name:'Shop Now'})).toContainText('Shop Now')
    await page.pause()
})
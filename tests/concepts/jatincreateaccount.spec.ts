import {test, expect} from '@playwright/test'
import { customerInfo } from '../../datafolder/Usercreation.data'

test('register user', async({page})=>
{
    await page.goto("https://demo.evershop.io/account/register")

    await page.getByPlaceholder('Full Name', {exact:true}).fill(customerInfo().fullname)

    await page.getByPlaceholder('Email', {exact:true}).fill(customerInfo().email)

     await page.getByPlaceholder('Password', {exact:true}).fill(customerInfo().password)

     await page.getByRole('button', {name:'Sign Up'})

     await page.pause()
    
    })
import {test} from '@playwright/test'

test('browsercontext demo',async({context})=>
{

    let browsers=  context.browser()
    let browsertype=browsers?.browserType()
    console.log(browsertype?.name());
   //let contexts= await context.newPage();
   //contexts.
})

import {test} from '@playwright/test'

test('global teardown', async({})=>
{
    console.log("global tear down")
})
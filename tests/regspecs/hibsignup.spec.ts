import {test, expect} from '@playwright/test';
import { hibPage } from '../../Pages/hibpage';
import { TEST_DATA } from '../../testdata/TestData';



test('HIB Sign Up Application Form', async({page})=>
{

    const hibObj=new hibPage(page)
    await hibObj.fillInformation(TEST_DATA.HIB.information)

})
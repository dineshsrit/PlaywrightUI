import {test, expect} from '@playwright/test';
import { hibPage } from '../../Pages/hibpage';
import { HIB_TEST_DATA, TEST_DATA } from '../../testdata/TestData';



test('HIB Sign Up Application Form', async({page})=>
{

    const hibObj=new hibPage(page)
    await hibObj.fillInformation(HIB_TEST_DATA.information)
    await hibObj.filladdress(HIB_TEST_DATA.address)
    await hibObj.fillfocaldata(HIB_TEST_DATA.focaldata)
    await hibObj.uploaddocument('sample.pdf')
    await hibObj.declarationcheck()
    await hibObj.finalSubmit()


})
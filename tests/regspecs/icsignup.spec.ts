import {test, expect} from '@playwright/test';
import { HIB_TEST_DATA, IC_TEST_DATA, TEST_DATA, TPA_TEST_DATA } from '../../testdata/TestData';
import { tpaPage } from '../../Pages/tpapage';
import { icPage } from '../../Pages/icpage';



test('IC Sign Up Application Form', async({page})=>
{

    const icObj=new icPage(page)
    await icObj.fillInformation(IC_TEST_DATA.information)
    await icObj.filladdress(IC_TEST_DATA.address)
    await icObj.fillfocaldata(IC_TEST_DATA.focaldata)
    await icObj.uploaddocument('sample.pdf')
    await icObj.declarationcheck()
    await icObj.finalSubmit()


})
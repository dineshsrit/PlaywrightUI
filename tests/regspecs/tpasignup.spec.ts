import {test, expect} from '@playwright/test';
import { HIB_TEST_DATA, TEST_DATA, TPA_TEST_DATA } from '../../testdata/TestData';
import { tpaPage } from '../../Pages/tpapage';



test('TPA Sign Up Application Form', async({page})=>
{

    const tpaObj=new tpaPage(page)
    await tpaObj.fillInformation(TPA_TEST_DATA.information)
    await tpaObj.filladdress(TPA_TEST_DATA.address)
    await tpaObj.fillfocaldata(TPA_TEST_DATA.focaldata)
    await tpaObj.uploaddocument('sample.pdf')
    await tpaObj.declarationcheck()
    await tpaObj.finalSubmit()


})
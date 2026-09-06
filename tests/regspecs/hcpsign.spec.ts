import test from "@playwright/test"
import { healthProvider } from '../../Pages/healthProviderPage';
import ictestdata from '../../testdata/ictestdata.json';



test("HCP sign up", async({page})=>
{
    
    let hp=new healthProvider(page)
    await hp.goto()
    await hp.fillForm(ictestdata)
    //await page.pause()
    await hp.selectStartDate(ictestdata)
    await hp.selectEndDate(ictestdata)
    await hp.fillOtherDetails(ictestdata)
    
    await hp.fillAddressDetails(ictestdata)
    //await page.pause()
   //await hp.fileuploadclick()
    await hp.uploadfilelicensecopy("sample.pdf");

    
    await hp.uploadfilecrcopy("sample.pdf")

    await hp.declarationcheck()
    await hp.submitApplication()


    await page.pause()
   
})
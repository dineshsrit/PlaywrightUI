
import { expect, Locator, Page } from "@playwright/test";
import page from '@playwright/test';
import { CalendarUtil } from "../tests/utilils/calendarutilis";
import { TEST_DATA } from "../testdata/TestData";
import { address, focaldata, information } from '../testinterface/informationInterface';
import { FileUploadUtil } from "../tests/utilils/FileUtilits";



 export class icPage{


    page:Page
    licenseNo:Locator
    selectcrestNo:Locator
    crestNoclk:Locator
    estno:Locator
    nameEn:Locator
    nameAr:Locator
    ownerName:Locator
    licenseStartDate:Locator
    licenseEndDate:Locator
    entityMobileNo:Locator
    entityEmail:Locator
    licenseAuthClk:Locator
    licenseAuth:string
    headOfficeName:Locator
    unitNo:Locator
    buildingNo:Locator
    street:Locator
    zoneno:string
    zone:Locator
    municipality:Locator
    poBox:Locator
    website:Locator
    fpQid:Locator
    fpEmail:Locator
    fpDesignation:Locator
    fpMobileNo:Locator
    licenseCopy:Locator
    cr_estCopy:Locator
    declarationchk:Locator
    submit:Locator
    popup:Locator
    alerttext:Locator
    backtoLogin:Locator


    constructor(page:Page)
    {
        this.page=page;
        this.licenseNo=page.locator("//input[@formcontrolname='isuranceLicenesNo']")
        this.selectcrestNo=page.locator("(//div[@class='ng-value-container']/following-sibling::span)[1]")
        this.crestNoclk=page.locator("//span[text()='Establishment No']")
        this.estno=page.locator("//*[@formcontrolname='crNumber']")
        this.nameEn=page.locator("//input[@formcontrolname='companyName']")
        this.nameAr=page.locator("//input[@formcontrolname='companyNameArabic']")
        this.ownerName=page.locator("//input[@formcontrolname='ownerName']")
        this.licenseStartDate=page.locator("//input[@formcontrolname='startDate']")
        this.licenseEndDate=page.locator("//input[@formcontrolname='licsenseExpiryDate']")
        this.entityMobileNo= page.locator("(//input[@formcontrolname='mobile'])[1]")
        this.entityEmail=page.locator("(//input[@formcontrolname='email'])[1]")
        this.licenseAuthClk=page.locator("//*[@formcontrolname='licenseAuthority']")
        this.headOfficeName=page.locator("//input[@formcontrolname='headOffice']")
        this.unitNo=page.locator("//input[@formcontrolname='unitNo']")
        this.buildingNo=page.locator("//input[@formcontrolname='buildingNo']")
        this.street=page.locator("//input[@formcontrolname='street']")
        this.municipality=page.locator("//input[@formcontrolname='municipality']")
        this.poBox=page.locator("//input[@formcontrolname='postBox']")
        this.website=page.locator("//input[@formcontrolname='website']")
        this.fpQid=page.locator("//input[@formcontrolname='qid']")
        this.fpEmail= page.locator("(//input[@formcontrolname='email'])[2]")
        this.fpDesignation=page.locator("(//input[@formcontrolname='designation']")
        this.fpMobileNo=page.locator("(//input[@formcontrolname='mobile'])[2]")
        this.licenseCopy=page.locator("(//input[@id='drag'])[1]");
        this.cr_estCopy=page.locator("(//input[@id='drag'])[2]")
        this.declarationchk=page.locator("//input[@type='checkbox']")
        this.submit=page.getByRole('button', {name:'Submit'})
        this.zoneno="//div[@role='option']/span[normalize-space()='$$']"
        this.licenseAuth="//div[@role='option']/span[normalize-space()='$$']"
        this.unitNo=page.locator("//input[@formcontrolname='unitNo']")
        this.buildingNo=page.locator("//input[@formcontrolname='buildingNo']")
        this.street=page.locator("//input[@formcontrolname='street']")
        this.zone=page.locator("(//span[@class='ng-arrow-wrapper'])[3]")
        this.municipality=page.locator("//input[@formcontrolname='municipality']")
        this.poBox=page.locator("//input[@formcontrolname='postBox']")
        this.website=page.locator("//input[@formcontrolname='website']")
        this.fpQid=page.locator("//input[@formcontrolname='qid']")
        this.fpEmail=page.locator("(//input[@formcontrolname='email'])[2]")
        this.fpDesignation=page.locator("//input[@formcontrolname='designation']")
        this.fpMobileNo=page.locator("(//input[@formcontrolname='mobile'])[2]")
        this.licenseCopy=page.locator("(//input[@id='drag'])[1]")
        this.cr_estCopy=page.locator("(//input[@id='drag'])[2]")
        this.declarationchk=page.locator("//input[@type='checkbox']/following-sibling::span");
        this.popup=page.locator("//*[@titlename='actions.alert']/div/span[normalize-space()='Alert']")
        this.alerttext=page.getByText('Thank you for your Sign Up')
        this.backtoLogin=page.getByRole('button', {name:'Back To Login'})



       


    }





    async fillInformation(data:information)
    {
        await this.page.goto('payer/#/ic/his')
        //console.log('received data', data)
        await this.licenseNo.fill(data.licenseno)
        await this.selectcrestNo.click()
        await this.crestNoclk.click()
        await this.estno.fill(data.Crno)
        await this.nameEn.fill(data.nameen)
        await this.nameAr.fill(data.namear)
        await this.ownerName.fill(data.ownername)
        //  await this.licenseStartDate.evaluate((element)=>
        // {
        //     element.removeAttribute('readonly')
        // })
       //await this.licenseStartDate.fill(data.licensestartDate)
        let cal= new CalendarUtil(this.page)
        await cal.selectDate(this.licenseStartDate, data.licensestartDate)
        
        await cal.selectDate(this.licenseEndDate, data.licenseendDate)
        await this.entityMobileNo.fill(data.entitymobile)

        await this.entityEmail.waitFor({state:'visible'})
        await this.entityEmail.fill(data.entityemail)
    
        await this.licenseAuthClk.click()
        let newauthority= this.licenseAuth.replace('$$',data.Licenseauthorith)
       await this.page.locator(newauthority).click()
        await this.headOfficeName.fill(data.headoffice)
     }

     async filladdress(data:address)
     {
        await this.unitNo.fill(data.unitno)
        await this.buildingNo.fill(data.buildingno)
        await this.street.fill(data.street)
        await this.zone.click()
       let newzone= this.zoneno.replace('$$', data.zone)
       await this.page.locator(newzone).click()
       await this.municipality.fill(data.municipality)
       await this.poBox.fill(data.pobox)
       await this.website.fill(data.website)

     }
     async fillfocaldata(data:focaldata)
     {

        console.log('the recieved data', data)
        await this.fpQid.fill(data.fqid)
        await this.fpEmail.fill(data.femail)
        await this.fpDesignation.fill(data.fdesignation)
        await this.fpMobileNo.fill(data.fmobile)
     }

     async uploaddocument(filepath:string)
    {
        let fu=new FileUploadUtil()
       await fu.uploadFile(this.licenseCopy, filepath)
       await fu.uploadFile(this.cr_estCopy, filepath)
     }

      async declarationcheck()
    {
        console.log("visible", await this.declarationchk.isVisible())

        await this.declarationchk.scrollIntoViewIfNeeded()
        await this.declarationchk.check({force:true});

    }

    async finalSubmit()
    {
       await this.submit.click()
       await expect(this.popup).toBeVisible()
       await expect(this.alerttext).toBeVisible()
       console.log('text is visible')
       await this.backtoLogin.click()
       console.log("back to login is clicked")


    }

 }


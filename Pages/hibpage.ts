
import { Locator, Page } from "@playwright/test";
import page from '@playwright/test';
import { CalendarUtil } from "../tests/utilils/calendarutilis";
import { TEST_DATA } from "../testdata/TestData";
import { information } from '../testinterface/informationInterface';


 export class hibPage{


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


    }





    async fillInformation(data:information)
    {
        await this.page.goto('payer/#/hib/his')
        console.log('received data', data)
        await this.licenseNo.fill(data.licenseno)
        await this.selectcrestNo.click()
        await this.crestNoclk.click()
        await this.estno.fill(data.Crno)
        await this.nameEn.fill(data.nameen)
        await this.nameAr.fill(data.namear)
        await this.ownerName.fill(data.ownername)
         await this.licenseStartDate.evaluate((element)=>
        {
            element.removeAttribute('readonly')
        })
        //await this.licenseStartDate.fill(data.licensestartDate)
        let cal= new CalendarUtil(this.page)
        
        await cal.selectDate(this.licenseEndDate, data.licenseendDate)
        await this.entityMobileNo.fill(data.entitymobile)
        await this.entityEmail.fill(data.entityemail)
        await this.licenseAuthClk.click()
        let newauthority= this.licenseAuth.replace('$$',data.Licenseauthorith)
       await this.page.locator(newauthority).click()
        await this.headOfficeName.fill(data.headoffice)




       
    }



 }


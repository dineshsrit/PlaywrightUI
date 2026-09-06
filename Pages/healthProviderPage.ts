import { Locator, Page } from "@playwright/test";
import { CalendarUtil } from "../tests/utilils/calendarutilis";
import { FileUploadUtil } from "../tests/utilils/FileUtilits";
import path from "path";
import { popUtilis } from "../tests/utilils/PopUtilis";



export class healthProvider{
    page:Page
    signup:Locator
    licenseno:Locator
    crestnoselect:Locator
    CrEstNo:Locator
    entitynameen:Locator
    entitynamear:Locator
    ownername:Locator
    startdate:Locator
    expirydate:Locator
    mobileno:Locator
    email:Locator
    unitno:Locator
    buildingno:Locator
    street:Locator
    zone:Locator
    municipality:Locator
    pobox:Locator
    Website:Locator
    locationmap:Locator
    qid:Locator
    qidemail:Locator
    designation:Locator
    qidmobileno:Locator
    licensecrcopy:Locator
    licensecopy:Locator
    crcopy:Locator
    check:Locator
    zoneno:string
    enddate:string
    licenseauthority:string
    licenseauthorityclk:Locator
    declarationchk:Locator
    submit:Locator
    estno_crno:Locator
    popup:popUtilis;
    //(//div[@class='dragDrop'])[1]
    //input[@type='checkbox']
    
    constructor(page:Page)
    {
        this.page=page;
        this.signup=page.locator("//div[@class='signup-container']//a[text()='Sign up']")
        this.licenseno=page.locator("//input[@formcontrolname='isuranceLicenesNo']")
        this.crestnoselect=page.locator("(//div[@class='ng-value-container']/following-sibling::span)[1]")
        this.CrEstNo=page.locator("//span[text()='Establishment No']")
        this.entitynameen=page.locator("//input[@formcontrolname='companyName']")
        this.entitynamear=page.locator("//input[@formcontrolname='companyNameArabic']")
        this.ownername=page.locator("//input[@formcontrolname='ownerName']")
        this.startdate=page.locator("//input[@formcontrolname='startDate']")
        this.expirydate=page.locator("//input[@formcontrolname='licsenseExpiryDate']")
        this.mobileno=page.locator("(//input[@formcontrolname='mobile'])[1]")
        this.email=page.locator("(//input[@formcontrolname='email'])[1]")
        this.unitno=page.locator("//input[@formcontrolname='unitNo']")
        this.buildingno=page.locator("//input[@formcontrolname='buildingNo']")
        this.street=page.locator("//input[@formcontrolname='street']")
        this.municipality=page.locator("//input[@formcontrolname='municipality']")
        this.pobox=page.locator("//input[@formcontrolname='postBox']")
        this.Website=page.locator("//input[@formcontrolname='website']")
        this.locationmap=page.locator("//input[@formcontrolname='urlField']")
        this.qid=page.locator("//input[@formcontrolname='qid']")
        this.qidemail=page.locator("(//input[@formcontrolname='email'])[2]")
        this.qidmobileno=page.locator("(//input[@formcontrolname='mobile'])[2]")
        //this.licensecopyclick=page.locator("");
        this.licensecopy=page.locator("(//input[@id='drag'])[1]");
         this.licensecrcopy=page.locator("(//input[@id='drag'])[2]")
        this.crcopy=page.locator("(//div[@class='dragDrop'])[2]")
        this.check=page.locator("//input[@type='checkbox']")
        this.zone=page.locator("(//span[@class='ng-arrow-wrapper'])[3]")
        this.designation=page.locator("//input[@formcontrolname='designation']")
        this.zoneno="//div[@role='option']/span[normalize-space()='$$']"
        this.licenseauthority="//div[@role='option']/span[normalize-space()='$$']"
        this.licenseauthorityclk=page.locator("//*[@formcontrolname='licenseAuthority']");
        this.enddate="button[aria-label='$$']"
        this.declarationchk=page.locator("//input[@type='checkbox']/following-sibling::span");
        this.submit=page.getByRole('button', {name:'Submit'})
        this.estno_crno=page.locator("//*[@formcontrolname='crNumber']")
        this.popup=new popUtilis();
       
        
        
    }

    async goto()
    {
       await this.page.goto("payer/#/ic/signin")
        
    }

    async fillForm(ictestdata:any)
    {
        
        await this.signup.click()
        await this.licenseno.fill(ictestdata.licenseno)
        await this.crestnoselect.click()
        await this.CrEstNo.click()
        await this.estno_crno.fill(ictestdata.crno)
        await this.entitynameen.fill(ictestdata.entitynameen)
        await this.entitynamear.fill(ictestdata.entitynamear)
        await this.ownername.fill(ictestdata.ownername)
        await this.licenseauthorityclk.click()
       
        let newauthority= this.licenseauthority.replace('$$',ictestdata.authority)
       await this.page.locator(newauthority).click()
        
    }

    async selectStartDate(ictestdata:any)
    {
        await this.startdate.evaluate((element)=>
        {
            element.removeAttribute('readonly')
        })
        await this.startdate.fill(ictestdata.startdate)
    }

    async selectEndDate(ictestdata:any)
    {
        

      let cal= new CalendarUtil(this.page)
      await cal.selectDate(this.expirydate, ictestdata.enddate)

       
    }

    async fileuploadclick()
    {   

        await this.licensecopy.click()
    }


    async fillOtherDetails(ictestdata:any)
    {
        await this.mobileno.fill(ictestdata.mobileno)
        await this.email.fill(ictestdata.email)
        
    }

    async fillAddressDetails(ictestdata:any)
    {
         await this.unitno.fill(ictestdata.unitno)
         await this.buildingno.fill(ictestdata.buildingno)
         await this.street.fill(ictestdata.street)
         await this.zone.click()
         
         let no='67'
         let newzone=this.zoneno.replace('$$',ictestdata.zoneno)
        await this.page.locator(newzone).click()

         await this.municipality.fill(ictestdata.municipality)
         await this.pobox.fill(ictestdata.pobox)
         await this.Website.fill(ictestdata.website)
         await this.locationmap.fill(ictestdata.location)
         await this.qid.fill(ictestdata.qid)
         await this.qidemail.fill(ictestdata.qidemail)
         await this.designation.fill(ictestdata.qiddesignation)
         await this.qidmobileno.fill(ictestdata.qidmobileno)
    }

    async uploadfilelicensecopy(filepath:string)
    {
     let fp= new FileUploadUtil()
    await fp.uploadFile(this.licensecopy, filepath)
    }

    async uploadfilecrcopy(filepath:string)
    {
      let fp= new FileUploadUtil()
   await  fp.uploadFile(this.licensecrcopy, filepath)
    }

    async declarationcheck()
    {
        console.log("visible", await this.declarationchk.isVisible())

        await this.declarationchk.scrollIntoViewIfNeeded()
        await this.declarationchk.check({force:true});

    }

    async submitApplication()
    {
        await this.submit.click()
        await this.popup.popup(this.page)
        
    }
   
}
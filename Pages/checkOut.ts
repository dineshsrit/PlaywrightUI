import { expect, Locator, Page } from "@playwright/test";


export default class checkOut
{
    page:Page
    inStock:Locator
    proceedtoCheckOut:Locator
    agree:Locator
    address:Locator
    payment:Locator
    shipproceedtocheckout:Locator
    constructor(page:Page)
    {
        this.page=page
        this.inStock=page.locator("//td[@class='cart_avail']/span")
        this.proceedtoCheckOut=page.locator("//span[text()='Proceed to checkout']")
        this.agree=page.locator("input#cgv")
        this.address=page.locator("div#center_column h1")
        this.payment=page.locator("//div[@class='paiement_block']//div")
        this.shipproceedtocheckout=page.locator("//button[@name='processCarrier']")

    }

    isStockAvailable()
    {   

        expect(this.inStock).toHaveText("In stock")

    }

     async proceedtoCheck()
    {
       await this.proceedtoCheckOut.click()
    }

    async isAddressAvailable()
    {
        expect(this.address).toHaveText("Addresses")
        await this.proceedtoCheckOut.click()
    }

   async agreedShipping()
    {
      await  this.agree.click()
      await this.shipproceedtocheckout.click()
    }

    isPaymentAvailable()
    {
        expect(this.payment).toHaveText("No payment modules have been installed.")
    }
    
}
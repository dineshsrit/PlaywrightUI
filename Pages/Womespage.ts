import { expect, Locator } from "@playwright/test";
import { Page } from "@playwright/test";
import checkOut from "./checkOut";


export default class womenPage{

    page:Page
    dressname:Locator
    women:Locator
    qtyavailable:Locator
    stockavailable:Locator
    req_qty:Locator
    req_size:Locator
    addtocart:Locator
    productadded:Locator
    addmore:Locator
    proceedtoCheckout:Locator

    constructor(page:Page)
    {
        this.page=page;
        this.dressname=page.locator("(//a[normalize-space()='Printed Dress'])[2]")
        this.women=page.locator("//a[text()='Women']")
        this.qtyavailable=page.locator("span#quantityAvailable")
        this.stockavailable=page.locator("span#availability_value")
        this.req_qty=page.locator("input#quantity_wanted")
        this.req_size=page.locator("select#group_1")
        this.addtocart=page.locator("//button[@name='Submit']")
        this.productadded=page.locator("//span[normalize-space()='Product successfully added to your shopping cart']")
        this.addmore=page.getByRole("link", {name:"More"})
        this.proceedtoCheckout=page.locator("//span[normalize-space()='Proceed to checkout']")
    }

   async womenClick():Promise<womenPage>
    {
      await  this.women.click()
      return this;
    }
  async  dressHover()
    {
       await this.dressname.hover()
       await this.addmore.click()
    }
    
    async  qtyandstockavailable(reqqty:string, reqsize:string)
    {
      let qty= this.qtyavailable.textContent()
      console.log(qty)
      let stock=this.stockavailable.textContent()
       console.log(stock)

      try{
        if(Number(qty)>0 && expect(stock).toContain("In stock"))
      {
            console.log("qty is available")
      }
      }

      catch(error)
      {
        console.log("Qty is not availabkle")
      }
    
     

     await this.req_qty.fill(reqqty)
    await this.req_size.selectOption(reqsize)
    }

    async addtoCart()
    {
       await this.addtocart.click()
    }

    isProductAdded()
    {

      expect(this.productadded).toHaveText("Product successfully added to your shopping cart")
      
    }

   async  proceedtoCheckOut():Promise<checkOut>
     {
       await this.proceedtoCheckout.click()

       return new checkOut(this.page)
     }

}
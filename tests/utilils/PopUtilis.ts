import { expect, Page } from "@playwright/test";
import page from '@playwright/test';


export class popUtilis
{
   
   async popup(page:Page)
   {
      const popup =page.locator("//*[@titlename='actions.alert']/div/span[normalize-space()='Alert']")

      await expect(popup).toBeVisible();

      await expect(page.getByText('Thank you for your Sign Up')).toBeVisible()
      console.log('text is visible')
    
      await page.getByRole('button', {name:'Back To Login'}).click()
      console.log('button is clicked')


    
   }
}
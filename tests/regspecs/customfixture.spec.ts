import {test, expect} from '../../fixture/loginfixture'

test('validate the login', async ({loggedPage})=>
{
   

    await expect(loggedPage.getByText('Order history and details')).toContainText('Order')
    await loggedPage.getByText('Order history and details').click()
    await expect(loggedPage.getByText('You have not placed any orders.')).toContainText('You have not')
    console.log(await loggedPage.getByText('You have not placed any orders.').innerText())

   

} )


test('validate tshirs', async ({loggedPage})=>
{
   

    await expect(loggedPage.getByRole('link', {name:'T-shirts'})).toContainText('T-shirts')
    await loggedPage.getByRole('link', {name:'T-shirts'}).click()

    await expect(loggedPage.locator("//p[normalize-space()='Catalog']")).toContainText('Catalog')

    console.log(await loggedPage.locator("//p[normalize-space()='Catalog']").innerText())

   
})
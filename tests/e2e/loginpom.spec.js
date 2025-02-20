import {test,expect} from '@playwright/test'
import {LoginPage} from '../../pages/LoginPage'
import logindata from '../../testdata/logindata.json'

test('pom first import export test', async({page})=>{

    const loginPage = new LoginPage(page)

    loginPage.navigate(logindata.validUser.url)
    loginPage.login(logindata.validUser.username,logindata.validUser.password)
    await expect(page).toHaveURL(logindata.validUser.expectedUrl)
    await expect(page.locator('select.product_sort_container')).toBeVisible()
})

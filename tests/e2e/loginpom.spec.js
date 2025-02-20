// @ts-nocheck
import logindata from '../../testdata/logindata.json'

import { test, expect } from '../../fixtures/myfixture'

test('pom first import export test', async ({ loginpage }) => {
    await loginpage.navigate(logindata.validUser.url)
    await loginpage.login(logindata.validUser.username, logindata.validUser.password)
    await expect(loginpage.page).toHaveURL(logindata.validUser.expectedUrl)
    await expect(loginpage.page.locator('select.product_sort_container')).toBeVisible()
});


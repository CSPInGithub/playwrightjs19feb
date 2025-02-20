// import { test, expect } from '@playwright/test'

// test.skip('Multiple contexts example: Admin & User', async ({ browser }) => {
//     // ✅ Create two separate contexts
//     const adminContext = await browser.newContext();
//     const userContext = await browser.newContext();

//     // ✅ Create pages inside each context
//     const adminPage = await adminContext.newPage();
//     const userPage = await userContext.newPage();

//     // ✅ Admin login
//     await adminPage.goto('https://www.saucedemo.com/')
//     await adminPage.locator('[placeholder="Username"]').fill('standard_user')
//     await adminPage.locator('[placeholder="Password"]').fill('secret_sauce')

//     await adminPage.locator("[id='login-button']").press('Enter')
//     await expect(adminPage).toHaveURL('https://www.saucedemo.com/inventory.html');

//     // ✅ User login in a separate session
//     await userPage.goto('https://www.saucedemo.com/')
//     await userPage.locator('[placeholder="Username"]').fill('visual_user')
//     await userPage.locator('[placeholder="Password"]').fill('secret_sauce')

//     await userPage.locator("[id='login-button']").press('Enter')
//     await expect(userPage).toHaveURL('https://www.saucedemo.com/inventory.html');

    

//     // ✅ Close contexts after test
//     await adminContext.close();
//     await userContext.close();
// });
// test.skip('first second test', async ({ page }) => {

//     await page.goto('https://www.saucedemo.com/')
//     await page.locator('[placeholder="Username"]').fill('standard_user')
//     await page.locator('[placeholder="Password"]').fill('secret_sauce')

//     await page.locator("[id='login-button']").press('Enter')

//     //assertions

//     await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')

//     await expect(page.locator('button#add-to-cart-sauce-labs-backpack')).toBeEnabled()

//     // Soft assertion (does not stop execution if it fails)
//     try {
//         await expect.soft(page.locator('button#add-to-cart-sauce-labs-backpack')).toHaveText("Add to cart");
//     } catch (error) {
//         console.log("Soft assertion failed, but test continues...");
//     }

//     await expect(page.locator('text=Products')).toBeVisible();

//     // multiple locators

//     const buttons = await page.locator('button.btn.btn_primary.btn_small.btn_inventory').nth(3).click()

//     // for(const button of buttons){
//     //     await button.nth(3).click()
//     //     break

//     // }
//     await expect(page.locator('text=Remove')).toBeVisible();

// })
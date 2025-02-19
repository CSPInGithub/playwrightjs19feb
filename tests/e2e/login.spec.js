import { test, expect } from '@playwright/test'


test('first test', async ({ page }) => {

    await page.goto('https://www.saucedemo.com/')
    await page.locator('[placeholder="Username"]').fill('standard_user')
    await page.locator('[placeholder="Password"]').fill('secret_sauce')

    await page.locator("[id='login-button']").click()

    //assertions

    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')

    await expect(page.locator('button#add-to-cart-sauce-labs-backpack')).toBeEnabled()

    // Soft assertion (does not stop execution if it fails)
    try {
        await expect.soft(page.locator('button#add-to-cart-sauce-labs-backpack')).toHaveText("Add to cart");
    } catch (error) {
        console.log("Soft assertion failed, but test continues...");
    }



    await expect(page.locator('text=Products')).toBeVisible();









})

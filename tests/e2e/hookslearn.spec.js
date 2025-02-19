import { test, expect } from '@playwright/test'


test.beforeEach('hooks experiment', async ({ page }) => {
    console.log('Before Each: Navigating to login page');
    await page.goto('https://www.saucedemo.com/')
    await page.locator('[placeholder="Username"]').fill('standard_user');
    await page.locator('[placeholder="Password"]').fill('secret_sauce');
    await page.locator('#login-button').click();

})



test.describe('Group of Tests', () => {
    test('verify successful login', async ({ page }) => {

        await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    });

    test('verify addtocart fucntionality', async ({ page }) => {
        //await page.goto('https://www.saucedemo.com/inventory.html');
        await expect.soft(page.locator('text=Products')).toBeVisible();
        await page.locator('button.btn.btn_primary.btn_small.btn_inventory').nth(3).click()
        console.log('verify addtocart fucntionality all steps completed');

    });
});

test.afterEach('hooks afterEach', async ({ page }) => {

    console.log('After Each: Logging out');

    await page.locator("#react-burger-menu-btn").click()
    await page.locator(" #logout_sidebar_link").click()





})
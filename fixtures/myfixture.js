// @ts-nocheck
import { test as base, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js'; // Adjust the path as needed

export const test = base.extend({
    loginpage: async ({ page }, use) => {
        // Create an instance of LoginPage and pass it to the test
        const loginPage = new LoginPage(page);

        // Pass the loginPage instance to the test
        await use(loginPage);
    }


});

export { expect };
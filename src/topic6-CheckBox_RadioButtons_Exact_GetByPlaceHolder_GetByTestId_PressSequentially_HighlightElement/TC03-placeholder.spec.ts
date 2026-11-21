

import { test, Page, chromium, Browser } from '@playwright/test';

test('element with placeholder test', async ({ page }) => {
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register'); //enter the url

    await page.getByPlaceholder('First Name').fill('Testing');
    await page.getByPlaceholder('Telephone').fill('9898989898');
    await page.getByPlaceholder('Password', { exact: true }).fill('test@123');
    await page.getByPlaceholder('Password Confirm').fill('test@123');

    await page.pause();

});




//naveenautomation100
//search field: macbook

import { test, Page, chromium, Browser } from '@playwright/test';

test('fill with delay test', async ({ page }) => {
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register'); //enter the url

    await page.getByRole('textbox', { name: 'First Name' }).pressSequentially('Naveen Automation Labs', { delay: 500 });

    //await page.pause();

});
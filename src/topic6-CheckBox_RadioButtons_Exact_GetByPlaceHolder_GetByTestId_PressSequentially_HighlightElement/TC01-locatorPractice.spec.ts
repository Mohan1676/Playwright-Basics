

import { test, Page, chromium, Browser } from '@playwright/test';


test('radio and checkbox test', async ({ page }) => {
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register'); //enter the url
    await page.getByRole('radio', { name: 'Yes' }).click();
    await page.getByRole('radio', { name: 'No' }).click();
    await page.getByRole('checkbox').click();

    await page.pause();

});


test('text area test', async ({ page }) => {
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=product/product&product_id=42'); //enter the url

    let address = `101, NFC
    new colony,
    south bangalore,
    near petrol pump,
    bangalore, 898989`;

    await page.getByRole('textbox', { name: 'Textarea' }).fill(address);

    await page.pause();

});
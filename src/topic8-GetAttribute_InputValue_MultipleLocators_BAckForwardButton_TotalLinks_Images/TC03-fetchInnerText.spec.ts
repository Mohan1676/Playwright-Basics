import { test } from '@playwright/test';

test('fetching input value', async ({ page }) => {

    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');

    await page.getByRole('textbox', { name: 'First Name' }).fill('Ganesh');

    let firstNameValue = await page
        .getByRole('textbox', { name: 'First Name' })
        .inputValue();

    console.log('The value of the firstname is: ' + firstNameValue);
});''
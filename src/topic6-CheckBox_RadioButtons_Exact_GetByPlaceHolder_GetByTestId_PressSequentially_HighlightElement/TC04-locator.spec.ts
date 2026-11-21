
import { test, Page, chromium, Browser } from '@playwright/test';


test('register page test', async ({ page }) => {
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');

    // await page.getByRole('textbox', { name: 'First Name' }).fill('Naveen');
    // await page.getByRole('textbox', { name: 'Last Name' }).fill('Automation');
    // await page.getByRole('textbox', { name: 'E-Mail' }).fill('naveen@gmail.com');
    // await page.getByRole('button', { name: 'Continue' }).click();

    //await page.getByRole('link', { name: 'Forgotten Password' }).click();//2

    //await page.getByRole('link', { name: 'Forgotten Password' }).last().click();
    await page.getByRole('link', { name: 'Forgotten Password' }).nth(0).click();

    // await page.getByRole('textbox', { name: 'First Name' }).click();

    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');
    let header = await page.locator('text=Register Account').innerText();
    console.log(header);


    await page.pause();

});
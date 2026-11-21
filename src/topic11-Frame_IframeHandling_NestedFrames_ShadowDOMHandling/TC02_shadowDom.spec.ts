
import { test, Page, chromium, Browser, FrameLocator, Frame } from '@playwright/test';

test('Shadow DOM Element test', async ({ page }) => {
    await page.goto('https://naveenautomationlabs.com/opencart/ui/shadow-dom.html'); //web page

    await page.locator('#shadow-btn').click();

    //form
    await page.locator('#username').fill('Naveen Automation Labs');
    await page.getByRole('button', { name: 'Submit' }).click();

    //2 level Shadowm DOM:
    await page.locator('#inner-input').fill('I love PW');

    //close Shadow DOM :
    await page.locator('#closed-input').fill('hey its closed');

    await page.pause();
});
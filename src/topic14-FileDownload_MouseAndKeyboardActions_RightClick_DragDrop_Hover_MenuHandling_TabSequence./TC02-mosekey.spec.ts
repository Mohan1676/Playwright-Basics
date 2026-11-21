


import { test, Page, chromium, Browser, Locator } from '@playwright/test';

test('right context click test', async ({ page }) => {

    await page.goto('https://swisnl.github.io/jQuery-contextMenu/demo.html');

    await page.getByText('right click me', { exact: true }).click({ button: 'right' });

    await page.pause();

    await page.getByText('Copy', { exact: true }).click();

    await page.pause();

});


test('level 2 menu submenu handing', async ({ page }) => {

    await page.goto('https://www.spicejet.com/');

    await page.getByText('Travel Policies', { exact: true }).hover();

    await page.getByText('Passenger Rights', { exact: true }).waitFor({ state: 'visible' });

    await page.getByText('Passenger Rights', { exact: true }).click();

    await page.pause();

});


test('level 4 menu submenu handing', async ({ page }) => {

    await page.goto('https://www.bigbasket.com/');

    await page.getByText('Shop by', { exact: true }).nth(1).click(); //l1
    await page.locator('[id="headlessui-menu-items-:R15d956:"]').getByRole('link', { name: 'Beverages' }).hover();//l2
    await page.locator('[id="headlessui-menu-items-:R15d956:"]').getByRole('link', { name: 'Tea' }).hover();//l3
    await page.locator('[id="headlessui-menu-items-:R15d956:"]').getByRole('link', { name: 'Green Tea' }).click();//l4

    await page.pause();

});


test('drag and drop handing', async ({ page }) => {

    await page.goto('https://jqueryui.com/resources/demos/droppable/default.html');

    let source = page.locator('#draggable');
    let target = page.locator('#droppable');

    await source.dragTo(target);
    await page.pause();
});


test('keyboard Enter handing', async ({ page }) => {

    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');

    let searchBox = page.getByRole('textbox', { name: 'Search' });
    await searchBox.fill('macbook');

    //press enter:
    await searchBox.press('Enter');

    await page.pause();
});



test('keyboard Tab Sequence Accessibility form test', async ({ page }) => {

    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');

    let firstName = page.getByRole('textbox', { name: 'First Name' });
    await firstName.fill('Shruti');

    await page.keyboard.press('Tab');
    await page.keyboard.type('Devani');//LN

    await page.keyboard.press('Tab');
    await page.keyboard.type('Devani1234@gmail.com');//email

    await page.keyboard.press('Tab');
    await page.keyboard.type('8765432343');//tel

    await page.keyboard.press('Tab');
    await page.keyboard.type('Devani@123');//pwd

    await page.keyboard.press('Tab');
    await page.keyboard.type('Devani@123');//con pwd

    await page.keyboard.press('Tab'); //no radio
    await page.keyboard.press('ArrowRight');
    await page.keyboard.press('ArrowRight');

    await page.pause();

    await page.keyboard.press('Tab');//privacy policy link
    await page.keyboard.press('Tab');//checkbox

    await page.keyboard.press('Space');//click on checkbox
    await page.keyboard.press('Enter');//press enter - submit the form



    await page.pause();
});



test('keyboard copy paste test', async ({ page }) => {

    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');

    let firstName = page.getByRole('textbox', { name: 'First Name' });
    await firstName.fill('Shruti');

    //Control+A
    //Meta+A
    //ControlOrMeta+A

    await firstName.press('ControlOrMeta+A');
    await firstName.press('ControlOrMeta+C');

    let lastName = page.getByRole('textbox', { name: 'Last Name' });
    await lastName.press('ControlOrMeta+V');

    await page.waitForTimeout(3000);

    await firstName.press('ControlOrMeta+A');
    await firstName.press('Backspace');

    //hard refresh : control+shift+R
    await page.keyboard.press('ControlOrMeta+Shift+R');

    //open in a new tab/window:
    await page.getByRole('link', { name: 'Forgotten Password', exact: true }).click({ modifiers: ['ControlOrMeta'] });


    await page.pause();
});
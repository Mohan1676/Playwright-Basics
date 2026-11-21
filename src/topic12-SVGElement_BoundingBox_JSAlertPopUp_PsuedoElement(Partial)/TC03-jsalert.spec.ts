



import { test, Page } from '@playwright/test';

test('js alert pop up handle  test', async ({ page }) => {

    // 1 - Alert-- just accept it..
    page.on('dialog', async (popup) => {
        if (popup.type() === 'alert') {
            console.log(popup.message());
            await popup.accept();
        }
    });

    //2 - Confirm -- just accept it..
    page.on('dialog', async (popup) => {
        if (popup.type() === 'confirm') {
            console.log(popup.message());
            await popup.accept(); //click ok
            //await popup.dismiss(); //click cancel
        }
    });

    //3 - Prompt -- pass text and accept it...
    page.on('dialog', async (popup) => {
        if (popup.type() === 'prompt') {
            console.log(popup.message());
            await popup.accept('Naveen Automation Labs...'); //click ok
        }
    });


    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
    await page.getByRole('button', { name: 'Click for JS Alert' }).click();//once -- done
    await page.waitForTimeout(3000);

    await page.getByRole('button', { name: 'Click for JS Confirm' }).click(); //alwys handled
    await page.waitForTimeout(3000);

    await page.getByRole('button', { name: 'Click for JS Prompt' }).click();///alwys handled
    await page.waitForTimeout(3000);

    await page.getByRole('button', { name: 'Click for JS Alert' }).click(); //PW will accept it or it wont be handled

    await page.getByRole('button', { name: 'Click for JS Confirm' }).click(); //alwys handled

    await page.getByRole('button', { name: 'Click for JS Alert' }).click(); //PW will accept it or it wont be handled


    await page.getByRole('button', { name: 'Click for JS Alert' }).click(); //PW will accept it or it wont be handled

    await page.getByRole('button', { name: 'Click for JS Confirm' }).click(); //alwys handled




    //
    //
    //
    //
    //
    //
    //



    await page.pause();
});


import { test, Page, chromium, Browser, Locator, expect } from '@playwright/test';
import fs from 'fs';

test('single file upload test', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/download');

    let [download] = await Promise.all([
        page.waitForEvent('download'),
        page.getByRole('link', { name: 'testfile.txt' }).click()
    ]);

    //during the download, make sure there is no during downloading process
    expect(await download.failure()).toBeNull();

    //get the file name:
    console.log('file name : ', download.suggestedFilename());

    //save to a specific path:
    let filePath = './downloads/' + download.suggestedFilename();
    await download.saveAs(filePath);

    //verify the file exists:
    expect(fs.existsSync(filePath)).toBeTruthy();

    //verify the file size: >0 
    let fileSize = fs.statSync(filePath).size;
    console.log('file size in bytes: ', fileSize);
    expect(fileSize).toBeGreaterThan(0);

    await page.pause();

});
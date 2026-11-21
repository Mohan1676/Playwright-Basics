
import { test, Page, chromium, Browser, Locator, expect } from '@playwright/test';
import fs from 'fs';

test('single file upload test', async ({ page }) => {
    
    await page.goto('https://the-internet.herokuapp.com/download', {waitUntil:'load'});

    let [download] = await Promise.all([
        page.waitForEvent('download'),
        page.getByRole('link', { name: 'testfile.txt' }).click()
    ])
   
    // make sure the downloading process is working correctly or not
    expect(download.failure()).toBeNull()

    // save the file
    let filePath = './download_latest' + download.suggestedFilename()
    download.saveAs(filePath)

    // size of the downlaoded file
    let fileSize = fs.statSync(filePath).size;
    console.log('The file size is: '+ fileSize)

    // verify the file exist or not
    expect(fs.existsSync(filePath)).toBeTruthy()

});
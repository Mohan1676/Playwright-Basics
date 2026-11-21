import { test, Page, chromium, Browser, Locator } from '@playwright/test';

test('single file upload test', async ({ page }) => {

    //it should have type="file" attribute

    await page.goto('https://naveenautomationlabs.com/opencart/ui/file-upload.html');
    await page.locator('#single-file').setInputFiles("/Users/naveenautomationlabs/Downloads/Results.pdf");

    await page.pause();

    await page.locator('#single-file').setInputFiles([]);

    await page.pause();

    // await expect(page.getByText('sample.pdf')).toBeVisible();

});


test('multiple files upload test', async ({ page }) => {

    //it should have type="file" attribute

    await page.goto('https://naveenautomationlabs.com/opencart/ui/file-upload.html');
    await page.locator('#multi-file').setInputFiles([
        "/Users/naveenautomationlabs/Downloads/Results.pdf",
        "/Users/naveenautomationlabs/Downloads/InterviewReport.pdf",
        "/Users/naveenautomationlabs/Downloads/shadow-dom.html"
    ]);

    await page.pause();

});


test('file upload if type file is not present test', async ({ page }) => {

    //if type="file" attribute is not present....

    await page.goto('https://naveenautomationlabs.com/opencart/ui/file-upload.html');

    let [fileUpload] = await Promise.all([
        page.waitForEvent('filechooser'),
        page.locator('#custom-upload-btn').click()
    ]);

    await fileUpload.setFiles([
        "/Users/naveenautomationlabs/Downloads/Results.pdf",
        "/Users/naveenautomationlabs/Downloads/InterviewReport.pdf",
        "/Users/naveenautomationlabs/Downloads/shadow-dom.html"
    ]);
    await page.pause();

    await fileUpload.setFiles(["/Users/naveenautomationlabs/Downloads/Results.pdf",
        "/Users/naveenautomationlabs/Downloads/InterviewReport.pdf",]);

    await page.pause();

});


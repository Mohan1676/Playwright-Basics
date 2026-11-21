
import { test, Page, chromium, Browser, FrameLocator, Frame } from '@playwright/test';

test('Iframe element test', async ({ page }) => {
    await page.goto('https://www.formsite.com/templates/registration-form-templates/vehicle-registration-form/'); //web page

    await page.getByTitle('Vehicle-Registration-Forms-and-Examples').click();//image

    //iframe DOM

    let frameLocator: FrameLocator = page.frameLocator('#frame-one748593425'); //capture the iframe

    await frameLocator.getByRole('textbox', { name: 'Location' }).fill('Bangalore');
    await frameLocator.locator('#RESULT_TextField-1').fill('My Title');

    let header = await page.locator('.details__form-preview-title').innerText();
    console.log(header);

    await page.pause();
});

test('frame test', async ({ page }) => {
    await page.goto('https://www.londonfreelance.org/courses/frames/index.html'); //web page

    let header = await page.frameLocator('[name="main"]').getByRole('heading', { level: 2 }).innerText();
    console.log(header);

    let footer = await page.frameLocator('[name="bot"]').getByRole('heading', { level: 2 }).innerText();
    console.log(footer);

    await page.pause();
});


test('total number of frames test', async ({ page }) => {
    await page.goto('https://www.londonfreelance.org/courses/frames/index.html'); //web page

    let allFrames: Frame[] = page.frames();
    let frameCount = allFrames.length; //9
    console.log(frameCount);

    for (let fr of allFrames) {
        let frameName = fr.name();
        let frameURL = fr.url();
        console.log(frameName, " : ", frameURL);
    }
    await page.pause();
});



test('nested frames test', async ({ page }) => {
    await page.goto('https://www.dezlearn.com/nested-iframes-example/'); //web page


    let parentFrame = page.frameLocator('#parent_iframe');
    let childFrame = parentFrame.frameLocator('#iframe1');

    await childFrame.getByRole('button', { name: 'Click Here' }).click();
    let mesg = await childFrame.locator('#processing').innerText();
    console.log(mesg);

    console.log('----------');

    await parentFrame.getByRole('button', { name: 'Click Here' }).click();
    let outerMesg = await parentFrame.locator('#processing').innerText();
    console.log(outerMesg);


    // await page.frameLocator('#parent_iframe')
    //     .frameLocator('#iframe1')
    //     .getByRole('button', { name: 'Click Here' }).click();


    await page.pause();
});
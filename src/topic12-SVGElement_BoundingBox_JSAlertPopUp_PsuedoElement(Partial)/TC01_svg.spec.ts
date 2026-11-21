

//SVG:
//css selector: normal way
//xpath: regular xpath will not be supported
//local-name() or name()


import { test, Page, chromium, Browser, FrameLocator, Frame, Locator } from '@playwright/test';

test('Flipkart SVG Search Icon element test', async ({ page }) => {
    await page.goto('https://www.flipkart.com/');

    await page.getByRole('textbox', { name: 'Search for Products, Brands' }).fill('Macbook Pro');
    // await page.getByRole('button', { name: 'Search for Products, Brands and More' }).locator('svg[fill="none"]').click();

    await page.getByRole('button', { name: 'Search for Products, Brands and More' }).locator('//*[local-name()="svg"]').click();

    await page.pause();

});


test('SVG Graph element test', async ({ page }) => {
    await page.goto('https://petdiseasealerts.org/forecast-map');

    await page.waitForTimeout(5000);

    //css = svg#map-svg g#regions g.region
    //g.region

    //xpath = //*[local-name()='svg' and @id='map-svg']//*[local-name()='g' and @id='regions']//*[local-name()='g' and @class='region']
    //*[local-name()='g' and @class='region']

    // await page.frameLocator('//iframe[contains(@id,"map-instance")]')

    let frame = page.frameLocator('iframe[id*="map-instance"]');
    let allRegions: Locator[] = await frame.locator('g.region').all();

    console.log('total number of regions: ', allRegions.length);//51

    for (let reg of allRegions) {
        //await reg.hover();

        let box = await reg.boundingBox();
        let centerX = box!.x + box!.width / 2;
        let centerY = box!.y + box!.height / 2;
        await page.mouse.move(centerX, centerY);

        let stateName = await reg.getAttribute('id');
        console.log(stateName);
        await page.waitForTimeout(500);

    }

    await page.pause();
});



import {chromium, test, Browser, Page} from "@playwright/test"

test('Testing', async({page})=>{

// let browser:Browser = await chromium.launch({channel:'chrome', headless:false})
// let page:Page = await browser.newPage();
await page.goto('https://www.google.com')
await page.waitForTimeout(5000);
})


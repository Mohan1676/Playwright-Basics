import { chromium, Browser, BrowserContext, Page} from "@playwright/test"

(async ()=>{
    let browser:Browser = await chromium.launch({channel:'chrome', headless:false})
    let cxt1: BrowserContext = await browser.newContext()

    let page:Page = await browser.newPage();
    
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
    await page.locator('input[id="input-email"]').fill('mohan@mailinator.com')
    await page.locator('input[id="input-password"]').fill('Test@123');
    await page.locator('input[value="Login"]').click()

    await page.context().storageState({path:'storageState.json'})

})();

// import {test,Page} from "@playwright/test"

// test('Storage state', async({browser})=>{

//     let page:Page = await browser.newPage();
//     await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');


//     await page.locator('input[id="input-email"]').fill('mohan@mailinator.com')
//     await page.locator('input[id="input-password"]').fill('Test@123');
//     await page.locator('input[value="Login"]').click()

//     await page.context().storageState({path:'storageState.json'})

// })
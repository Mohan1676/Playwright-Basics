// // IIFE(Immediately invoke function expression) function: config is not applicable.

import { Browser, chromium, Page } from "@playwright/test"

(async()=>{
    let browser:Browser = await chromium.launch({channel:'chrome', headless:false})   
    // let browser:Browser = await chromium.launch({channel:'msedge', headless:false})   
    let page:Page = await browser.newPage()
    await page.goto('https://www.google.com')
    let title:string = await page.title()
    console.log(`The title of the application is: ${title}`)
    let url:string = page.url()
    console.log(`The url of the application is: ${url}`);

    let close:void = await page.close()

})();

// Purpose	                           |                     Command from src
// Run normal TypeScript script	       |                    npx tsx pwbasics.ts
// Run Playwright test	               |                    npx playwright test
// Run a specific Playwright test	   |                    npx playwright test pwbasics.spec.ts



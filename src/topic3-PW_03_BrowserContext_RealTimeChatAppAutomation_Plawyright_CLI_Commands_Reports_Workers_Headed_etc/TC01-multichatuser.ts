

// multi user chat IIFE(Immediate Invoe function expression)


import {Browser, chromium, Page, BrowserContext} from "@playwright/test";

(async()=>{

    let browser:Browser = await chromium.launch({channel:'chrome', headless:false, slowMo:2000})
    
    let ctx1:BrowserContext = await browser.newContext()
    let ctx2:BrowserContext = await browser.newContext()

    let page1: Page = await browser.newPage()
    let page2: Page = await browser.newPage()

    page1.goto("http://localhost:3000/");
    page2.goto("http://localhost:3000/");

    await page1.locator('[data-testid="username-input"]').fill('Mohan')
    await page1.locator('[data-testid="join-btn"]').click()

    await page2.locator('[data-testid="username-input"]').fill('Yeshmitha')
    await page2.locator('[data-testid="join-btn"]').click()


    await page1.locator('[data-testid="message-input"]').fill(`Hi Yeshmitha, How are you?`)
    await page1.locator('[data-testid="send-btn"]').click()

    await page2.locator('[data-testid="message-input"]').fill('Hello Mohan, I am good. Thanks for asking')
    await page2.locator('[data-testid="send-btn"]').click()
})();
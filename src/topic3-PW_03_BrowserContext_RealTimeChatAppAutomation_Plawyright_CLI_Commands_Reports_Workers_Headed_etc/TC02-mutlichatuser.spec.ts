// import {test, BrowserContext,Page} from "@playwright/test"

// test('Multi chat user', async ({browser})=>{

// let ctx1:BrowserContext = await browser.newContext()
// let ctx2:BrowserContext = await browser.newContext()

// let page1: Page = await ctx1.newPage();
// let page2: Page = await ctx1.newPage();

//     page1.goto("http://localhost:3000/");
//     page2.goto("http://localhost:3000/");

//     await page1.locator('[data-testid="username-input"]').fill('Mohan')
//     await page1.locator('[data-testid="join-btn"]').click()

//     await page2.locator('[data-testid="username-input"]').fill('Yeshmitha')
//     await page2.locator('[data-testid="join-btn"]').click()


//     await page1.locator('[data-testid="message-input"]').fill(`Hi Yeshmitha, How are you?`)
//     await page1.locator('[data-testid="send-btn"]').click()

//     await page2.locator('[data-testid="message-input"]').fill('Hello Mohan, I am good. Thanks for asking')
//     await page2.locator('[data-testid="send-btn"]').click()

// })


import { test, BrowserContext, Page } from "@playwright/test";

test('Multi chat user', async ({ browser }) => {

    // Create separate browser contexts for both users
    const ctx1: BrowserContext = await browser.newContext();
    const ctx2: BrowserContext = await browser.newContext();

    // Create separate pages
    const page1: Page = await ctx1.newPage();
    const page2: Page = await ctx2.newPage();

    // Navigate both users to the chat application
    await page1.goto("http://localhost:3000/");
    await page2.goto("http://localhost:3000/");

    await page1.waitForTimeout(2000);

    // User 1: Mohan joins
    await page1.locator('[data-testid="username-input"]').fill("Mohan");
    await page1.waitForTimeout(1000);

    await page1.locator('[data-testid="join-btn"]').click();
    await page1.waitForTimeout(2000);

    // User 2: Yeshmitha joins
    await page2.locator('[data-testid="username-input"]').fill("Yeshmitha");
    await page2.waitForTimeout(1000);

    await page2.locator('[data-testid="join-btn"]').click();
    await page2.waitForTimeout(2000);

    // Mohan sends a message
    await page1.locator('[data-testid="message-input"]')
        .fill("Hi Yeshmitha, How are you?");

    await page1.waitForTimeout(1000);

    await page1.locator('[data-testid="send-btn"]').click();
    await page1.waitForTimeout(2000);

    // Yeshmitha replies
    await page2.locator('[data-testid="message-input"]')
        .fill("Hello Mohan, I am good. Thanks for asking");

    await page2.waitForTimeout(1000);

    await page2.locator('[data-testid="send-btn"]').click();
    await page2.waitForTimeout(5000);

    // Close both browser contexts
    await ctx1.close();
    await ctx2.close();

});

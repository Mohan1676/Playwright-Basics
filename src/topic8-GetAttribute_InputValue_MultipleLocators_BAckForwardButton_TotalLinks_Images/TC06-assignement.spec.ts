import { test, Page, chromium, Browser, Locator } from '@playwright/test';

test('back and forward button simulation test', async ({ page }) => {
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');

    let allLinks: Locator[] = await page.locator('a').all();

    for(let e of allLinks){
        await e.highlight()
        let text:string = (await e.innerText()).trim()
        console.log(text);
        // await page.waitForTimeout(5000)
        if(text==='Transactions'){
            await e.click()
            break
        }
    }
await page.pause()
   
});

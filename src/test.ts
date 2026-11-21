import { Browser, chromium, Page } from "@playwright/test";


(async()=>{
    let browser:Browser = await chromium.launch({channel:'chrome', headless:false})
    let page:Page = await browser.newPage()
    
    await page.goto("https://www.google.com")
    
    let title:string =  await page.title();
    console.log(`The title is: ${title}`)
    
    
    // let url:string =  page.url()
    // console.log(`The url is: ${url}`)

    // await page.close()
    let url:string = page.url()
    console.log(`The url of the application is: ${url}`);

    await page.waitForTimeout(5000);

    let close:void = await page.close()



})();
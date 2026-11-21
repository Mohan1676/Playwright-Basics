
import {test} from "@playwright/test"

test('', async({page})=>{

await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=common/home');
let title:string = await page.title()
console.log(title)

await page.goto('https://www.google.com')
let googleTitle:string = await page.title()
console.log(googleTitle)

await page.goBack()
await page.goForward()

// await page.pause()

})
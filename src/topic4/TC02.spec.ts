import{test} from "@playwright/test"

test.use({storageState: "storageState.json"})

test('Open Cart Home Page Test', async({page})=>{

// await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/account')
await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/edit')
// await page.waitForTimeout(10000)
await page.pause()
})
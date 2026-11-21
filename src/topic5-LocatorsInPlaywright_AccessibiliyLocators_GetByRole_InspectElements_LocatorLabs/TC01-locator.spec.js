import {test} from "@playwright/test"

test('Register page test', async({page})=>{

await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register')

await page.getByRole('textbox', {name:'First Name'}).fill('Ganesh')
await page.getByRole('textbox', {name:'Last Name'}).fill('Kumar')
await page.getByRole('textbox', {name:'E-Mail'}).fill('ganesh@mailinator.com')
await page.getByRole('textbox', {name: 'Telephone'}).fill('9871234789')
await page.getByRole('textbox', {name: 'Password'}).first().fill('Test@123')
await page.getByRole('textbox', {name: 'Password Confirm'}).last().fill('Test@123')

await page.pause()
})
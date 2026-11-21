import {test} from "@playwright/test"

test('Dealing with multiple elements', async({page})=>{

await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login')

// await page.getByRole('link', {name: 'Forgotten Password'}).click()  // Here we will be seeing 2 element how to handle?

// await page.getByRole('link', {name: 'Forgotten Password'}).first().click() // it will first element
// await page.getByRole('link', {name: 'Forgotten Password'}).last().click() // it will last element

await page.getByRole('link', {name: 'Forgotten Password'}).nth(1).click() // It will click based on index and it is second element it start from zero


})
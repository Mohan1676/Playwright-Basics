
import {test, Page} from '@playwright/test'

// test('Handling select Drop down', async({page})=>{

// await page.goto('https://www.magupdate.co.uk/magazine-subscription/phrr')

// await page.locator('input[name="Contact.Circulation"]').last().click()
// await page.getByRole('textbox', { name: 'Title', exact: true }).fill('Playwright automation')
// await page.getByRole('textbox', {name:'Initials'}).fill('Microsoft ')
// await page.getByRole('textbox', {name:'Forename'}).fill('Testing')
// await page.getByRole('textbox', {name:'Surname'}).fill('Microsoft')
// await page.getByRole('textbox', {name:'Internal Routing Code'}).fill('123')
// await page.getByRole('textbox', {name:'Direct Email'}).fill('test@mailinator.com')
// await page.getByRole('textbox', {name:'Job Title'}).fill('QA automation')
// await page.getByRole('textbox', {name:'Company Name'}).fill('Google')
// // await page.locator('#Contact_CountryCode').selectOption('India')
// await page.locator('#Contact_CountryCode').selectOption({value:'IN'})
// await page.getByRole('textbox', {name:'Postcode / Zipcode'}).fill('500081')
// await page.locator('#Question-100034').selectOption('Digital')



// await page.pause()

// })


test('', async({page})=>{

    await page.goto('https://www.jqueryscript.net/demo/Drop-Down-Combo-Tree/')
    await page.locator('#justAnInputBox').click()

    // await page.locator('.comboTreeItemTitle').filter({hasText: 'choice 5'}).first().click()
    selectCheckBox(page, ['choice 5', 'choice 4', 'choice 3', 'choice 6', 'choice 2 3'])
    await page.pause()

})

async function selectCheckBox(page:Page, choices:string[]):Promise<void>{

for(let e of choices){
    await page.locator('.comboTreeItemTitle').filter({hasText: `${e}`}).first().click()
}

}
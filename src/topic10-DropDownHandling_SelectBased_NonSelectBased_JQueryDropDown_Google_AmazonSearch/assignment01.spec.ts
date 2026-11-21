import { test, Page } from '@playwright/test'

test('Creating dynamic multi checkbox scenario', async ({ page }) => {

    await page.goto('https://www.playwrightautomation.com/practice.html?utm_source=chatgpt.com')

    await selectDays(page, ['Sunday', 'Thursday'])

    await page.pause()
})

async function selectDays(page: Page, days: string[]): Promise<void> {

    for (let d of days) {

        console.log('The day is: ' + d)

        await page.locator('label').filter({ hasText: d }).click()
    }
}


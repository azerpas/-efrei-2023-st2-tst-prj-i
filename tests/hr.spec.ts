import { test, expect } from '@playwright/test';

test.beforeEach(async () => {
    const res = await fetch('https://i.hr.dmerej.info/reset_db', {
        method: 'POST'
    })
    test.fail(res.ok === false, 'Failed to reset database')
})

test('has no employee', async ({ page }) => {
    await page.goto('https://i.hr.dmerej.info/employees');

    await expect(page).toHaveTitle(/Employees/);

    const body = await page.$('body')
    const text = await body?.textContent()

    await expect(text).toContain('No employees yet.')
})

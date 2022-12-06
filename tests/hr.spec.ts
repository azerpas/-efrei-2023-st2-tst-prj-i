import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    // Reset database
    await page.goto('https://i.hr.dmerej.info/reset_db')
    const submit = await page.$('button[type="submit"]')
    await submit?.click()
})

test('has no employee', async ({ page }) => {
    await page.goto('https://i.hr.dmerej.info/employees');

    await expect(page).toHaveTitle(/Employees/);

    const body = await page.$('body')
    const text = await body?.textContent()
    
    await expect(text).toContain('No employees yet.')
})

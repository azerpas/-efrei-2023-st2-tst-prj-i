import { test, expect, Page } from '@playwright/test'
import { faker } from '@faker-js/faker'
import { ListTeamsDevPage } from './teams/list-teams-dev-page'

test.beforeEach(async () => {
    const res = await fetch('https://i.hr.dmerej.info/reset_db', {
        method: 'POST'
    })
    test.fail(res.ok === false, 'Failed to reset database')
})

/*
// All tests related to the 'Employees'
test.describe('Employees', () => {
    test('has no employee', async ({ page }) => {
        await page.goto('https://i.hr.dmerej.info/employees')

        await expect(page).toHaveTitle(/Employees/)

        const body = await page.$('body')
        const text = await body?.textContent()

        await expect(text).toContain('No employees yet.')
    })

    const createOneEmployee = async (page: Page) => {
        await page.goto('https://i.hr.dmerej.info/add_employee')

        await expect(page).toHaveTitle(/Add Employee/)
        const date = faker.date.between('2010-01-01T00:00:00.000Z', '2023-01-01T00:00:00.000Z')
        const name = faker.name.firstName()
        const email = faker.internet.email()

        await page.type("#id_name", name)
        await page.type("#id_email", email)
        await page.type("#id_address_line1", faker.address.streetAddress())
        await page.type("#id_city", faker.address.city())
        await page.type("#id_zip_code", faker.address.zipCode())
        await page.type("#id_hiring_date", `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`)
        await page.type("#id_job_title", faker.name.jobTitle())

        await page.click(".btn.btn-primary[type=submit]")

        await page.goto('https://i.hr.dmerej.info/employees')

        const tds = await page.locator('td')
        if (await tds.count() > 0) {
            const text = await (await tds.allTextContents()).join(' ')
            await expect(text).toContain(name)
            await expect(text).toContain(email)
        } else {
            test.fail(false, 'No tbody found')
        }
    }

    test('can create one employee with proper informations', async ({ page }) => {
        await createOneEmployee(page)
    })

})
*/
test.describe('Teams', () => {
    test('has no team', async ({ page }) => {
        const listTeamsDev = new ListTeamsDevPage(page);
        await listTeamsDev.goto();
        await expect(listTeamsDev.page).toHaveTitle(/Teams/);

        const body = await listTeamsDev.page.$('body');
        const text = await body?.textContent();
        const nbTeams = /*listTeamsDev.tableCells.count();*/ await page.locator('td').count();
        expect(nbTeams).toEqual(0);
        expect(text).toContain('No teams yet')
    })
})

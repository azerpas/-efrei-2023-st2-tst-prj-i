// playwright-dev-page.ts
import { expect, Locator, Page } from '@playwright/test';
import { BASE_URL } from '@constants/index'
import { Employee } from '@models/index';

export class CreateEmployeeDevPage {
    readonly page: Page;
    readonly title: string;
    readonly nameInput: Locator;
    readonly addBtn: Locator;
    readonly emailInput: Locator;
    readonly addressLine1Input: Locator;
    readonly addressLine2Input: Locator;
    readonly cityInput: Locator;
    readonly zipCodeInput: Locator;
    readonly hiringDateInput: Locator;
    readonly jobTitleInput: Locator;

    constructor(page: Page) {
        this.page = page;
        this.title = 'HR DB - HR DB - Add Employee'
        this.nameInput = page.locator('#id_name')
        this.emailInput = page.locator('#id_email')
        this.addressLine1Input = page.locator('#id_address_line1')
        this.addressLine2Input = page.locator('#id_address_line2')
        this.cityInput = page.locator('#id_city')
        this.zipCodeInput = page.locator('#id_zip_code')
        this.hiringDateInput = page.locator('#id_hiring_date')
        this.jobTitleInput = page.locator('#id_job_title')
        this.addBtn = page.locator('button', { hasText: 'Add' })
    }

    /**
     * Navigate to the teams page.
     * @returns {Promise<void>}
     */
    async goto() {
        await this.page.goto(`${BASE_URL}/add_employee`);
    }

    async createEmployee(employee: Employee) {
        if (this.page.url() !== `${BASE_URL}/add_employee`) {
            await this.goto()
        }
        await this.nameInput.fill(employee.name)
        await this.emailInput.fill(employee.email)
        await this.addressLine1Input.fill(employee.addressLine1)
        await this.addressLine2Input.fill(employee.addressLine2)
        await this.cityInput.fill(employee.city)
        await this.zipCodeInput.fill(employee.zipCode)
        await this.hiringDateInput.fill(employee.hiringDate)
        await this.jobTitleInput.fill(employee.jobTitle)
        await this.addBtn.click()
    }
}
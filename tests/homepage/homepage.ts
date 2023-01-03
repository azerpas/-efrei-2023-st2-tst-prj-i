import { Page } from '@playwright/test'

export class HomePage {
    readonly page: Page;
    constructor(page: Page) {
        this.page = page;
    }

    async open() {
        await this.page.goto('https://i.hr.dmerej.info/');
    }
    async listEmployees() {
        await this.page.getByText('List Employees').click();
    }

    async addEmployees() {
        await this.page.getByText('Add new employee').click();
    }

    async listTeams() {
        await this.page.getByText('List teams').click();
    }

    async createTeams() {
        await this.page.getByText('Create new team').click();
    }

    async resetDatabase() {
        await this.page.getByText('Reset database').click();
    }
}
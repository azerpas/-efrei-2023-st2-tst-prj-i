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
        await this.page.click('a[routerlink="/employees"]');
    }

    async addEmployees() {
        await this.page.click('a[routerlink="/add_employee"]');
    }

    async listTeams() {
        await this.page.click('a[routerlink="/add_employee"]');
    }

    async createTeams() {
        await this.page.click('a[routerlink="/add_employee"]');
    }

    async resetDatabase() {
        await this.page.click('a[routerlink="/reset_db"]');
    }
}
// playwright-dev-page.ts
import { expect, Locator, Page } from '@playwright/test';
import { BASE_URL } from '@constants/index'

export class CreateTeamDevPage {
    readonly page: Page;
    readonly title: string;
    readonly nameInput: Locator;
    readonly addBtn: Locator;

    constructor(page: Page) {
        this.page = page;
        this.title = 'HR DB - HR DB - Add Team'
        this.nameInput = page.locator('input')
        this.addBtn = page.locator('button', { hasText: 'Add' })
    }

    /**
     * Navigate to the teams page.
     * @returns {Promise<void>}
     */
    async goto() {
        await this.page.goto(`${BASE_URL}/add_team`);
    }

    // TODO: add team etc...
}
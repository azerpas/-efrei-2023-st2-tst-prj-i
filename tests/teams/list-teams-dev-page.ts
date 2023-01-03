// playwright-dev-page.ts
import { expect, Locator, Page } from '@playwright/test';
import { BASE_URL } from '@constants/index'

export class ListTeamsDevPage {
    readonly page: Page;
    readonly title: string;
    readonly tableCells: Locator;
    readonly deleteBtn: Locator;

    constructor(page: Page) {
        this.page = page;
        this.title = 'HR DB - HR DB - Teams'
        this.tableCells = page.locator('td')
        this.deleteBtn = page.locator('button', { hasText: 'Proceed' })
    }

    /**
     * Navigate to the teams page.
     * @returns {Promise<void>}
     */
    async goto() {
        await this.page.goto(`${BASE_URL}/teams`);
    }

    /**
     * Get all table cells content as a string array.
     * We use this method to check if a team is in the table by iterating over the array and checking if the team name is in the array.
     * @returns {Promise<string[]>} all table cells content
     */
    async getTableCellsContent(): Promise<string[]> {
        return await this.tableCells.allTextContents()
    }

    /**
     * Delete a team by id.
     * This page is hidden from the homepage, so we added it to this page object model.
     * @param {number} id - team id
     * @returns {Promise<void>}
     */
    async deleteTeam(id: number) {
        await this.page.goto(`${BASE_URL}/team/delete/${id}`)
        await this.deleteBtn.click()
    }
}
import { expect, Locator, Page } from "@playwright/test";

export class ListEmployeeDevPage {
	readonly page: Page;
	readonly title: Locator;
	readonly editButton: Locator;
	readonly deleteButton: Locator;
	readonly homeButton: Locator;
	readonly textEmptyEmployees: Locator;
	readonly table: Locator;

	constructor(page: Page) {
		this.page = page;
		this.title = page.locator("text=Employees");
		this.editButton = page.locator("button", { hasText: "Edit" });
		this.deleteButton = page.locator("button", { hasText: "Delete" });
		this.homeButton = page.locator("a", { hasText: "Home" });
		this.textEmptyEmployees = page.locator("text=No employees yet.");
		this.table = page.locator("table > thead > tbody");
	}

	async goto() {
		await this.page.goto("https://i.hr.dmerej.info/employees");
	}

	async getTextEmptyEmployees() {
		if (this.table.isVisible()) {
			await expect(this.textEmptyEmployees).not.toBeVisible();
		} else {
			await expect(this.textEmptyEmployees).toBeVisible();
		}
	}

	async getHeader() {
		await expect(this.title).toBeVisible();
		await expect(this.homeButton).toBeVisible();
	}

	async getEditButton() {
		await expect(this.editButton).toBeVisible();
	}

	async getDeleteButton() {
		await expect(this.deleteButton).toBeVisible();
	}

	async getTable() {
		await expect(this.table).toBeVisible();
		await expect(this.table).toHaveText("name");
		await expect(this.table).toHaveText("email");
		await expect(this.table).toHaveText("manager?");
		await expect(this.table).toHaveText("Actions");
		await this.getDeleteButton();
		await this.getEditButton();
	}

	async getTableLength() {
		const tableLength = await this.page.$$eval(
			"table > tbody > tr",
			(rows) => rows.length
		);
		return tableLength;
	}

	async pageObjectModel() {
		await this.getHeader();
		await this.getTextEmptyEmployees();
		await this.getTable();
	}

	async onClickEditButton(idEmployee: number) {
		await this.editButton.click();
		expect(this.page.url()).toBe(
			`https://i.hr.dmerej.info/employees/${idEmployee}/edit`
		);
	}

	async onClickDeleteButton() {
		const tableLengthBeforeDelete = await this.getTableLength();
		await this.deleteButton.click();
		await expect(this.page).toHaveURL("https://i.hr.dmerej.info/employees");
		const tableLengthAfterDelete = await this.getTableLength();
		expect(tableLengthBeforeDelete).toBeGreaterThan(tableLengthAfterDelete);
	}
}

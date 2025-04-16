import { type Page, expect } from '@playwright/test';
import { getCheckBoxLocator } from '../locators/checkbox-locator';

class CheckBoxPage{
    readonly page: Page;
    readonly locators; 

    constructor(page: Page){
        this.page = page; 
        this.locators = getCheckBoxLocator(page);
    }

    async clickOnArrow(index: number){
        await this.locators.arrow.nth(index).click();
    }

    async checkComboBox(value: string){
        await this.locators.checkBoxSelected.filter({ hasText: value }).getByRole('img').first().click();
    }

    async expectResult(value: string){
        await expect(this.locators.labelSelected).toContainText(value);
    }
}
export default CheckBoxPage; 
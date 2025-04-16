import { type Page, expect } from '@playwright/test';
import { getRadioButtonLocator } from '../locators/radio-button=locator';

class RadioButtonPage{
    readonly page: Page;
    readonly locators; 

    constructor(page: Page){
        this.page = page; 
        this.locators = getRadioButtonLocator(page);
    }

    async clickOnYes(){
        await this.locators.rbYes.click();
    }

    async clickOnNo(){
        await this.locators.rbNo.click();
    }

    async clickOnImpressive(){
        await this.locators.rbImpressive.click();
    }
    
    async expectResult(value: string){
        await expect(this.locators.textRB.getByText(value)).toBeVisible();
        await expect(this.locators.textRB).toContainText(value);
    }
}
export default RadioButtonPage; 
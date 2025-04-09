import { type Page, expect } from '@playwright/test';
import { getTextBoxLocator } from '../locators/text-box-locator';

class TextBoxPage {
    readonly page: Page;
    readonly locators; 

    constructor(page: Page){
        this.page = page;
        this.locators = getTextBoxLocator(page);
    }

    async fillName(name: string) {
        await this.locators.fullNameInput.fill(name);
    }

    async fillEmail(email: string){
        await this.locators.emailInput.fill(email);
    }

    async fillCurrentAddress(addressC: string){
        await this.locators.currentAddresInput.fill(addressC);
    }
    
    async fillPermanentAddress(addressP: string){
        await this.locators.permanentAddresInput.fill(addressP);
    }

    async clickBtnSubmit(){
        await this.locators.submitButton.click();
    }

    async expectName(name: string){
        await expect(this.locators.nameOutput).toContainText(`Name:${name}`)
    }

    async expectEmail(email: string){
        await expect(this.locators.emailOutput).toContainText(`Email:${email}`);
    }

    async expectCurrentAddress(addresC: string){
        await expect(this.locators.currentAddressOutput).toContainText(`Current Address :${addresC}`);
    }

    async expectPermanentAddress(addresP: string){
        await expect(this.locators.permanentAddressOutput).toContainText(`Permananet Address :${addresP}`);
    }

    async expectNotVisible(fieldName: string){
        
        switch (fieldName) {
            case 'notName':
                await expect(this.locators.nameOutput).toBeHidden();       
                break;
            case 'notEmail':
                await expect(this.locators.emailOutput).toBeHidden();
                break;
            case 'notCurrent':
                await expect(this.locators.currentAddressOutput).toBeHidden();
                break;
            case 'notPermanent':
                await expect(this.locators.permanentAddressOutput).toBeHidden();
                break;
            default:
                throw new Error(`The field "${fieldName} is not defined`);
        }
    }
}

export default TextBoxPage;
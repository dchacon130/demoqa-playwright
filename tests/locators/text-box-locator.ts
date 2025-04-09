import { Page } from "@playwright/test";

export enum TextBoxLabels { 
    FULL_NAME = 'Full Name',
    EMAIL = 'name@example.com',
    CURRENT_ADDRESS = 'Current Address',
    PERMANENT_ADDRESS = '#permanentAddress',
    SUBMIT = 'Submit',
    NAME_OUTPUT = '#name',
    EMAIL_OUTPUT = '#email',
    CURRENT_ADDRESS_OUTPUT = 'p#currentAddress.mb-1',
    PERMANENT_ADDRESS_OUTPUT = 'p#permanentAddress.mb-1'
}

export const getTextBoxLocator = (page: Page) => ({
    fullNameInput: page.getByRole('textbox', { name: TextBoxLabels.FULL_NAME, exact: true }),
    emailInput: page.getByRole('textbox', { name: TextBoxLabels.EMAIL, exact: true}),
    currentAddresInput: page.getByRole('textbox', { name: TextBoxLabels.CURRENT_ADDRESS, exact: true}), 
    permanentAddresInput: page.locator(TextBoxLabels.PERMANENT_ADDRESS),
    submitButton: page.getByRole('button', { name: TextBoxLabels.SUBMIT, exact: true }),

    nameOutput: page.locator(TextBoxLabels.NAME_OUTPUT),
    emailOutput: page.locator(TextBoxLabels.EMAIL_OUTPUT), 
    currentAddressOutput: page.locator(TextBoxLabels.CURRENT_ADDRESS_OUTPUT),
    permanentAddressOutput: page.locator(TextBoxLabels.PERMANENT_ADDRESS_OUTPUT)
});
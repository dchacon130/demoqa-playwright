import { Page } from "@playwright/test";

export enum CheckBoxLabels { 
    YES = 'Yes',
    IMPRESSIVE = 'Impressive',
    NO = 'No',
    PARAGRAPH = 'paragraph'
}

export const getRadioButtonLocator = (page: Page) => ({
    rbYes: page.getByText(CheckBoxLabels.YES),
    rbNo: page.getByText(CheckBoxLabels.NO),
    rbImpressive: page.getByText(CheckBoxLabels.IMPRESSIVE),
    textRB: page.getByRole(CheckBoxLabels.PARAGRAPH)
});
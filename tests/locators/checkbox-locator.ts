import { Page } from "@playwright/test";

export enum CheckBoxLabels { 
    COLLAPSE_BUTTON = 'button[type="button"].rct-collapse.rct-collapse-btn',
    LABEL = 'label',
    RESULT = '#result',
    IMG = 'img'
}

export const getCheckBoxLocator = (page: Page) => ({
    arrow: page.locator(CheckBoxLabels.COLLAPSE_BUTTON),
    checkBoxSelected: page.locator(CheckBoxLabels.LABEL),
    labelSelected: page.locator(CheckBoxLabels.RESULT),
    img: CheckBoxLabels.IMG
});
import { test } from '@playwright/test';
import urlPages from '../../utils/urlPages';
import RadioButtonPage from '../pages/radio-button-pages';

let radioButtonPage: RadioButtonPage; 

test.beforeEach(async ({ page }) => {
    await page.goto(urlPages.radioButton);
    radioButtonPage = new RadioButtonPage(page);
});

test.describe('Test the radiobuttons in the page', () => {

    test('The user clicks on Yes radio button', async () => {
        await radioButtonPage.clickOnYes();

        await radioButtonPage.expectResult('Yes');
    });

    test('The user clicks on Impressive radio button', async () => {
        await radioButtonPage.clickOnImpressive();

        await radioButtonPage.expectResult('Impressive');
    });
});
import { test } from '@playwright/test';
import urlPages from '../../utils/urlPages';
import CheckBoxPage from '../pages/checkbox-pages';

let checkBoxPage: CheckBoxPage; 

test.beforeEach(async ({ page }) => {
    await page.goto(urlPages.checkbox);
    checkBoxPage = new CheckBoxPage(page);
});

test.describe('Test the checkboxs in the page', () => {

    test('@test The user expand the arrows', async () => {
        await checkBoxPage.clickOnArrow(0);
        await checkBoxPage.clickOnArrow(1);
        await checkBoxPage.clickOnArrow(2);
        await checkBoxPage.clickOnArrow(5);
    });

    test('Check the boxs in Desktop', async () => {
        await checkBoxPage.clickOnArrow(0);
        await checkBoxPage.clickOnArrow(1);
        await checkBoxPage.checkComboBox('Notes');
        await checkBoxPage.checkComboBox('Commands');

        await checkBoxPage.expectResult('notes');
        await checkBoxPage.expectResult('commands');
    });

    test('Check the boxs in Documents', async () => {
        await checkBoxPage.clickOnArrow(0);
        await checkBoxPage.clickOnArrow(2);
        await checkBoxPage.clickOnArrow(3);
        await checkBoxPage.clickOnArrow(4);
        await checkBoxPage.checkComboBox('React');
        await checkBoxPage.checkComboBox('Angular');
        await checkBoxPage.checkComboBox('Veu');
        await checkBoxPage.checkComboBox('Public');
        await checkBoxPage.checkComboBox('Private');
        await checkBoxPage.checkComboBox('Classified');
        await checkBoxPage.checkComboBox('General');

        await checkBoxPage.expectResult('react');
        await checkBoxPage.expectResult('angular');
        await checkBoxPage.expectResult('veu');
        await checkBoxPage.expectResult('public');
        await checkBoxPage.expectResult('private');
        await checkBoxPage.expectResult('classified');
        await checkBoxPage.expectResult('general');
    });
    test('Check the boxs in Download', async () => {
        await checkBoxPage.clickOnArrow(0);
        await checkBoxPage.clickOnArrow(3);

        await checkBoxPage.checkComboBox('Word FIle.doc');
        await checkBoxPage.checkComboBox('Excel File.doc');

        await checkBoxPage.expectResult('wordFile');
        await checkBoxPage.expectResult('excelFile');
    });
});
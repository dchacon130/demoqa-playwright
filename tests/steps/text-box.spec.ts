import { test } from '@playwright/test';
import urlPages from "../../utils/urlPages";
import TextBoxPage from '../pages/text-box-page';
import userInfo from '../data/user-info';

let textBoxPage: TextBoxPage; 

test.beforeEach(async ({page}) => {
    await page.goto(urlPages.texBox);
    textBoxPage = new TextBoxPage(page);
});

test.describe('Test the text-box form', () => {

    test('The user completes the form and send it', async() => {
        await textBoxPage.fillName(userInfo.name);
        await textBoxPage.fillEmail(userInfo.email);
        await textBoxPage.fillCurrentAddress(userInfo.current_address);
        await textBoxPage.fillPermanentAddress(userInfo.permanent_address);
        await textBoxPage.clickBtnSubmit();

        await textBoxPage.expectName(userInfo.name);
        await textBoxPage.expectEmail(userInfo.email);
        await textBoxPage.expectCurrentAddress(userInfo.current_address);
        await textBoxPage.expectPermanentAddress(userInfo.permanent_address);
    });

    test('The user sends the form without Name', async () => {
        await textBoxPage.fillEmail(userInfo.email);
        await textBoxPage.fillCurrentAddress(userInfo.current_address);
        await textBoxPage.fillPermanentAddress(userInfo.permanent_address);
        await textBoxPage.clickBtnSubmit();

        await textBoxPage.expectNotVisible('notName');
        await textBoxPage.expectEmail(userInfo.email);
        await textBoxPage.expectCurrentAddress(userInfo.current_address);
        await textBoxPage.expectPermanentAddress(userInfo.permanent_address);
    });

    test('The user sends the form without Email', async () => {
        await textBoxPage.fillName(userInfo.name);
        await textBoxPage.fillCurrentAddress(userInfo.current_address);
        await textBoxPage.fillPermanentAddress(userInfo.permanent_address);
        await textBoxPage.clickBtnSubmit();

        await textBoxPage.expectName(userInfo.name);
        await textBoxPage.expectNotVisible('notEmail');
        await textBoxPage.expectCurrentAddress(userInfo.current_address);
        await textBoxPage.expectPermanentAddress(userInfo.permanent_address);
    });

    test('The user sends the form without Current Address', async () => {
        await textBoxPage.fillName(userInfo.name);
        await textBoxPage.fillEmail(userInfo.email);        
        await textBoxPage.fillPermanentAddress(userInfo.permanent_address);
        await textBoxPage.clickBtnSubmit();

        await textBoxPage.expectName(userInfo.name);
        await textBoxPage.expectEmail(userInfo.email);
        await textBoxPage.expectNotVisible('notCurrent');
        await textBoxPage.expectPermanentAddress(userInfo.permanent_address);
    });

    test('The user sends the form without Permanent Address', async () => {
        await textBoxPage.fillName(userInfo.name);
        await textBoxPage.fillEmail(userInfo.email);
        await textBoxPage.fillCurrentAddress(userInfo.current_address);
        await textBoxPage.clickBtnSubmit();

        await textBoxPage.expectName(userInfo.name);
        await textBoxPage.expectEmail(userInfo.email);
        await textBoxPage.expectNotVisible('notPermanent');
        await textBoxPage.expectCurrentAddress(userInfo.current_address);        
    });
});
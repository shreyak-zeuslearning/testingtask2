import {test, Page, expect} from '@playwright/test';
import {link} from '../utils/weblinks';

test('01 Test timeout ', async({page})=>{
    test.setTimeout(5000);
    await page.waitForTimeout(10000);
})

test('02 Action timeout', async({page})=>{
    await page.goto(link.booklink);
    page.setDefaultTimeout(3000);
    await page.locator('#not-found').click();
})

test('03 Expect Timeout', async({page})=>{
    await page.goto(link.booklink);

    await expect(page.getByText('Never appears')).toBeVisible({timeout:3000})
});
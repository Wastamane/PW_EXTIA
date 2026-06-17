import { test } from '../fixtures';
import { BrowserContext, expect, Page } from '@playwright/test';


test.describe('Navigation site', () => {

    test.beforeEach(async ({ page, nav, context, browser }) => {
        context = await browser.newContext({
            storageState: 'playwright/.auth/extia-state.json'
        });
        await page.goto(nav.home);
    });

    test('Poc', async ({ page, context }) => {
        const cookies = await context.cookies();
        console.log(cookies);
          await page.getByTestId('close-button').click();
    });

});
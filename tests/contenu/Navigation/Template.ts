import { test } from '../../fixtures'
import { BrowserContext, expect, Page } from '@playwright/test';
import { accepterCookies } from '../../utils/helpers';
import { footerTests } from '../../commun/navigation/footer.spec';
import { enteteTests } from '../../commun/navigation/entête.spec';

test.describe('Accessibilité Lien - Home Page', () => {
    test.beforeEach(async ({ page, nav }) => {
        await page.goto(nav.home);
        await page.waitForLoadState('load');
        await accepterCookies(page);
    });

    enteteTests();
    footerTests();

    test.describe('Contenu Page', () => {
        test('Test', async ({ page }) => { });
    });
// test.describe('Bloc', () => { });
// test.beforeEach(async ({ page }) => { });
// test('Test', async ({ page }) => { });

  
});

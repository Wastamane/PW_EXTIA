import { test } from '../../fixtures';
import { BrowserContext, expect, Page } from '@playwright/test';

async function Check_CookieWall_present(page: Page): Promise<void> {
    await expect(page.getByText('Ce site peut utiliser des')).toBeVisible();
    await expect(page.getByRole('button', { name: 'J\'accepte/I accept' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Je paramètre mes choix/I set' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Je refuse/I decline' })).toBeVisible();
}

async function Check_CookieWall_absent(page: Page): Promise<void> {
    await expect(page.getByText('Ce site peut utiliser des')).not.toBeVisible();
    await expect(page.getByRole('button', { name: 'J\'accepte/I accept' })).not.toBeVisible();
    await expect(page.getByRole('button', { name: 'Je paramètre mes choix/I set' })).not.toBeVisible();
    await expect(page.getByRole('button', { name: 'Je refuse/I decline' })).not.toBeVisible();
}

async function ControlCookies(context: BrowserContext, key: string, awaitedValue: string) {
    const cookies = await context.cookies();
    /* a but de débug */
    //expect(cookies).toBeDefined();
    //console.log(cookies); 
    const controledCookie = cookies.find(
        cookie => cookie.name === key
    );
    expect(controledCookie).toBeDefined();
    expect(controledCookie?.value).toBe(awaitedValue);
}


test.describe('Gestion première connexion - Mur Validation Cookie', () => {

    test.beforeEach(async ({ page, nav }) => {
        await page.goto(nav.home);
    });

    test('Validation des cookies', async ({ page, context }) => {
        await Check_CookieWall_present(page);
        await page.getByRole('button', { name: 'J\'accepte/I accept' }).click();
        await Check_CookieWall_absent(page);
        await ControlCookies(context, 'hasGDPR', 'true');
        await ControlCookies(context, 'allowCountryDetection', 'true');
        await ControlCookies(context, 'gdpr-analytics', 'true');
    });

    test('Rejet des cookies', async ({ page, context }) => {
        await Check_CookieWall_present(page);
        await page.getByRole('button', { name: 'Je refuse/I decline' }).click();
        await Check_CookieWall_absent(page);
        await ControlCookies(context, 'hasGDPR', 'true');
        await ControlCookies(context, 'allowCountryDetection', 'false');
        await ControlCookies(context, 'gdpr-analytics', 'false');
    });

});
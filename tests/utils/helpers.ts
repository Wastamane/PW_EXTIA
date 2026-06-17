import { BrowserContext, expect, Page } from '@playwright/test';

export async function accepterCookies(page) {
    // cloture banderole
    await page.getByRole('button', { name: 'J\'accepte/I accept' }).click();
    // greatplace to work close
    await page.getByTestId('close-button').click();
}
import { test } from '../../fixtures'
import { BrowserContext, expect, Page } from '@playwright/test';
import { accepterCookies } from '../../utils/helpers';
import { Nav } from '../../fixtures/nav';

export function enteteTests() {
    test.describe('Partie Entête', () => {
        test('Lien - Home page', async ({ page, nav }) => {
            await page.getByRole('navigation').getByRole('link', { name: 'Qui sommes-nous' }).click(),
                await page.waitForLoadState('load');
            await expect(page).toHaveURL(url => url.pathname.includes(nav.aboutus));
        });

        test('Lien - Notre expertise', async ({ page, nav }) => {
            await page.getByRole('navigation').getByRole('link', { name: 'Notre expertise' }).click();
            await page.waitForLoadState('load');
            await expect(page).toHaveURL(url => url.pathname.includes(nav.expertise));
        });

        test('Lien - Nos offres', async ({ page, nav }) => {
            await page.getByText('Notre expertiseNos offresNos').hover();
            await page.getByRole('link', { name: 'Nos offres' }).click();
            await page.waitForLoadState('load');
            await expect(page).toHaveURL(url => url.pathname.includes(nav.expertise));
        });

        test('Lien - Nos secteurs', async ({ page, nav }) => {
            await page.getByText('Notre expertiseNos offresNos').hover();
            await page.getByRole('navigation').getByRole('link', { name: 'Nos secteurs' }).click();
            await page.waitForLoadState('load');
            await expect(page).toHaveURL(url => url.pathname.includes(nav.oursectors));
        });

        test('Lien - Nos Poles d\'expertise', async ({ page, nav }) => {
            await page.getByText('Notre expertiseNos offresNos').hover();
            await page.getByRole('link', { name: 'Nos pôles d\'expertise', exact: true }).click();
            await page.waitForLoadState('load');
            await expect(page).toHaveURL(url => url.pathname.includes(nav.expertisecenters));
        });

        test('Lien - Nous rejoindre', async ({ page, nav }) => {
            await Promise.all([
                page.waitForURL(nav.joinus),
                page.getByRole('navigation').getByRole('link', { name: 'Nous rejoindre' }).click(),
            ]);
            await expect(page).toHaveURL(url => url.pathname.includes(nav.joinus));
        });

        test('Lien - Inside Extia', async ({ page, nav }) => {
            await page.getByRole('banner').getByRole('link', { name: 'Inside Extia' }).click();
            await page.waitForLoadState('load');
            await expect(page).toHaveURL(url => url.pathname.includes(nav.inside));
        });

        test('Lien - L\'experience positive', async ({ page, nav }) => {
            await page.getByRole('banner').getByRole('link', { name: 'Inside Extia' }).hover();
            await page.getByRole('link', { name: 'L\'expérience positive' }).click();
            await page.waitForLoadState('load');
            await expect(page).toHaveURL(url => url.pathname.includes(nav.inside));
        });

        test('Lien - Great Place To Work', async ({ page, nav }) => {
            await page.getByRole('banner').getByRole('link', { name: 'Inside Extia' }).hover();
            await page.getByRole('navigation').getByRole('link', { name: 'Great Place to Work®' }).click();
            await page.waitForLoadState('load');
            await expect(page).toHaveURL(url => url.pathname.includes(nav.greatplacetowork));
        });

        test('Lien - L\'entreprise apprenante', async ({ page, nav }) => {
            await page.getByRole('banner').getByRole('link', { name: 'Inside Extia' }).hover();
            await page.getByRole('navigation').getByRole('link', { name: 'L\'entreprise apprenante' }).click();
            await page.waitForLoadState('load');
            await expect(page).toHaveURL(url => url.pathname.includes(nav.learning));
        });

        test('Lien - Les Communautés Extia', async ({ page, nav }) => {
            await page.getByRole('banner').getByRole('link', { name: 'Inside Extia' }).hover();
            await page.getByRole('link', { name: 'Les Communautés Extia' }).click();
            await page.waitForLoadState('load');
            await expect(page).toHaveURL(url => url.pathname.includes(nav.comet));
        });

        test('Lien - Notre écosysteme', async ({ page, nav }) => {
            await page.getByRole('navigation').getByRole('link', { name: 'Notre écosystème' }).click();
            await page.waitForLoadState('load');
            await expect(page).toHaveURL(url => url.pathname.includes(nav.ecosystem));
        });

        test('Lien - L\'écosysteme Extia', async ({ page, nav }) => {
            await page.getByText('Notre écosystèmeL\'écosystème').hover();
            await page.getByRole('link', { name: 'L\'écosystème Extia' }).click();
            await page.waitForLoadState('load');
            await expect(page).toHaveURL(url => url.pathname.includes(nav.ecosystem));
        });

        test('Lien - Notre démarche RSE', async ({ page, nav }) => {
            await page.getByText('Notre écosystèmeL\'écosystème').hover();
            await page.getByRole('navigation').getByRole('link', { name: 'Notre démarche RSE' }).click();
            await page.waitForLoadState('load');
            await expect(page).toHaveURL(url => url.pathname.includes(nav.sustainableadventure));
        });

        test('Lien - L\'actu', async ({ page, nav }) => {
            await Promise.all([
                page.waitForURL(nav.blog),
                page.getByRole('listitem').filter({ hasText: 'L\'actu' }).click(),
            ]);
            await expect(page).toHaveURL(url => url.pathname.includes(nav.blog));
        });

        test('Lien - Contact', async ({ page, nav }) => {
            await page.getByRole('list').getByRole('link', { name: 'Contact' }).click();
            await page.waitForLoadState('load');
            await expect(page).toHaveURL(url => url.pathname.includes(nav.contact));
        });
    });
}
import { test } from '../../fixtures'
import { BrowserContext, expect, Page } from '@playwright/test';
import { accepterCookies } from '../../utils/helpers';
import { Nav } from '../../fixtures/nav';

export function footerTests() {
    test.describe('Partie Pied Page - Metions légales', () => {
        test.beforeEach(async ({ page }) => {
            await page.getByText('Ce site a été conçu avec pour').scrollIntoViewIfNeeded();
        });

        test('Lien - Retour acceuil', async ({ page, nav }) => {
            await page.getByRole('link', { name: 'Logo de l\'entreprise Extia é' }).click();
            await expect(page).toHaveURL(url => url.pathname.includes(nav.home));
        });

        test('Lien - Qui sommes-nous', async ({ page, nav }) => {
            await page.getByRole('link', { name: 'Qui sommes-nous', description: 'Qui sommes-nous', exact: true }).click();
            await expect(page).toHaveURL(url => url.pathname.includes(nav.aboutus));
        });

        test('Lien - Notre expertise', async ({ page, nav }) => {
            await page.getByRole('link', { name: 'Notre expertise', description: 'Notre expertise', exact: true }).click();
            await expect(page).toHaveURL(url => url.pathname.includes(nav.expertise));
        });

        test('Lien - Nos pôles d\'expertises', async ({ page, nav }) => {
            await page.getByRole('link', { name: 'Nos pôles d\'expertises' }).click();
            await expect(page).toHaveURL(url => url.pathname.includes(nav.expertisecenters));
        });

        test('Lien - Nos secteurs', async ({ page, nav }) => {
            const lienSecteur = await page.locator('a[href="/our-sectors"][title="Nos secteurs"]').filter({ hasText: 'Nos secteurs' });
            await lienSecteur.click();
            await expect(page).toHaveURL(url => url.pathname.includes(nav.oursectors));
        });

        test('Lien - Nous rejoindre', async ({ page, nav }) => {
            await Promise.all([
                page.waitForURL(nav.joinus),
                page.getByRole('link', { name: 'Nous rejoindre', description: 'Nous rejoindre', exact: true }).click(),
            ]);
            await expect(page).toHaveURL(url => url.pathname.includes(nav.joinus));
        });

        test('Lien - Inside Extia', async ({ page, nav }) => {
            await page.getByRole('link', { name: 'Inside Extia', description: 'Inside Extia', exact: true }).click();
            await expect(page).toHaveURL(url => url.pathname.includes(nav.inside));
        });

        test('Lien - Great Place to Work', async ({ page, nav }) => {
            await page.getByRole('link', { name: 'Great Place to Work®' }).click();
            await expect(page).toHaveURL(url => url.pathname.includes(nav.greatplacetowork));
        });

        test('Lien - L\'entreprise apprenante', async ({ page, nav }) => {
            await page.getByRole('link', { name: 'L\'entreprise apprenante' }).click();
            await expect(page).toHaveURL(url => url.pathname.includes(nav.learning));
        });

        test('Lien - Les Communautés Métiers', async ({ page, nav }) => {
            await page.getByRole('link', { name: 'Les Communautés Métiers' }).click();
            await expect(page).toHaveURL(url => url.pathname.includes(nav.comet));
        });

        test('Lien - Campus Agile', async ({ page, nav }) => {
            await page.getByRole('link', { name: 'Campus Agile' }).click();
            await expect(page).toHaveURL(url => url.pathname.includes(nav.campusagile));
        });

        test('Lien - Notre écosystème', async ({ page, nav }) => {
            await page.getByRole('link', { name: 'Notre écosystème', description: 'Notre écosystème', exact: true }).click();
            await expect(page).toHaveURL(url => url.pathname.includes(nav.ecosystem));
        });

        test('Lien - Notre démarche RSE', async ({ page, nav }) => {
            await page.getByRole('link', { name: 'Notre démarche RSE' }).click();
            await expect(page).toHaveURL(url => url.pathname.includes(nav.sustainableadventure));
        });

        test('Lien - L\'actu', async ({ page, nav }) => {
            await Promise.all([
                page.waitForURL(nav.blog),
                page.getByRole('link', { name: 'L\'actu', description: 'L\'actu', exact: true }).click(),
            ]);
            await expect(page).toHaveURL(url => url.pathname.includes(nav.blog));
        });

        test('Lien - Contact', async ({ page, nav }) => {
            await page.getByRole('link', { name: 'Contact', description: 'Contact', exact: true }).click();
            await expect(page).toHaveURL(url => url.pathname.includes(nav.contact));
        });

        test('Lien - Vamos', async ({ page, context }) => {
            const [newPage] = await Promise.all([
                context.waitForEvent('page'),
                page.getByRole('link', { name: 'Vamos' }).click(),
            ]);
            await expect(newPage).toHaveURL('https://auth-vamos.extia.fr/login');
        });

        test('Lien - Hora', async ({ page, context }) => {
            // Déclaration Mocking de la page d'arrivée car redirection auto sinon
            await context.route('https://hora.vsactivity.com/', async route => {
                await route.fulfill({
                    status: 200,
                    body: '<h1>Page mockée</h1>',
                });
            });
            // le Test 
            const [newPage] = await Promise.all([
                context.waitForEvent('page'),
                page.getByRole('link', { name: 'Intranet Extia' }).click(),
            ]);
            await expect(newPage).toHaveURL('https://hora.vsactivity.com/');
        });

        test('Lien - Mentions légales', async ({ page, nav }) => {
            await page.getByRole('link', { name: 'Mentions légales' }).click();
            await expect(page).toHaveURL(url => url.pathname.includes(nav.mentionlegales));
        });

        test('Lien - Politique de gestion des données personnelles', async ({ page, nav }) => {
            await page.getByRole('link', { name: 'Politique de gestion des donn' }).click();
            await expect(page).toHaveURL(url => url.pathname.includes(nav.politiquedata));
        });

        test('Lien - Gestion des cookies', async ({ page, nav }) => {
            await page.getByRole('link', { name: 'Gestion des cookies' }).click();
            await expect(page).toHaveURL(url => url.pathname.includes(nav.cookies));
        });
    });
}
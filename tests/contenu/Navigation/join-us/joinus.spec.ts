import { test } from '../../../fixtures'
import { BrowserContext, expect, Page } from '@playwright/test';
import { accepterCookies } from '../../../utils/helpers';

test.describe('Accessibilité Lien - Home Page', () => {
    test.beforeEach(async ({ page, nav }) => {
        await page.goto(nav.joinus);
        await page.locator('.loading').waitFor({
                state: 'hidden',
                timeout: 10000
            });
        await page.waitForLoadState('load');
        await accepterCookies(page);
        
    });

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

    test.describe('Contenu Page', () => {
        test.describe('Bouton - Creer alerte - apparition popup', () => {
            test.beforeEach(async ({ page }) => {
                await page.getByTestId('alert').scrollIntoViewIfNeeded();
                await page.getByTestId('alert').click();
            });
            test('Titre', async ({ page }) => {
                await expect(page.getByRole('heading', { name: 'Alerte job de rêve !' })).toBeVisible();
            });
            test('Texte', async ({ page }) => {
                await expect(page.getByText('Avec cette alerte, plus aucun')).toBeVisible();
            });
            test('Email', async ({ page }) => {
                await expect(page.getByRole('textbox', { name: 'Votre mail' })).toBeVisible();
            });
            test('Domaine', async ({ page }) => {
                await expect(page.getByRole('dialog').getByText('domaine')).toBeVisible();
            });
            test('Metier', async ({ page }) => {
                await expect(page.getByRole('dialog').getByText('métier')).toBeVisible();
            });
            test('Ville', async ({ page }) => {
                await expect(page.getByRole('dialog').getByText('ville')).toBeVisible();
            });
            test('Type Contrat', async ({ page }) => {
                await expect(page.getByRole('dialog').getByText('type de contrat')).toBeVisible();
            });
            test('Gestion data - Checkbox', async ({ page }) => {
                await expect(page.getByRole('checkbox', { name: 'J’accepte que mes données' })).toBeVisible();
            });
            test('Gestion data - Texte', async ({ page }) => {
                await expect(page.getByText('J’accepte que mes données')).toBeVisible();
            });
            test('Gestion data - plus d\'infos', async ({ page }) => {
                await expect(page.getByRole('button', { name: 'Afficher le détail du' })).toBeVisible();
            });
            test('Bouton - Creation alerte', async ({ page }) => {
                const boutonValid = page.getByRole('button', { name: 'Créer mon alerte mail' });
                await expect(boutonValid).toBeVisible();
                await expect(boutonValid).toBeDisabled();
            });
            test('Fermeture', async ({ page }) => {
                await expect(page.getByRole('dialog').getByTestId('close-button')).toBeVisible();
            });

        });

        test.describe('Boutoin - Envoi de candidature - apparition popup', () => {
            test.beforeEach(async ({ page }) => {
                await page.getByTestId('apply').scrollIntoViewIfNeeded();
                await page.getByTestId('apply').click();
            });
            test('Titre', async ({ page }) => {
                await expect(page.getByRole('heading', { name: 'Rejoignez-nous' })).toBeVisible();
            });
            test('Avancement', async ({ page }) => {
                await expect(page.getByText('/ 3')).toBeVisible();
            });
            test('Bloc qui - slogan', async ({ page }) => {
                await expect(page.getByRole('button', { name: 'D\'abord qui' })).toBeVisible();
            });
            test('Bloc qui - Titre', async ({ page }) => {
                await expect(page.getByRole('heading', { name: 'Vos coordonnées' })).toBeVisible();
            });
            test('Nom', async ({ page }) => {
                await expect(page.getByRole('textbox', { name: 'Nom*', exact: true })).toBeVisible();
            });
            test('Prénom', async ({ page }) => {
                await expect(page.getByRole('textbox', { name: 'Prénom*' })).toBeVisible();
            });
            test('Mail', async ({ page }) => {
                await expect(page.getByRole('textbox', { name: 'Email*' })).toBeVisible();
            });
            test('No Telephone', async ({ page }) => {
                await expect(page.getByRole('textbox', { name: 'Ton numéro de téléphone' })).toBeVisible();
            });
            test('Bouton Next Step', async ({ page }) => {
                const boutonValid = page.getByRole('button', { name: 'Étape suivante : votre profil' });
                await expect(boutonValid).toBeVisible();
                await expect(boutonValid).toBeDisabled();
            });
            test('Fermeture popup', async ({ page }) => {
                await expect(page.getByRole('dialog').getByTestId('close-button')).toBeVisible();
            });
        });
    });
    // test('Test', async ({ page }) => { });
    // test.beforeEach(async ({ page }) => { });
    // test.describe('Bloc', () => { });

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
            await page.getByRole('link', { name: 'Nos secteurs' }).click();
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
});

import { test } from '../../fixtures'
import { BrowserContext, expect, Page } from '@playwright/test';
import { accepterCookies } from '../../utils/helpers';

test.describe('Visibilité - Inside Extia page', () => {
    test.beforeEach(async ({ page, nav }) => {
        await page.goto(nav.inside);
        await accepterCookies(page);
    });

    test.describe('Partie Entête', () => {
        test('Lien - Bouton Acceuil', async ({ page }) => {
            await expect(page.getByRole('link', { name: 'Extia logo' })).toBeVisible();
        });

        test('Lien qui somme nous', async ({ page }) => {
            await expect(page.getByRole('navigation').getByRole('link', { name: 'Qui sommes-nous' })).toBeVisible();
        });

        test('Lien - Notre expertise', async ({ page }) => {
            await expect(page.getByRole('navigation').getByRole('link', { name: 'Notre expertise' })).toBeVisible();
        });

        test('Lien - Nous rejoindre', async ({ page }) => {
            await expect(page.getByRole('navigation').getByRole('link', { name: 'Nous rejoindre' })).toBeVisible();
        });

        test('Lien - Inside Extia', async ({ page }) => {
            await expect(page.getByRole('navigation').getByRole('link', { name: 'Inside Extia' })).toBeVisible();
        });

        test('Lien - Notre écosystème', async ({ page }) => {
            await expect(page.getByRole('navigation').getByRole('link', { name: 'Notre écosystème' })).toBeVisible();
        });

        test('Lien - L\'actu', async ({ page }) => {
            await expect(page.getByRole('navigation').getByRole('link', { name: 'L\'actu' })).toBeVisible();
        });

        test('Lien - Contact', async ({ page }) => {
            await expect(page.getByRole('navigation').getByRole('link', { name: 'Contact' })).toBeVisible();
        });

        test('Champ de recherche', async ({ page }) => {
            await expect(page.getByRole('textbox', { name: 'Rechercher...' })).toBeVisible();
        });

    });

    test.describe('Contenu Page', () => {
        test('test', async ({ page }) => {
        });

    });

    test.describe('Partie Pied - Mentions légales', () => {
        test.beforeEach(async ({ page }) => {
            await page.getByText('Ce site a été conçu avec pour').scrollIntoViewIfNeeded();
        });

        test('Presence Bloc', async ({ page }) => {
            await expect(page.locator('div').filter({ hasText: 'Extia FranceRejoignez nos' }).nth(3)).toBeVisible();
        });

        test.describe('Bloc General (1/4)', () => {
            test('Logo lien', async ({ page }) => {
                await expect(page.getByRole('link', { name: 'Logo de l\'entreprise Extia é' })).toBeVisible();
            });

            test('Selecteur Pays', async ({ page }) => {
                await expect(page.getByText('Extia France')).toBeVisible();
            });

            test('Mention rejoignez nos follower', async ({ page }) => {
                await expect(page.getByText('Rejoignez nos followers !')).toBeVisible();
            });

            test.describe('Réseaux sociaux', () => {
                test('Instagram', async ({ page }) => {
                    await expect(page.getByRole('link', { name: 'https://www.instagram.com/' })).toBeVisible();
                });

                test('LinkedIn', async ({ page }) => {
                    await expect(page.getByRole('link', { name: 'https://www.linkedin.com/' })).toBeVisible();
                });

                test('Youtube', async ({ page }) => {
                    await expect(page.getByRole('link', { name: 'https://www.youtube.com/user/' })).toBeVisible();
                });

                test('Twitch', async ({ page }) => {
                    await expect(page.getByRole('link', { description: 'https://www.twitch.tv/extiagaming', exact: true })).toBeVisible();
                });
            });
        });

        test.describe('Bloc liens (2/4)', () => {
            test('Qui somme nous', async ({ page }) => {
                await expect(page.getByRole('link', { name: 'Qui sommes-nous', description: 'Qui sommes-nous', exact: true })).toBeVisible();
            });

            test('Notre expertise', async ({ page }) => {
                await expect(page.getByRole('link', { name: 'Notre expertise', description: 'Notre expertise', exact: true })).toBeVisible();
            });

            test('Nos poles', async ({ page }) => {
                await expect(page.getByRole('link', { name: 'Nos pôles d\'expertises' })).toBeVisible();
            });

            test('Nos secteurs', async ({ page }) => {
                await expect(page.getByRole('link', { name: 'Nos secteurs' })).toBeVisible();
            });

            test('Nous rejoindre', async ({ page }) => {
                await expect(page.getByRole('link', { name: 'Nous rejoindre', description: 'Nous rejoindre', exact: true })).toBeVisible();
            });
        });

        test.describe('Bloc liens (3/4)', () => {
            test('Inside Extia', async ({ page }) => {
                await expect(page.getByRole('link', { name: 'Inside Extia', description: 'Inside Extia', exact: true })).toBeVisible();
            });

            test('Great Place to work', async ({ page }) => {
                await expect(page.getByRole('link', { name: 'Great Place to Work®' })).toBeVisible();
            });

            test('L\'entreprise apprenante', async ({ page }) => {
                await expect(page.getByRole('link', { name: 'L\'entreprise apprenante' })).toBeVisible();
            });

            test('Les communautés Metiers', async ({ page }) => {
                await expect(page.getByRole('link', { name: 'Les Communautés Métiers' })).toBeVisible();
            });

            test('Campus Agile', async ({ page }) => {
                await expect(page.getByRole('link', { name: 'Campus Agile' })).toBeVisible();
            });

            test('Notre ecosysteme', async ({ page }) => {
                await expect(page.getByRole('link', { name: 'Notre écosystème', description: 'Notre écosystème', exact: true })).toBeVisible();
            });

            test('Démarche RSE', async ({ page }) => {
                await expect(page.getByRole('link', { name: 'Notre démarche RSE', description: 'Notre démarche RSE', exact: true })).toBeVisible();
            });
        });

        test.describe('Bloc liens (4/4)', () => {
            test('Actu', async ({ page }) => {
                await expect(page.getByRole('link', { name: 'L\'actu', description: 'L\'actu', exact: true })).toBeVisible();
            });

            test('Contact', async ({ page }) => {
                await expect(page.getByRole('link', { name: 'Contact', description: 'Contact', exact: true })).toBeVisible();
            });

            test('Vamos', async ({ page }) => {
                await expect(page.getByRole('link', { name: 'Vamos' })).toBeVisible();
            });

            test('Intranet Extia', async ({ page }) => {
                await expect(page.getByRole('link', { name: 'Intranet Extia' })).toBeVisible();
            });

            test('Certif GPTW 2026', async ({ page }) => {
                await expect(page.locator('.Footer__Certification-sc-1lpky84-4 > .lazyload-wrapper > img').first()).toBeVisible();
            });

            test('Certif GPTW 2025', async ({ page }) => {
                await expect(page.getByRole('img', { name: 'Logo du label "Best' })).toBeVisible();
            });

            test('Certif Ecovadis', async ({ page }) => {
                await expect(page.locator('div:nth-child(3) > .lazyload-wrapper > img')).toBeVisible();
            });

            test('Certif Global Compact', async ({ page }) => {
                await expect(page.locator('div:nth-child(4) > .lazyload-wrapper > img')).toBeVisible();
            });
        });

        test.describe('Liens légaux', () => {
            test('Mentions légales', async ({ page }) => {
                await expect(page.getByRole('link', { name: 'Mentions légales' })).toBeVisible();
            });

            test('Politique Gestion', async ({ page }) => {
                await expect(page.getByRole('link', { name: 'Politique de gestion des donn' })).toBeVisible();
            });

            test('Gestion Cookies', async ({ page }) => {
                await expect(page.getByRole('link', { name: 'Gestion des cookies' })).toBeVisible();
            });

        });

        test('Mentiosn ecologique', async ({ page }) => {
            await expect(page.getByText('Ce site a été conçu avec pour')).toBeVisible();
        });
    });

}); 
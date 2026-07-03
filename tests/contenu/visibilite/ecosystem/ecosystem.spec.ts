import { test } from '../../../fixtures'
import { BrowserContext, expect, Page } from '@playwright/test';
import { accepterCookies } from '../../../utils/helpers';

test.describe('Visibilité - ecosysteme page', () => {
    test.beforeEach(async ({ page, nav }) => {
        await page.goto(nav.ecosystem);
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
        test('Ecosysteme généralitées', async ({ page }) => {

            await expect(page.locator('div').filter({ hasText: 'L’écosystème ExtiaLe modèle' }).nth(3)).toBeVisible();
            await expect(page.getByRole('heading', { name: 'L’écosystème Extia' })).toBeVisible();
            await expect(page.getByText('Le modèle de l’entreprise é')).toBeVisible();
            await expect(page.getByRole('img', { name: 'Un homme et une femme' })).toBeVisible();
        });

        test.describe('Focus - Team Esport', () => {
            test('Présentation Team', async ({ page }) => {
                /// team Esport
                await page.getByText('L\'équipe Esport d\'ExtiaDé').scrollIntoViewIfNeeded();
                await expect(page.getByText('L\'équipe Esport d\'ExtiaDé')).toBeVisible();
                await expect(page.getByRole('heading', { name: 'L\'équipe Esport d\'Extia' })).toBeVisible();
                await expect(page.getByText('L\'équipe Esport d\'ExtiaDé')).toBeVisible();
                await expect(page.getByRole('img', { name: 'Un groupe de personnes jouant' })).toBeVisible();
                await expect(page.getByRole('link', { name: 'Retrouvez Extia Gaming sur' })).toBeVisible();
            });

            test('Membres', async ({ page }) => {
                /// Membres
                await expect(page.locator('div').filter({ hasText: 'Quelques membres de l\'équipe' }).nth(3)).toBeVisible();
                await expect(page.getByText('Quelques membres de l\'équipe')).toBeVisible();
                await expect(page.getByText('LoïcRé').first()).toBeVisible();
            });

            test('Catalogue de jeux', async ({ page }) => {
                await expect(page.getByText('Les jeux du moment')).toBeVisible();
                await expect(page.locator('.certif-partner-items')).toBeVisible();
            });
        });

        test.describe('Focus - Alumni (réseau entraide)', () => {
            test('Généralité Alumni', async ({ page }) => {
                await page.getByRole('heading', { name: 'La communauté Alumni' }).scrollIntoViewIfNeeded();
                await expect(page.locator('.Community__Wrapper-sc-13vrsca-0 > .Section__Wrapper-sc-1hs0zqy-0 > .sc-bdfBQB > .sc-gsTEea')).toBeVisible();
                await expect(page.getByRole('heading', { name: 'La communauté Alumni' })).toBeVisible();
                await expect(page.getByText('L’aventure continue')).toBeVisible();
                await expect(page.getByText('Toutes les belles histoires d')).toBeVisible();
                await expect(page.getByRole('img', { name: 'Une réunion se déroule autour' })).toBeVisible();
            });

            test('Contact Mail', async ({ page }) => {
                await expect(page.getByRole('link', { name: 'équipe alumni' })).toBeVisible();
            });

            test('Afterworks', async ({ page }) => {
                await page.locator('.Article__Wrapper-sc-1rck6tr-0').first().scrollIntoViewIfNeeded();
                await expect(page.locator('.Article__Wrapper-sc-1rck6tr-0').first()).toBeVisible();
                await expect(page.getByRole('img', { name: 'Ambiance festive lors d’une' })).toBeVisible();
                await expect(page.getByRole('heading', { name: 'Afterworks' })).toBeVisible();
                await expect(page.getByText('Que serait Extia sans ses lé')).toBeVisible();
            });

            test('Réseau', async ({ page }) => {
                await page.getByRole('heading', { name: 'Réseau', exact: true }).scrollIntoViewIfNeeded();
                await expect(page.getByRole('img', { name: 'Deux hommes souriants sont' })).toBeVisible();
                await expect(page.getByRole('heading', { name: 'Réseau', exact: true })).toBeVisible();
                await expect(page.getByText('Last but not least, Alumni')).toBeVisible();
            });

            test('Retour', async ({ page }) => {
                await page.getByRole('heading', { name: 'Ils sont revenus chez Extia' }).scrollIntoViewIfNeeded();
                await expect(page.getByRole('img', { name: 'Gros plan sur les mains d\'une' })).toBeVisible();
                await expect(page.getByRole('heading', { name: 'Ils sont revenus chez Extia' })).toBeVisible();
                await expect(page.getByText('Après quelques temps passés')).toBeVisible();
            });
        });

        test.describe('Focus - Back To School', () => {
            test('Généralités', async ({ page }) => {
                await expect(page.locator('div').filter({ hasText: 'Back to schoolNous' }).nth(4)).toBeVisible();
                await expect(page.getByRole('heading', { name: 'Back to school' })).toBeVisible();
                await expect(page.getByText('Nous accompagnons les é')).toBeVisible();
            });

            test('Futur', async ({ page }) => {
                await page.getByRole('heading', { name: 'S\'engager dans l\'éducation de' }).scrollIntoViewIfNeeded();
                await expect(page.getByRole('img', { name: 'Plusieurs personnes se dé' })).toBeVisible();
                await expect(page.getByRole('heading', { name: 'S\'engager dans l\'éducation de' })).toBeVisible();
                await expect(page.getByText('Le monde change, celui du')).toBeVisible();
            });

            test('Partage', async ({ page }) => {
                await page.getByRole('heading', { name: 'Partager des souvenirs avec' }).scrollIntoViewIfNeeded();
                await expect(page.getByRole('img', { name: 'Des personnes sont assises' })).toBeVisible();
                await expect(page.getByRole('heading', { name: 'Partager des souvenirs avec' })).toBeVisible();
                await expect(page.getByText('Les souvenirs, c’est une')).toBeVisible();
            });

            test('Réseau', async ({ page }) => {
                await page.getByRole('heading', { name: 'Un réseau d’écoles partenaires' }).scrollIntoViewIfNeeded();
                await expect(page.getByRole('img', { name: 'Selfie de deux personnes' })).toBeVisible();
                await expect(page.getByRole('heading', { name: 'Un réseau d’écoles partenaires' })).toBeVisible();
                await expect(page.getByText('Le campus by Extia est aussi')).toBeVisible();
            });
        });


        test.describe('Focus - Event & Community', () => {
            test('x', async ({ page }) => {
                await page.getByText(/Nos prochains événements*/).scrollIntoViewIfNeeded();
                await expect(page.getByText(/Nos prochains événements*/)).toBeVisible();
                await expect(page.getByRole('img', { name: 'Logo "Communautés by extia' })).toBeVisible();
                await expect(page.getByRole('heading', { name: 'Nos prochains événements' })).toBeVisible();
                await expect(page.getByRole('link', { name: 'En savoir plus sur les' })).toBeVisible();
            });
        });
    });

      test.describe('Partie Pied - Menntions légales', () => {
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
                await expect(page.getByRole('link', { name: 'Les Communautés Métiers', exact: true })).toBeVisible();
            });

            test('Campus Agile', async ({ page }) => {
                await expect(page.getByRole('link', { name: 'Campus Agile' })).toBeVisible();
            });

            test('Notre ecosysteme', async ({ page }) => {
                await expect(page.getByRole('link', { name: 'Notre écosystème', description: 'Notre écosystème', exact: true })).toBeVisible();
            });

            test('Démarche RSE', async ({ page }) => {
                await expect(page.getByRole('link', { name: 'Notre démarche RSE' })).toBeVisible();
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
import { test } from '../../../fixtures'
import { BrowserContext, expect, Page } from '@playwright/test';
import { accepterCookies } from '../../../utils/helpers';

test.describe('Visibilité - Inside Extia page', () => {
    test.beforeEach(async ({ page, nav }) => {
        await page.goto(nav.aboutus);
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
        test.describe('Overwiew', () => {
            test('Slogant', async ({ page }) => {
                await expect(page.getByRole('heading', { name: 'D’abord qui,' })).toBeVisible();
                await expect(page.getByRole('heading', { name: 'ensuite quoi !' })).toBeVisible();
            });

            test('Résumé', async ({ page }) => {
                await expect(page.getByText('"D’abord qui, ensuite quoi",')).toBeVisible();
            });

            test('Illustration', async ({ page }) => {
                await expect(page.getByRole('img', { name: 'Trois collègues souriants' })).toBeVisible();
            });
        });

        test.describe('Idée', () => {
            test('Titre', async ({ page }) => {
                await expect(page.getByRole('heading', { name: 'Une idée simple, mais' })).toBeVisible();
            });

            test('Texte', async ({ page }) => {
                await expect(page.getByText('Comment une organisation peut')).toBeVisible();
            });

            test('Illustration', async ({ page }) => {
                await expect(page.getByRole('img', { name: 'Ampoule blanche stylisée en' })).toBeVisible();
            });
        });

        test.describe('Mur entrepreneur', () => {
            test('Titre', async ({ page }) => {
                await expect(page.getByRole('heading', { name: 'Le mur des intrapreneurs' })).toBeVisible();
            });

            test('Texte General', async ({ page }) => {
                await expect(page.getByText('Ce qu’Extia est aujourd’hui,')).toBeVisible();
            });

            test('Arnaud Frey', async ({ page }) => {
                await expect(page.getByRole('img', { name: 'Arnaud Frey' })).toBeVisible();
                await expect(page.getByText('Arnaud Frey').nth(1)).toBeVisible();
                await expect(page.getByText('Aussi compétiteur qu’ingé')).toBeVisible();
            });

            test('Justine', async ({ page }) => {
                await expect(page.getByRole('img', { name: 'Justine' })).toBeVisible();
                await expect(page.getByText('Justine', { exact: true })).toBeVisible();
                await expect(page.getByText('Ambitieuse et intrépide,')).toBeVisible();
            });

            test('Arnaud', async ({ page }) => {
                await expect(page.getByRole('img', { name: 'Arnaud', exact: true })).toBeVisible();
                await expect(page.getByText('Arnaud', { exact: true })).toBeVisible();
                await expect(page.getByText('Engagé à la ville comme à la')).toBeVisible();
            });

            test('Jean-Baptiste', async ({ page }) => {
                await expect(page.getByRole('img', { name: 'Portrait d\'un homme qui a l\'' })).toBeVisible();
                await expect(page.getByText('Jean-Baptiste', { exact: true })).toBeVisible();
                await expect(page.getByText('Avec Jean-Baptiste, une')).toBeVisible();
            });

            test('Marouane', async ({ page }) => {
                await expect(page.getByRole('img', { name: 'Portrait de Marouane, un' })).toBeVisible();
                await expect(page.getByText('Marouane', { exact: true })).toBeVisible();
                await expect(page.getByText('S\'il y a bien un Extien qui a')).toBeVisible();
            });

            test('Perrine', async ({ page }) => {
                await expect(page.getByRole('img', { name: 'Perrine' })).toBeVisible();
                await expect(page.getByText('Perrine', { exact: true })).toBeVisible();
                await expect(page.getByText('Arrivée en stage pour')).toBeVisible();
            });
        });

        test.describe('Bien etre & perf', () => {
            test('Titre', async ({ page }) => {
                await expect(page.getByRole('heading', { name: 'Bien-être et performance' })).toBeVisible();
            });

            test('Texte', async ({ page }) => {
                await expect(page.getByText('Et si bien-être au travail et')).toBeVisible();
            });

            test('Illustration', async ({ page }) => {
                await expect(page.locator('.Image-sc-1gjd8bt-0').first()).toBeVisible();
            });

            test('Hashtags', async ({ page }) => {
                await expect(page.getByText('#people first')).toBeVisible();
                await expect(page.getByText('#confiance')).toBeVisible();
                await expect(page.getByText('#empowerment')).toBeVisible();
            });
        });

        test.describe('Modèle', () => {
            test('Titre', async ({ page }) => {
                await expect(page.getByRole('heading', { name: 'Un modèle qui fonctionne' })).toBeVisible();
            });

            test('Texte', async ({ page }) => {
                await expect(page.getByText('Croissance des effectifs, du')).toBeVisible();
            });

            test('Graphique', async ({ page }) => {
                await expect(page.locator('.Chart__Image-sc-51ve4x-1 > .Image-sc-1gjd8bt-0')).toBeVisible();
            });
        });

        test.describe('Aux manètes', () => {
            test('Titre', async ({ page }) => {
                await expect(page.getByRole('heading', { name: 'Les Extiens aux manettes' })).toBeVisible();
            });

            test('Frise', async ({ page }) => {
                await expect(page.locator('.sc-gsTEea.fllSnL.slider > .sc-dlfnuX')).toBeVisible();
            });
        });

        test.describe('Chiffres', () => {
            test('Titre', async ({ page }) => {
                await expect(page.getByRole('heading', { name: 'Nos chiffres fétiches' })).toBeVisible();
            });

            test('Effectifs', async ({ page }) => {
                await expect(page.getByText('2500Extiens')).toBeVisible();
            });

            test('CA', async ({ page }) => {
                await expect(page.getByText('253M€de chiffres d’affaires')).toBeVisible();
            });

            test('Classement Great Place to Work', async ({ page }) => {
                await expect(page.getByText('1replace au classement Great')).toBeVisible();
            });

            test('Compteur evenements', async ({ page }) => {
                await expect(page.getByText('250événements organisés')).toBeVisible();
            });

            test('Taux formation', async ({ page }) => {
                await expect(page.getByText('%d’Extiens formés chaque année')).toBeVisible();
            });

            test('Pays', async ({ page }) => {
                await expect(page.getByText('8pays')).toBeVisible();
            });
        });

        test.describe('Direction', () => {
            test('Titre', async ({ page }) => {
                await expect(page.getByRole('heading', { name: 'Notre équipe de direction' })).toBeVisible();
            });

            test('Bloc Direction', async ({ page }) => {
                await expect(page.getByText('Arnaud FreyPrésident fondateurBenjamin ReynierDirecteur GénéralEmmanuelle')).toBeVisible();
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
                await expect(page.getByRole('link', { name: 'Les Communautés Métiers' })).toBeVisible();
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
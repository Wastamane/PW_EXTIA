import { test } from '../../../fixtures'
import { BrowserContext, expect, Page } from '@playwright/test';
import { accepterCookies } from '../../../utils/helpers';

test.describe('Visibilité - Expertise', () => {
    test.beforeEach(async ({ page, nav }) => {
        await page.goto(nav.expertise);
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
        test.describe('Introduction', () => {
            test('Titre', async ({ page }) => {
                await expect(page.getByRole('heading', { name: 'Notre expertise' })).toBeVisible();
            });

            test('Sous-titre / Slogan', async ({ page }) => {
                await expect(page.getByRole('heading', { name: 'Une approche agile du conseil' })).toBeVisible();
            });

            test('Texte', async ({ page }) => {
                await expect(page.locator('.sc-gsTEea.hfvcqA.intro--description > .sc-dlfnuX')).toBeVisible();
            });

            test('Bouton Contact', async ({ page }) => {
                await expect(page.getByTestId('contactteams')).toBeVisible();
            });

            test('Illustration', async ({ page }) => {
                await expect(page.getByRole('img', { name: 'Fusée blanche stylisée en 3D' })).toBeVisible();
            });
        });

        test.describe('Details introduction', () => {
            test('Bouton Panel : IT & digital', async ({ page }) => {
                await expect(page.getByRole('button', { name: 'Domain - IT&Digital IT &' })).toBeVisible();
            });

            test('Bouton Panel : Conseil & Transformation', async ({ page }) => {
                await expect(page.getByRole('button', { name: 'Conseil & transformation' })).toBeVisible();
            });

            test.describe('Bloc : IT & Digital (affichage default)', () => {
                test('Texte Explicatif', async ({ page }) => {
                    await expect(page.locator('.sc-dlfnuX.jZlmMr')).toBeVisible();
                });

                test.describe('Boutons de sous chapitres', () => {
                    test('Conduite et pilotage de projet', async ({ page }) => {
                        await expect(page.getByRole('button', { name: 'Conduite et pilotage de projet' })).toBeVisible();
                    });

                    test('Développemnt', async ({ page }) => {
                        await expect(page.getByRole('button', { name: 'Développement' })).toBeVisible();
                    });

                    test('Data, IA & Buisness performance', async ({ page }) => {
                        await expect(page.getByRole('button', { name: 'Data, IA & Business' })).toBeVisible();
                    });

                    test('Cloud & Devops', async ({ page }) => {
                        await expect(page.getByRole('button', { name: 'Cloud & Devops' })).toBeVisible();
                    });

                    test('Sécurité', async ({ page }) => {
                        await expect(page.getByRole('button', { name: 'Sécurité' })).toBeVisible();
                    });

                    test('Infrastructure Managment', async ({ page }) => {
                        await expect(page.getByRole('button', { name: 'Infrastructure Management' })).toBeVisible();
                    });

                    test('Product Managment', async ({ page }) => {
                        await expect(page.getByRole('button', { name: 'Product Management' })).toBeVisible();
                    });

                    test('Industry 4.0', async ({ page }) => {
                        await expect(page.getByRole('button', { name: 'Industry' })).toBeVisible();
                    });

                });
            });

            test.describe('Bloc : Conseil & Transformation', () => {
                test.beforeEach(async ({ page }) => {
                    await page.getByRole('button', { name: 'Conseil & transformation' }).click();
                });

                test('Texte Explicatif', async ({ page }) => {
                    await expect(page.locator('.sc-dlfnuX.jZlmMr')).toBeVisible();
                });

                test.describe('Boutons de sous chapitres', () => {
                    test('Conseil en RH & en transformation', async ({ page }) => {
                        await expect(page.getByRole('button', { name: 'Conseil en RH & en' })).toBeVisible();
                    });

                    test('Learning expeditions & Conférences thématiques', async ({ page }) => {
                        await expect(page.getByRole('button', { name: 'Learning expeditions & Confé' })).toBeVisible();
                    });

                    test('Transformation digitale et Change Managment', async ({ page }) => {
                        await expect(page.getByRole('button', { name: 'Transformation digitale et' })).toBeVisible();
                    });
                });

                test('test', async ({ page }) => {
                });
            });

        });

        test.describe('Secteurs activité', () => {
            test('Titre', async ({ page }) => {
                await expect(page.getByRole('heading', { name: 'Nos secteurs d\'activité' })).toBeVisible();
            });

            test('Introduction bloc', async ({ page }) => {
                await expect(page.getByText('Extia se démarque par son')).toBeVisible();
            });

            test('Liens details', async ({ page }) => {
                await expect(page.getByRole('link', { name: 'Voir tous nos secteurs' })).toBeVisible();
            });

            test.describe('boutons secteurs', () => {
                test('Extia Luxe', async ({ page }) => {
                    await expect(page.getByRole('link', { name: 'Extia Luxe' })).toBeVisible();
                });

                test('Distribution (Retail / E-Commerce)', async ({ page }) => {
                    await expect(page.getByRole('link', { name: 'Distribution (Retail / e-' })).toBeVisible();
                });

                test('Banque, Finance, Assurance', async ({ page }) => {
                    await expect(page.getByRole('link', { name: 'Banque, Finance, Assurance' })).toBeVisible();
                });

                test('Industrie / BTP', async ({ page }) => {
                    await expect(page.getByRole('link', { name: 'Industrie / BTP' })).toBeVisible();
                });

                test('Santé', async ({ page }) => {
                    await expect(page.getByRole('link', { name: 'Santé' })).toBeVisible();
                });

                test('Télécoms', async ({ page }) => {
                    await expect(page.getByRole('link', { name: 'Télécoms' })).toBeVisible();
                });

                test('Service Public', async ({ page }) => {
                    await expect(page.getByRole('link', { name: 'Service Public' })).toBeVisible();
                });

                test('Médias', async ({ page }) => {
                    await expect(page.getByRole('link', { name: 'Médias' })).toBeVisible();
                });

                test('Naval / Défense', async ({ page }) => {
                    await expect(page.getByRole('link', { name: 'Naval / Défense' })).toBeVisible();
                });

                test('Energie / Process', async ({ page }) => {
                    await expect(page.getByRole('link', { name: 'Energie / Process' })).toBeVisible();
                });

                test('Transport', async ({ page }) => {
                    await expect(page.getByRole('link', { name: 'Transport' })).toBeVisible();
                });
            });
        });

        test.describe('Pôles d\'expertise', () => {
            test('Titre', async ({ page }) => {
                await expect(page.getByRole('heading', { name: 'Les pôles d\'expertise' })).toBeVisible();
            });

            test('Hetix', async ({ page }) => {
                await expect(page.locator('.CardExperienceCenter__Card-sc-dli7s4-0').first()).toBeVisible();
            });

            test('Grifix', async ({ page }) => {
                await expect(page.locator('.swiper-slide.swiper-slide-next > .CardExperienceCenter__Card-sc-dli7s4-0')).toBeVisible();
            });

            test('Blend', async ({ page }) => {
                await expect(page.locator('div:nth-child(3) > .CardExperienceCenter__Card-sc-dli7s4-0')).toBeVisible();
            });

        });

        test.describe('Nos Modes d\'engagement', () => {
            test('Titre', async ({ page }) => {
                await expect(page.getByRole('heading', { name: 'Nos modes d\'engagement' })).toBeVisible();
            });

            test.describe('Assistance Technique (chapitre default)', () => {
                test('Onglet', async ({ page }) => {
                    await expect(page.getByText('Assistance technique', { exact: true })).toBeVisible();
                });

                test('Texte', async ({ page }) => {
                    await expect(page.locator('.sc-bdfBQB > div:nth-child(3) > .sc-dlfnuX')).toBeVisible();
                });
            });

            test.describe('Assistance Technique Groupée', () => {
                test.beforeEach(async ({ page }) => {
                    await page.getByText('Assistance technique groupée').click();
                });

                test('Onglet', async ({ page }) => {
                    await expect(page.getByText('Assistance technique groupée', { exact: true })).toBeVisible();
                });

                test('Texte', async ({ page }) => {
                    await page.locator('.mode--description > .markdown').click();
                    await page.getByText('Réalisation de prestations en').click();
                    await page.getByText('Un engagement de moyensUne').click();
                });
            });

            test.describe('Centre de compétances', () => {
                test.beforeEach( async ({ page }) => {
                    await page.getByText('Centre de compétences').click();
                });
                test('Onglet', async ({ page }) => {
                    await expect(page.getByText('Centre de compétences', { exact: true })).toBeVisible();
                });
                test('Texte', async ({ page }) => {
                    await page.locator('.mode--description > .markdown').click();
                    await page.getByText('Mise en place d\'un Centre De').click();
                    await page.getByText('Un engagement de moyensUne').click();
                });
            });

            test.describe('Centre de services', () => {
                test.beforeEach( async ({ page }) => {
                    await page.getByText('Centre de services').click();
                });
                test('Onglet', async ({ page }) => {
                    await expect(page.getByText('Centre de services', { exact: true })).toBeVisible();
                });
                test('Texte', async ({ page }) => {
                    await expect(page.getByText('Mise en place d\'un Centre De')).toBeVisible();
                    await expect(page.getByText('Un engagement de résultats')).toBeVisible();
                    await expect(page.getByText('La livraison d’un produit ou')).toBeVisible();
                    await expect(page.getByText('Le pilotage et les résultats')).toBeVisible();
                    await expect(page.getByText('Un Service Delivery Manager (')).toBeVisible();
                    await expect(page.getByText('Un gains de productivité et l')).toBeVisible();
                    await expect(page.getByText('L\'optimisation de la montée')).toBeVisible();
                    await expect(page.getByText('Quatre modes de facturation')).toBeVisible();
                });
            });

            test.describe('Forfait', () => {
                test.beforeEach( async ({ page }) => {
                    await page.getByText('Forfait', { exact: true }).click();
                });
                test('Onglet', async ({ page }) => {
                    await expect(page.getByText('Forfait', { exact: true })).toBeVisible();
                });
                test('test', async ({ page }) => {
                    await expect(page.getByText('Réalisation de projets au Forfait comprenant :Un engagement de résultatsLa')).toBeVisible();
                });
            });

        });

        test.describe('Labels & Certifications', () => {
            test('Titre', async ({ page }) => {
                await expect(page.getByRole('heading', { name: 'Nos labels & certifications' })).toBeVisible();
            });

            test('Intro Bloc', async ({ page }) => {
                await expect(page.getByText('Notre savoir-faire et l’')).toBeVisible();
            });

            test.describe('Certification', () => {
                test('ISO 9001', async ({ page }) => {
                    await expect(page.locator('div').filter({ hasText: /^ISO 9001$/ })).toBeVisible();
                });

                test('ISO 27001', async ({ page }) => {
                    await expect(page.locator('div').filter({ hasText: /^ISO 27001$/ })).toBeVisible();
                });

                test('ISO 45001', async ({ page }) => {
                    await expect(page.locator('div').filter({ hasText: /^ISO 45001$/ })).toBeVisible();
                });

                test('Ecovadis', async ({ page }) => {
                    await expect(page.locator('div').filter({ hasText: /^Ecovadis$/ })).toBeVisible();
                });

                test('Great Place to Work', async ({ page }) => {
                    await expect(page.locator('div').filter({ hasText: /^Great Place to Work®$/ })).toBeVisible();
                });

                test('Pact Mondial des Nations Unies', async ({ page }) => {
                    await expect(page.locator('div').filter({ hasText: /^Pact Mondial des Nations Unies$/ })).toBeVisible();
                });

                test('Great Place to Work in Tech', async ({ page }) => {
                    await expect(page.locator('div').filter({ hasText: /^Great Place To Work in Tech$/ })).toBeVisible();
                });
            });

            test.describe('Conclusion Page', () => {
                test('Phrase d\'accroche', async ({ page }) => {
                    await expect(page.getByText('Envie de travailler avec nous')).toBeVisible();
                });

                test('Bouton Contact', async ({ page }) => {
                    await expect(page.getByRole('button', { name: 'Contacter nos équipes' }).nth(1)).toBeVisible();
                });
            });
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
                await expect(page.getByRole('link', { name: 'Nos secteurs', description: 'Nos secteurs', exact: true })).toBeVisible();
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
                await expect(page.locator('.Footer__Certifications-sc-1lpky84-3 > div:nth-child(3) > .lazyload-wrapper > img')).toBeVisible();
            });

            test('Certif Global Compact', async ({ page }) => {
                await expect(page.locator('.Footer__Certifications-sc-1lpky84-3 > div:nth-child(4) > .lazyload-wrapper > img')).toBeVisible();
                await expect(page.locator('.Footer__Certifications-sc-1lpky84-3 > div:nth-child(4) > .lazyload-wrapper > img')).toBeVisible();
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
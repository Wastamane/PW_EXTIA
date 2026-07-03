import { test } from '../../fixtures'
import { BrowserContext, expect, Page } from '@playwright/test';
import { accepterCookies } from '../../utils/helpers';

test.describe('Accessibilité Lien - Home Page', () => {
    test.beforeEach(async ({ page, nav }) => {
        await page.goto(nav.home);
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
        test.describe('Clic lien - Candidat', () => {
            test.beforeEach(async ({ page }) => {
                await expect(page.getByRole('button', { name: 'Un candidat' })).toBeVisible();
                await page.getByRole('button', { name: 'Un candidat' }).click();
            });

            test('Check URL - arrivée', async ({ page }) => {
                const url = new URL(page.url());
                await expect(page).toHaveURL(/profile=candidate/);
            });

            test.describe('Bloc Intro - Apparition', () => {
                test('Titre - Visibilité', async ({ page }) => {
                    await expect(page.locator('span').filter({ hasText: 'D\'abord qui' })).toBeVisible();
                });

                test('Texte - Visibilité', async ({ page }) => {
                    await expect(page.getByText('Nous avons coutume de dire')).toBeVisible();
                });

                test('Lien découvrir notre histoire - visibilité', async ({ page }) => {
                    await expect(page.getByRole('link', { name: 'Découvrir notre histoire' })).toBeVisible();
                });

                test('Lien découvrir notre histoire - Navigation', async ({ page, nav }) => {
                    await page.getByRole('link', { name: 'Découvrir notre histoire' }).click();
                    await expect(page).toHaveURL(nav.aboutus);
                });

            });

            test.describe('Bloc Offre emploi', () => {
                test.beforeEach(async ({ page }) => {
                    await page.getByRole('heading', { name: 'Rejoignez-nous !' }).scrollIntoViewIfNeeded();
                });

                test('Bloc - Offre emploi - Apparition', async ({ page }) => {
                    await expect(page.getByRole('heading', { name: 'Rejoignez-nous !' })).toBeVisible();
                });

                test('Une Offre - Apparition ', async ({ page }) => {
                    await expect(page.getByRole('main')).toMatchAriaSnapshot(`
                      - paragraph: IT
                      `);

                });

                test('lien Voir les opportunités - Apparition ', async ({ page }) => {
                    await expect(page.getByRole('link', { name: 'Voir toutes les opportunités' })).toBeVisible();
                });

                test('lien Voir les opportunités - Navigation ', async ({ page, nav }) => {
                    await page.getByRole('link', { name: 'Voir toutes les opportunités' }).click();
                    await page.waitForLoadState('load');
                    await expect(page).toHaveURL(nav.joinus);
                });
            });

            test.describe('Bloc experience positive - Apparition', () => {
                test('Titre - Apparition', async ({ page }) => {
                    await expect(page.getByRole('heading', { name: 'L’expérience positive by Extia' })).toBeVisible();
                });

                test('Texte - Apparition', async ({ page }) => {
                    await expect(page.getByText('Notre ambition est immense :')).toBeVisible();
                });

                test('Lien Ambition - Apparition', async ({ page }) => {
                    await expect(page.getByRole('link', { name: 'Tout savoir sur notre ambition' })).toBeVisible();
                });

                test('Lien Ambition - Navigation', async ({ page, nav }) => {
                    await page.getByRole('link', { name: 'Tout savoir sur notre ambition' }).click();
                    await expect(page).toHaveURL(nav.inside);
                });
            });

            test.describe('Bloc Actu', () => {
                test('Titre - Apparition', async ({ page }) => {
                    await expect(page.getByRole('heading', { name: 'Nos dernières actualités' })).toBeVisible();
                });

                // TODO tester les cartes dynamiques 

                test('Actualité - Apparition', async ({ page }) => {
                    await expect(page.getByRole('link', { name: 'Suivre l’actualité d’Extia' })).toBeVisible();
                });

                test('Actualité - Navigation', async ({ page, nav }) => {
                    await page.getByRole('link', { name: 'Suivre l’actualité d’Extia' }).click();
                    await page.waitForLoadState('load');
                    await expect(page).toHaveURL(nav.blog);
                });
            });
        });

        test.describe('Clic lien - Client', () => {
            test.beforeEach(async ({ page }) => {
                await expect(page.getByRole('button', { name: 'Un client' })).toBeVisible();
                await page.getByRole('button', { name: 'Un client' }).click();
            });

            test('Check URL - arrivée', async ({ page }) => {
                const url = new URL(page.url());
                await expect(page).toHaveURL(/profile=client/);
            });

            test.describe('Bloc Intro', () => {
                test('Titre - Visibilité', async ({ page }) => {
                    await expect(page.locator('span').filter({ hasText: 'D\'abord qui' })).toBeVisible();
                });

                test('Texte - Visibilité', async ({ page }) => {
                    await expect(page.getByText('Dans un monde qui change en')).toBeVisible();
                });

                test('Lien découvrir notre histoire - visibilité', async ({ page }) => {
                    await expect(page.getByRole('link', { name: 'Découvrir notre histoire' })).toBeVisible();
                });

                test('Lien découvrir notre histoire - Navigation', async ({ page, nav }) => {
                    await page.getByRole('link', { name: 'Découvrir notre histoire' }).click();
                    await page.waitForLoadState('load');
                    await expect(page).toHaveURL(nav.aboutus);
                });
            });

            test.describe('Bloc Domaines activité', () => {
                test('Titre - Apparition', async ({ page }) => {
                    await expect(page.locator('span').filter({ hasText: 'Ensuite quoi' })).toBeVisible();
                });

                test('Carte IT & Digital - Apparition', async ({ page }) => {
                    await expect(page.getByText('En savoir plusIT & digitalLes')).toBeVisible();
                    await expect(page.getByText('IT & digital', { exact: true })).toBeVisible();

                });

                test('Carte IT & Digital - Navigation', async ({ page }) => {
                    await page.getByText('IT & digital', { exact: true }).click();
                    await page.waitForLoadState('load');
                    // TODO Check apparition infos bonus 
                });

                test('Carte Conseil Transformation - Apparition', async ({ page }) => {
                    await expect(page.getByText('En savoir plusConseil &')).toBeVisible();
                    await expect(page.getByText('Conseil & transformation')).toBeVisible();
                });

                test('Carte Conseil Transformation - Navigation', async ({ page }) => {
                    await page.getByText('Conseil & transformation').click();
                    await page.waitForLoadState('load');
                    // TODO Check apparition infos bonus 
                });

                test('Bloc clients - Apparition', async ({ page }) => {
                    await expect(page.locator('.Company__Wrapper-sc-1gn38tw-0')).toBeVisible();
                });
            });


            test.describe('Bloc localisation - Apparition', () => {
                test.beforeEach(async ({ page }) => {
                    await page.getByRole('heading', { name: 'Où nous trouver ?' }).scrollIntoViewIfNeeded();
                });

                test('Titre - Apparition', async ({ page }) => {
                    await expect(page.getByRole('heading', { name: 'Où nous trouver ?' })).toBeVisible();
                });

                test('Map - Apparition', async ({ page }) => {
                    await expect(page.locator('.lazyload-wrapper > .Image-sc-1gjd8bt-0').first()).toBeVisible();
                });

                test('Lien agences - Apparition', async ({ page }) => {
                    await expect(page.getByRole('link', { name: 'Découvrir nos agences' })).toBeVisible();
                });

                test('Lien agences - Navigation', async ({ page, nav }) => {
                    await page.getByRole('link', { name: 'Découvrir nos agences' }).click();
                    await page.waitForLoadState('load');
                    await expect(page).toHaveURL(nav.contact);
                });
            });

            test.describe('Bloc Contact', () => {
                test('Titre - Apparition', async ({ page }) => {
                    await expect(page.getByRole('heading', { name: 'Échangeons ensemble' })).toBeVisible();
                });

                test('Texte - Apparition', async ({ page }) => {
                    await expect(page.getByText('Vous avez un projet, des')).toBeVisible();
                });

                test('Lien Contact - Apparition', async ({ page }) => {
                    await expect(page.getByRole('link', { name: 'Contacter nos équipes' })).toBeVisible();
                });

                test('Lien Contact - Navigation', async ({ page, nav }) => {
                    await page.getByRole('link', { name: 'Contacter nos équipes' }).click();
                    await page.waitForLoadState('load');
                    await expect(page).toHaveURL(nav.contact);
                });
            });
        });

        test.describe('Clic lien - Extien', () => {
            test.beforeEach(async ({ page }) => {
                await expect(page.getByRole('link', { name: 'Un Extien' })).toBeVisible();
                await page.getByRole('link', { name: 'Un Extien' }).click();
            });

            test('Check URL - arrivée', async ({ page }) => {
                const url = new URL(page.url());
                await expect(page).toHaveURL(/profile=extian/);
            });

            test.describe('Bloc environnemnt Utile', () => {
                test.beforeEach(async ({ page }) => {
                    await page.getByRole('heading', { name: 'Ton terrain de jeu' }).scrollIntoViewIfNeeded();
                });

                test('Titre', async ({ page }) => {
                    await expect(page.getByRole('heading', { name: 'Ton terrain de jeu' })).toBeVisible();
                });

                // TODO ajouter les tests navigation bloc + Clic liens 

                test('Texte', async ({ page }) => {
                    await expect(page.getByText('Bienvenue dans ton écosystème')).toBeVisible();
                });

                test('CSE', async ({ page }) => {
                    await expect(page.getByRole('img', { name: 'CSE' }).nth(1)).toBeVisible();
                });

                test('HORA', async ({ page }) => {
                    await expect(page.getByRole('img', { name: 'hora' }).nth(1)).toBeVisible();
                });

                test('Vamos', async ({ page }) => {
                    await expect(page.getByRole('img', { name: 'Vamos' }).nth(1)).toBeVisible();
                });

                test('Campus Agile', async ({ page }) => {
                    await expect(page.getByRole('img', { name: 'Campus Agile' }).nth(1)).toBeVisible();
                });

                test('Communauté Metier', async ({ page }) => {
                    await expect(page.getByRole('img', { name: 'Communautés Métiers' }).nth(1)).toBeVisible();
                });

                test('Wenabi', async ({ page }) => {
                    await expect(page.getByRole('img', { name: 'Wenabi' }).nth(1)).toBeVisible();
                });
            });

            test.describe('Bloc Manifeste Extia', () => {
                test.beforeEach(async ({ page }) => {
                    await page.getByRole('heading', { name: 'Manifeste Extia' }).scrollIntoViewIfNeeded();
                });

                test('Titre - Apparition', async ({ page }) => {
                    await expect(page.getByRole('heading', { name: 'Manifeste Extia' })).toBeVisible();
                });

                test('Carte - Reste toi-même - Apparition', async ({ page }) => {
                    await expect(page.getByRole('button', { name: 'Reste toi-même' })).toBeVisible();
                });

                test('Carte - Amuse toi - Apparition', async ({ page }) => {
                    await expect(page.getByRole('button', { name: 'rande foule diversifiée' })).toBeVisible();
                });

                test('Carte - Apprends de tes erreurs - Apparition', async ({ page }) => {
                    await expect(page.getByRole('button', { name: 'Apprends de tes erreurs' })).toBeVisible();
                });

                // TODO Autres elements obliés dans la captiure 

                test('Lien detail Valeurs - Apparition', async ({ page }) => {
                    await expect(page.getByRole('link', { name: 'Tout savoir sur nos valeurs' })).toBeVisible();
                });

                test('Lien detail Valeurs - Navigation', async ({ page, nav }) => {
                    await page.getByRole('link', { name: 'Tout savoir sur nos valeurs' }).click();
                    await page.waitForLoadState('load');
                    await expect(page).toHaveURL(nav.inside);
                });
            });

            test.describe('Bloc Actu', () => {
                test.beforeEach(async ({ page }) => {
                    await page.getByRole('heading', { name: 'Nos dernières actualités' }).scrollIntoViewIfNeeded();
                })

                test('Titre - Apparition', async ({ page }) => {
                    await expect(page.getByRole('heading', { name: 'Nos dernières actualités' })).toBeVisible();
                });

                // TODO ajouter tests des elements dynamiques 

                test('Lien Detail actu - Apparition', async ({ page }) => {
                    await expect(page.getByRole('link', { name: 'Suivre l’actualité d’Extia' })).toBeVisible();
                });

                test('Lien Detail actu - Navigation', async ({ page, nav }) => {
                    await page.getByRole('link', { name: 'Suivre l’actualité d’Extia' }).scrollIntoViewIfNeeded();
                    await Promise.all([
                        page.getByRole('link', { name: 'Suivre l’actualité d’Extia' }).click(),
                        page.waitForURL(nav.blog),
                    ]);
                    await expect(page).toHaveURL(nav.blog);
                });
            });

            test.describe('Bloc Vitrine réseau', () => {
                test('Titre - Apparition', async ({ page }) => {
                    await expect(page.getByRole('heading', { name: 'En direct sur nos réseaux !' })).toBeVisible();
                });
            });

            test.describe('Bloc Aller plus loin', () => {
                test.beforeEach(async ({ page }) => {
                    await page.getByRole('heading', { name: 'Quelle est la suite ?' }).scrollIntoViewIfNeeded();
                });

                test('Titre - Apparition', async ({ page }) => {
                    await expect(page.getByRole('heading', { name: 'Quelle est la suite ?' })).toBeVisible();
                });

                test('Actu - Apparition', async ({ page }) => {
                    await expect(page.locator('div').filter({ hasText: /^J'aimerais connaître nos dernières actus$/ }).nth(1)).toBeVisible();
                });

                test('Actu - Navigation', async ({ page, nav }) => {
                    await page.locator('div').filter({ hasText: /^J'aimerais connaître nos dernières actus$/ }).nth(1).click();
                    await page.waitForLoadState('load');
                    await expect(page).toHaveURL(nav.blog);
                    await expect(page).toHaveURL(/page=1/);
                });

                test('Entreprise Apprenante - Apparition', async ({ page }) => {
                    await expect(page.getByRole('link', { name: 'Cube Rubik 3x3 avec des faces' })).toBeVisible();
                });

                test('Entreprise Apprenante - Navigation', async ({ page, nav }) => {
                    await page.getByRole('link', { name: 'Cube Rubik 3x3 avec des faces' }).click();
                    await page.waitForLoadState('load');
                    await expect(page).toHaveURL(nav.learning);
                });

                test('Politique RSE - Apparition', async ({ page }) => {
                    await expect(page.getByRole('link', { name: 'Petite plante verte stylisée' })).toBeVisible();
                });

                test('Politique RSE - Navigation', async ({ page, nav }) => {
                    await page.getByRole('link', { name: 'Petite plante verte stylisée' }).click();
                    await page.waitForLoadState('load');
                    await expect(page).toHaveURL(nav.sustainableadventure);
                });
            });

            test.describe('Bloc Réseaux', () => {
                test.beforeEach(async ({ page }) => {
                    await page.getByRole('link', { name: 'Logo de l\'entreprise Extia é' }).scrollIntoViewIfNeeded();
                    //await page.getByText('Rejoignez nos').scrollIntoViewIfNeeded();
                });

                test('Titre - Apparition', async ({ page }) => {
                    await expect(page.getByText('Rejoignez nos')).toBeVisible();
                });

                // TODO TEster le : compteur de flollower

                test('Instagram - Apparition', async ({ page }) => {
                    await expect(page.getByRole('link', { name: 'https://www.instagram.com/' })).toBeVisible();
                });

                test('Instagram - Navigation', async ({ page, context }) => {
                    await expect(page.getByRole('link', { name: 'https://www.instagram.com/' })).toBeVisible();
                    const [newPage] = await Promise.all([
                        context.waitForEvent('page'),
                        await page.getByRole('link', { name: 'https://www.instagram.com/' }).click(),
                    ]);
                    await newPage.waitForLoadState();
                    await expect(newPage).toHaveURL('https://www.instagram.com/extia_conseil/?hl=fr');

                });

                test('Linkedin - Apparition', async ({ page }) => {
                    await expect(page.getByRole('link', { name: 'https://www.linkedin.com/' })).toBeVisible();
                });

                test('Linkedin - navigation', async ({ page, context }) => {
                    await expect(page.getByRole('link', { name: 'https://www.linkedin.com/' })).toBeVisible();
                    const [newPage] = await Promise.all([
                        context.waitForEvent('page'),
                        page.getByRole('link', { name: 'https://www.linkedin.com/' }).click(),
                    ]);
                    await newPage.waitForLoadState();
                    await expect(newPage).toHaveURL('https://www.linkedin.com/company/extia');
                });

                test('Youtube - Apparition', async ({ page }) => {
                    await expect(page.getByRole('link', { name: 'https://www.youtube.com/user/' })).toBeVisible();
                });

                test('Youtube - Navigation', async ({ page, context }) => {
                    await expect(page.getByRole('link', { name: 'https://www.youtube.com/user/' })).toBeVisible();
                    await context.route('https://www.youtube.com/user/talentsextia', async route => {
                        await route.fulfill({
                            status: 200,
                            body: '<h1>Page mockée</h1>',
                        });
                    });

                    const [newPage] = await Promise.all([
                        context.waitForEvent('page'),
                        await page.getByRole('link', { name: 'https://www.youtube.com/user/' }).click(),
                    ]);
                    await newPage.waitForLoadState();
                    await expect(newPage).toHaveURL('https://www.youtube.com/user/talentsextia');
                });

                test('Twitch - Apparition', async ({ page }) => {
                    await expect(page.getByRole('link', { name: 'Logo de Twitch, une' })).toBeVisible();
                });

                test('Twitch - navigation', async ({ page, context }) => {
                    await expect(page.getByRole('link', { name: 'Logo de Twitch, une' })).toBeVisible();
                    const [newPage] = await Promise.all([
                        context.waitForEvent('page'),
                        await page.getByRole('link', { name: 'Logo de Twitch, une' }).click(),
                    ]);
                    await newPage.waitForLoadState();
                    await expect(newPage).toHaveURL('https://www.twitch.tv/extiagaming');
                });
            });
        });
    });


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

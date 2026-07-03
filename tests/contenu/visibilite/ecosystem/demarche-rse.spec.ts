import { test } from '../../../fixtures'
import { BrowserContext, expect, Page } from '@playwright/test';
import { accepterCookies } from '../../../utils/helpers';

test.describe('Visibilité - Inside Extia page', () => {
    test.beforeEach(async ({ page, nav }) => {
        await page.goto(nav.sustainableadventure);
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
        test.describe('Bloc Intro', () => {
            test('Titre', async ({ page }) => {
                await expect(page.getByRole('heading', { name: 'Les Extiens s’engagent' })).toBeVisible();
            });

            test('Texte (1/3)', async ({ page }) => {
                await expect(page.getByText('Engagés : un adjectif clé')).toBeVisible();
            });

            test('Texte (2/3)', async ({ page }) => {
                await expect(page.getByText('La personne au centre des')).toBeVisible();
            });

            test('Texte (3/3)', async ({ page }) => {
                await expect(page.getByText('Découvrez nos engagements en')).toBeVisible();
            });

            test('Illustration', async ({ page }) => {
                await expect(page.getByRole('img', { name: 'Un homme et une femme sont' })).toBeVisible();
            });
        });

        test.describe('Bloc - Projets d\'initiative', () => {
test.beforeEach(async ({ page }) => {
    await page.getByRole('heading', { name: 'Le projet Initiatives' }).scrollIntoViewIfNeeded();
});
            
            test('Titre', async ({ page }) => {
                await expect(page.getByRole('heading', { name: 'Le projet Initiatives' })).toBeVisible();
            });

            test('Illustration', async ({ page }) => {
                await expect(page.getByRole('heading', { name: 'Le projet Initiatives' })).toBeVisible();
            });

            test('Texte (1/2)', async ({ page }) => {
                await expect(page.getByText('Les petits ruisseaux font les')).toBeVisible();
            });

            test('Texte (2/2)', async ({ page }) => {
                await expect(page.getByText('Notre rôle : structurer cette')).toBeVisible();
            });
        });

        test.describe('Bloc Lables & certification', () => {
test.beforeEach(async ({ page }) => {
    await page.getByRole('heading', { name: 'Labels & certifications' }).scrollIntoViewIfNeeded();
});

            test('Titre', async ({ page }) => {
                await expect(page.getByRole('heading', { name: 'Labels & certifications' })).toBeVisible();
            });

            test('Pacte Mondial des Nations Unies', async ({ page }) => {
                await expect(page.getByRole('link', { name: 'Logo - certification-global-' })).toBeVisible();
            });

            test('Ecovadis', async ({ page }) => {
                await expect(page.getByRole('link', { name: 'Ecovadis' })).toBeVisible();
            });

            test('Institut Numérique Responsable', async ({ page }) => {
                await expect(page.getByRole('link', { name: 'Logo-INR@2x Institut du Numé' })).toBeVisible();
            });

            test('Initiative StOpE', async ({ page }) => {
                await expect(page.getByRole('link', { name: 'Initiative #STOPE Initiative' })).toBeVisible();
            });
        });

        test.describe('Bloc - Employeur responsable', () => {
            test.beforeEach(async ({ page }) => {
                await page.getByRole('heading', { name: 'Un employeur responsable' }).scrollIntoViewIfNeeded();
            });

            test('Titre', async ({ page }) => {
                await expect(page.getByRole('heading', { name: 'Un employeur responsable' })).toBeVisible();
            });

            test('Illistration ', async ({ page }) => {
                await expect(page.getByRole('img', { name: 'Quatre personnes sont assises' })).toBeVisible();
            });

            test('Texte Intro', async ({ page }) => {
                await expect(page.getByText('Notre approche holistique s’')).toBeVisible();
            });

            test.describe('Soutenir la parité', () => {
                test.beforeEach(async ({ page }) => {
                    await page.getByRole('heading', { name: 'Soutenir la parité' }).scrollIntoViewIfNeeded();
                });

                test('Titre', async ({ page }) => {
                    await expect(page.getByRole('heading', { name: 'Soutenir la parité' })).toBeVisible();
                });

                test('Texte', async ({ page }) => {
                    await expect(page.getByText('Les métiers du numérique')).toBeVisible();
                });
            });

            test.describe('Prévenir le sexisme dit ordinaire', () => {
                test.beforeEach(async ({ page }) => {
                    await page.getByRole('heading', { name: 'Prévenir le sexisme dit' }).scrollIntoViewIfNeeded();
                });

                test('Titre', async ({ page }) => {
                    await expect(page.getByRole('heading', { name: 'Prévenir le sexisme dit' })).toBeVisible();
                });

                test('Texte', async ({ page }) => {
                    await expect(page.getByText('Signataire de l\'initiative #')).toBeVisible();
                });
            });

            test.describe('Agir pour la diversité', () => {
                test.beforeEach(async ({ page }) => { 
                    await page.getByRole('heading', { name: 'Agir pour la diversité : d’' }).scrollIntoViewIfNeeded();
                });

                test('Titre', async ({ page }) => {
                    await expect(page.getByRole('heading', { name: 'Agir pour la diversité : d’' })).toBeVisible();
                });

                test('Texte (1/3)', async ({ page }) => {
                    await expect(page.getByText('Nous nous engageons en faveur')).toBeVisible();
                });

                test('Texte (2/3)', async ({ page }) => {
                    await expect(page.getByText('Depuis 2017, Extia a mis en')).toBeVisible();
                });

                test('Texte (3/3)', async ({ page }) => {
                    await expect(page.getByText('94% des collaborateurs')).toBeVisible();
                });
            });

            test.describe('Solidarité et mécénat', () => {
                test.beforeEach(async ({ page }) => {
                    await page.getByRole('heading', { name: 'Solidarité et mécénat' }).scrollIntoViewIfNeeded();
                });

                test('Titre', async ({ page }) => {
                    await expect(page.getByRole('heading', { name: 'Solidarité et mécénat' })).toBeVisible();
                });

                test('Texte Intro', async ({ page }) => {
                    await expect(page.getByText('Chez Extia, nous sommes')).toBeVisible();
                });
                test.describe('Mettre nos compétances au service de nos partenaires', () => {
                    test.beforeEach(async ({ page }) => {
                        await page.getByRole('heading', { name: 'Mettre nos compétences au' }).scrollIntoViewIfNeeded();
                    });

                    test('Titre', async ({ page }) => {
                        await expect(page.getByRole('heading', { name: 'Mettre nos compétences au' })).toBeVisible();
                    });

                    test('Texte (1/2)', async ({ page }) => {
                        await expect(page.getByText('Depuis 2015, nous')).toBeVisible();
                    });

                    test('Texte (2/2)', async ({ page }) => {
                        await expect(page.getByText('Depuis sa mise en place,')).toBeVisible();
                    });

                    test('Illustration', async ({ page }) => {
                        await expect(page.getByRole('img', { name: 'Un homme et une jeune fille' })).toBeVisible();
                    });
                });
                test.describe('Engagement solidaire au quotidien', () => {
                    test.beforeEach(async ({ page }) => {
                        await page.getByRole('heading', { name: 'Un engagement solidaire au' }).scrollIntoViewIfNeeded();
                    });

                    test('Titre', async ({ page }) => {
                        await expect(page.getByRole('heading', { name: 'Un engagement solidaire au' })).toBeVisible();
                    });

                    test('Texte (1/2)', async ({ page }) => {
                        await expect(page.getByText('Nous mettons à disposition de nos salariés une plateforme d\'engagement')).toBeVisible();
                    });

                    test('Texte (2/2)', async ({ page }) => {
                        await expect(page.getByText('Extia s\'improvise également “')).toBeVisible();
                    });

                    test('Illustartion', async ({ page }) => {
                        await expect(page.getByRole('img', { name: 'Quatre personnes sourient' })).toBeVisible();
                    });
                });
                test.describe('Soutenir les causes qui nous sont chères', () => {
                    test.beforeEach(async ({ page }) => { 
                        await page.getByRole('heading', { name: 'Soutenir des causes qui nous' }).scrollIntoViewIfNeeded();
                    });

                    test('Titre', async ({ page }) => {
                        await expect(page.getByRole('heading', { name: 'Soutenir des causes qui nous' })).toBeVisible();
                    });

                    test('Texte (1/3)', async ({ page }) => {
                        await expect(page.getByText('Chaque année, nous apportons')).toBeVisible();
                    });

                    test('Texte (2/3)', async ({ page }) => {
                        await expect(page.getByText('Dès le début du processus de')).toBeVisible();
                    });

                    test('Texte (3/3)', async ({ page }) => {
                        await expect(page.getByText('Nous impliquons l\'ensemble de')).toBeVisible();
                    });

                    test('Illustration', async ({ page }) => {
                        await expect(page.getByRole('img', { name: 'Les collaborateurs de l’' })).toBeVisible();
                    });
                });
            });

            test.describe('Associations partenaires', () => {
                test('Bloc de cartes assos', async ({ page }) => {
                    await expect(page.locator('.partner-items')).toBeVisible();
                });
            });
        });

        test.describe('Axe Environnemental', () => {
            test.beforeEach(async ({ page }) => {
                await page.getByRole('heading', { name: 'L’axe environnemental' }).scrollIntoViewIfNeeded();
            });

            test('Titre', async ({ page }) => {
                await expect(page.getByRole('heading', { name: 'L’axe environnemental' })).toBeVisible();
            });

            test('Texte Intro', async ({ page }) => {
                await expect(page.getByText('Pour répondre aux défis')).toBeVisible();
            });

            test('Illustration', async ({ page }) => {
                await expect(page.getByRole('img', { name: 'Groupe de jeunes adultes' })).toBeVisible();
            });

            test.describe('Numérique Responsable', () => {
                test.beforeEach(async ({ page }) => { 
                    await page.getByRole('heading', { name: 'Numérique responsable' }).scrollIntoViewIfNeeded();
                });

                test('Titre', async ({ page }) => {
                    await expect(page.getByRole('heading', { name: 'Numérique responsable' })).toBeVisible();
                });

                test('Texte (1/3)', async ({ page }) => {
                    await expect(page.getByText('En tant que société du numé')).toBeVisible();
                });

                test('Texte (2/3)', async ({ page }) => {
                    await expect(page.getByText('Pour promouvoir ces bonnes')).toBeVisible();
                });

                test('Texte (3/3)', async ({ page }) => {
                    await expect(page.getByText('Nous avons aussi optimisé nos')).toBeVisible();
                });
            });

            test.describe('Mobilité Durable', () => {
                test.beforeEach(async ({ page }) => {
                    await page.getByRole('heading', { name: 'Mobilité durable' }).scrollIntoViewIfNeeded();
                });

                test('Titre', async ({ page }) => {
                    await expect(page.getByRole('heading', { name: 'Mobilité durable' })).toBeVisible();
                });

                test('Texte', async ({ page }) => {
                    await expect(page.getByText('Les trajets professionnels et')).toBeVisible();
                });
            });

            test.describe('Gestion Ressources', () => {
                test.beforeEach(async ({ page }) => {
                    await page.getByRole('heading', { name: 'Gestion des ressources' }).scrollIntoViewIfNeeded();
                });

                test('Titre', async ({ page }) => {
                    await expect(page.getByRole('heading', { name: 'Gestion des ressources' })).toBeVisible();
                });

                test('Texte (1/2)', async ({ page }) => {
                    await expect(page.getByText('Conscients que les ressources')).toBeVisible();
                });

                test('Texte (2/2)', async ({ page }) => {
                    await expect(page.getByText('Des réflexes écocitoyens ont')).toBeVisible();
                });
            });
        });


        test.describe('Et Demain ?', () => {
            test.beforeEach(async ({ page }) => {
                await page.getByRole('heading', { name: 'Et demain ?' }).scrollIntoViewIfNeeded();
            });

            test('Titre', async ({ page }) => {
                await expect(page.getByRole('heading', { name: 'Et demain ?' })).toBeVisible();
            });

            test('Lien Détail', async ({ page }) => {
                await expect(page.getByRole('link', { name: 'Découvrez l\'ensemble de nos' })).toBeVisible();
            });

            test('Texte', async ({ page }) => {
                await expect(page.getByText('Chez Extia, nous valorisons')).toBeVisible();
            });

            test('Bouton Share Idea', async ({ page }) => {
                await expect(page.getByTestId('shareidea')).toBeVisible();
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
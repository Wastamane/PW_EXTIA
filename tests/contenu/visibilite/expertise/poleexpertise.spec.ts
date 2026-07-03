import { test } from '../../../fixtures'
import { BrowserContext, expect, Page } from '@playwright/test';
import { accepterCookies } from '../../../utils/helpers';

test.describe('Visibilité - Pole Expertise page', () => {
    test.beforeEach(async ({ page, nav }) => {
        await page.goto(nav.expertisecenters);
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
            test('Fil ariane', async ({ page }) => {
                await expect(page.getByRole('main').getByRole('link', { name: 'Notre expertise' })).toBeVisible();
                await expect(page.getByRole('link', { name: 'Nos pôles d\'expertise', exact: true })).toBeVisible();
            });
            
            test('Titre', async ({ page }) => {
                await expect(page.getByRole('heading', { name: 'Nos pôles d’expertises' })).toBeVisible();
            });

            test('Texte', async ({ page }) => {
                await expect(page.getByText('L’intrapreneuriat et l\'')).toBeVisible();
            });

            test('Bouton Contact', async ({ page }) => {
                await expect(page.getByRole('button', { name: 'Contacter nos équipes' })).toBeVisible();
            });

            test('Illustration', async ({ page }) => {
                await expect(page.getByRole('img', { name: 'Un développeur travaille sur' })).toBeVisible();
            });
        });

        test.describe('Bloc Expertises', () => {
            test.describe('Hetix', () => {
                test.beforeEach(async ({ page }) => {
                    await page.getByRole('button', { name: 'Hetix' }).scrollIntoViewIfNeeded();
                    await page.getByRole('button', { name: 'Hetix' }).click();
                });

                test('Bouton ouverture Bloc', async ({ page }) => {
                    await expect(page.getByRole('button', { name: 'Hetix' })).toBeVisible();
                });

                test.describe('Intro', () => {
                    test('Titre', async ({ page }) => {
                        await expect(page.getByRole('heading', { name: 'Hetix' })).toBeVisible();
                    });

                    test('Sous Titre', async ({ page }) => {
                        await expect(page.getByText('Expertise en écoconception et')).toBeVisible();
                    });

                    test('Texte', async ({ page }) => {
                        await expect(page.getByText('Hetix vous accompagne dans la')).toBeVisible();
                    });

                    test('Logo', async ({ page }) => {
                        await expect(page.getByRole('img', { name: 'Logo de Hetix représentant un' })).toBeVisible();
                    });

                    test('Bouton Contact', async ({ page }) => {
                        await expect(page.getByRole('link', { name: 'Contacter l\'équipe' })).toBeVisible();
                    });
                });

                test.describe('Plus d\'infos', () => {
                    test.beforeEach(async ({ page }) => { 
                        await page.getByRole('heading', { name: 'Make IT green' }).scrollIntoViewIfNeeded(); 
                    });

                    test.describe('Make IT Green', () => {
                        test('Titre', async ({ page }) => {
                            await expect(page.getByRole('heading', { name: 'Make IT green' })).toBeVisible();
                        });

                        test('Texte (1/2)', async ({ page }) => {
                            await expect(page.getByText('Hetix réalise des audits basé')).toBeVisible();
                        });

                        test('Texte (2/2)', async ({ page }) => {
                            await expect(page.getByText('Grâce à une analyse')).toBeVisible();
                        });
                    });

                    test.describe('Nos compétances', () => {
                        test.beforeEach(async ({ page }) => { 
                            await page.getByRole('heading', { name: 'Nos compétences' }).scrollIntoViewIfNeeded();
                         });

                        test('Titre', async ({ page }) => {
                            await expect(page.getByRole('heading', { name: 'Nos compétences' })).toBeVisible();
                        });

                        test('Texte', async ({ page }) => {
                            await expect(page.getByText('Audit environnemental et d’accessibilité (RGESN, RGAA)Mesure de la performance')).toBeVisible();
                        });
                    });
                    test.describe('Nos livrables', () => {
                        test.beforeEach(async ({ page }) => { 
                            await page.getByRole('heading', { name: 'Nos livrables' }).scrollIntoViewIfNeeded(); 
                        });

                        test('Titre', async ({ page }) => {
                            await expect(page.getByRole('heading', { name: 'Nos livrables' })).toBeVisible();
                        });

                        test('Texte (1/3)', async ({ page }) => {
                            await expect(page.getByText('Rapports détaillant l’impact environnemental de vos services numériquesGrilles')).toBeVisible();
                        });

                        test('Texte (2/3)', async ({ page }) => {
                            await expect(page.getByText('Vous avez des besoins de dé')).toBeVisible();
                        });

                        test('Texte (3/3)', async ({ page }) => {
                            await expect(page.getByText('Grifix, experts de la cybersécurité,Kilix, experts de la transformation')).toBeVisible();
                        });
                    });
                    test.describe('Aperçu équipe', () => {
                        test.beforeEach(async ({ page }) => {
                            await page.getByRole('heading', { name: 'Aperçu de l\'équipe' }).scrollIntoViewIfNeeded();
                        });

                        test('Titre', async ({ page }) => {
                            await expect(page.getByRole('heading', { name: 'Aperçu de l\'équipe' })).toBeVisible();
                        });

                        test('Cartes equipe', async ({ page }) => {
                            await expect(page.getByText('BastienConsultant en éco-conceptionMarie-HélèneChargée de projet RSE')).toBeVisible();
                        });
                    });
                });
            });
            test.describe('Grifix', () => {
                test.beforeEach(async ({ page }) => {
                    await page.getByRole('button', { name: 'Grifix' }).scrollIntoViewIfNeeded();
                    await page.getByRole('button', { name: 'Grifix' }).click();
                });

                test.describe('Intro Grifix', () => {
                    test('Titre', async ({ page }) => {
                        await expect(page.getByRole('heading', { name: 'Grifix' })).toBeVisible();
                    });

                    test('Texte (1/2)', async ({ page }) => {
                        await expect(page.getByText('Créée à l’initiative de')).toBeVisible();
                    });

                    test('Texte (2/2)', async ({ page }) => {
                        await expect(page.getByText('Tests d’intrusion, audit de')).toBeVisible();
                    });

                    test('Logo', async ({ page }) => {
                        await expect(page.getByRole('img', { name: 'Logo de Grifix représentant' })).toBeVisible();
                    });

                    test('Bouton plus d\'info', async ({ page }) => {
                        await expect(page.getByRole('link', { name: 'Tout savoir sur Grifix' })).toBeVisible();
                    });
                });
                test.describe('Plus d\'infos', () => {
                    test.describe('Make IT safe', () => {
                        test('Titre', async ({ page }) => {
                            await expect(page.getByRole('heading', { name: 'Make IT safe' })).toBeVisible();
                        });

                        test('Texte', async ({ page }) => {
                            await expect(page.getByText('Avec Grifix, notre solution d')).toBeVisible();
                        });
                    });
                    test.describe('Nos Compétances', () => {
                        test.beforeEach(async ({ page }) => {
                             await page.getByRole('heading', { name: 'Nos compétences' }).scrollIntoViewIfNeeded(); 
                            });

                        test('Titre', async ({ page }) => {
                            await expect(page.getByRole('heading', { name: 'Nos compétences' })).toBeVisible();
                        });

                        test('Texte', async ({ page }) => {
                            await expect(page.getByRole('list').filter({ hasText: 'Tests d\'intrusion (black,' })).toBeVisible();
                        });
                    });

                    test.describe('Les petit Plus', () => {
                        test.beforeEach(async ({ page }) => { 
                            await page.getByRole('heading', { name: 'Les petits plus' }).scrollIntoViewIfNeeded(); 
                        });

                        test('Titre', async ({ page }) => {
                            await expect(page.getByRole('heading', { name: 'Les petits plus' })).toBeVisible();
                        });

                        test('Texte (1/4)', async ({ page }) => {
                            await expect(page.getByRole('list').filter({ hasText: 'Une académie cyber pour' })).toBeVisible();
                        });

                        test('Texte (2/4)', async ({ page }) => {
                            await expect(page.getByText('Contactez les équipes par')).toBeVisible();
                        });

                        test('Texte (3/4)', async ({ page }) => {
                            await expect(page.getByText('Vous avez des besoins de dé')).toBeVisible();
                        });

                        test('Texte (4/4)', async ({ page }) => {
                            await expect(page.getByText('Hetix, experts du numérique responsable,Kilix, experts de la transformation')).toBeVisible();
                        });
                    });

                    test.describe('Aperçu Equipe', () => {
                        test('Titre', async ({ page }) => {
                            await expect(page.getByRole('heading', { name: 'Aperçu de l\'équipe' })).toBeVisible();
                        });

                        test('Cartes d\'équipe', async ({ page }) => {
                            await expect(page.getByText('JulienLead pentesterPierre-')).toBeVisible();
                        });
                    });
                });
            });
            test.describe('Blend', () => {
                test.beforeEach(async ({ page }) => {
                    await page.getByRole('button', { name: 'Blend' }).scrollIntoViewIfNeeded();
                    await page.getByRole('button', { name: 'Blend' }).click();
                });
                test.describe('Intro', () => {
                    test('Titre', async ({ page }) => {
                        await expect(page.getByRole('heading', { name: 'Blend', exact: true })).toBeVisible();
                    });

                    test('Texte (1/4)', async ({ page }) => {
                        await expect(page.getByText('Dans un monde du travail en')).toBeVisible();
                    });

                    test('Texte (2/4)', async ({ page }) => {
                        await expect(page.getByText('Praticiens avant tout, nos')).toBeVisible();
                    });

                    test('Texte (3/4)', async ({ page }) => {
                        await expect(page.getByText('Forts de nos expériences en')).toBeVisible();
                    });

                    test('Texte (4/4)', async ({ page }) => {
                        await expect(page.getByText('Nous nous engageons à faire é')).toBeVisible();
                    });

                    test('Logo', async ({ page }) => {
                        await expect(page.getByRole('img', { name: 'Logo Blend en bleu marine' })).toBeVisible();
                    });

                    test('Bouton tout savoir', async ({ page }) => {
                        await expect(page.getByRole('link', { name: 'Tout savoir sur Blend' })).toBeVisible();
                    });
                });
                test.describe('Plus d\'info', () => {
                    test.describe('Solutions', () => {
                        test('Titre', async ({ page }) => {
                            await expect(page.getByText('Nos solutions :')).toBeVisible();
                        });

                        test('Texte', async ({ page }) => {
                            await expect(page.getByRole('list').filter({ hasText: 'Transform : Impulsez un' })).toBeVisible();
                        });
                    });

                    test.describe('Pourquoi faire appel a Blend', () => {
                        test.beforeEach(async ({ page }) => {
                            await page.getByText('Pourquoi faire appel à Blend ?').scrollIntoViewIfNeeded();
                        });

                        test('Titre', async ({ page }) => {
                            await expect(page.getByText('Pourquoi faire appel à Blend ?')).toBeVisible();
                        });

                        test('Texte (1/3)', async ({ page }) => {
                            await expect(page.getByText('Un accompagnement fondé sur l')).toBeVisible();
                        });

                        test('Texte (2/3)', async ({ page }) => {
                            await expect(page.getByText('Parce que les meilleurs')).toBeVisible();
                        });

                        test('Texte (3/3)', async ({ page }) => {
                            await expect(page.getByText('L’objectif : trouver votre “')).toBeVisible();
                        });
                    });

                    test.describe('Aperçu équipe', () => {
                        test.beforeEach(async ({ page }) => {
                            await page.getByRole('heading', { name: 'Aperçu de l\'équipe' }).scrollIntoViewIfNeeded();
                        });

                        test('Titre', async ({ page }) => {
                            await expect(page.getByRole('heading', { name: 'Aperçu de l\'équipe' })).toBeVisible();
                        });

                        test('Cartes équipe', async ({ page }) => {
                            await expect(page.getByText('Aperçu de l\'équipeBenjaminLaurianeJulietteJean-Baptiste LucieEmmanuelle')).toBeVisible();
                        });
                    });
                });
            });
            test.describe('Apinix', () => {
                test.beforeEach(async ({ page }) => {
                    await page.getByRole('button', { name: 'apinix' }).scrollIntoViewIfNeeded();
                    await page.getByRole('button', { name: 'apinix' }).click();
                });

                test('Bouton Apinix', async ({ page }) => {
                    await expect(page.getByRole('button', { name: 'apinix' })).toBeVisible();
                });

                test.describe('Intro', () => {
                    test('Titre', async ({ page }) => {
                        await expect(page.getByRole('heading', { name: 'apinix' })).toBeVisible();
                    });

                    test('Texte (1/2)', async ({ page }) => {
                        await expect(page.getByText('apinix vous accompagne dans')).toBeVisible();
                    });

                    test('Texte (2/2)', async ({ page }) => {
                        await expect(page.getByText('apinix vous propose des')).toBeVisible();
                    });

                    test('Logo', async ({ page }) => {
                        await expect(page.getByRole('img', { name: 'Logo d\'Apinix représentant' })).toBeVisible();
                    });

                    test('Bouton tout savoir', async ({ page }) => {
                        await expect(page.getByRole('link', { name: 'Tout savoir sur apinix' })).toBeVisible();
                    });
                });

                test.describe('Plus d\'infos', () => {
                    test.describe('Audit & Strategie DSI', () => {
                        test('Titre', async ({ page }) => {
                            await expect(page.getByText('Audit et Stratégie DSI :')).toBeVisible();
                        });

                        test('Texte', async ({ page }) => {
                            await expect(page.getByText('Analyse, audit de performance et de maturité des services SISchéma Directeur du')).toBeVisible();
                        });
                    });
                    test.describe('Architecture d\'entreprise', () => {
                        test('Titre', async ({ page }) => {
                            await expect(page.getByText('Architecture d’entreprise :')).toBeVisible();
                        });

                        test('Texte', async ({ page }) => {
                            await expect(page.getByText('Urbanisation du SIConseil en')).toBeVisible();
                        });
                    });
                    test.describe('Gouvernance des projets', () => {
                        test.beforeEach(async ({ page }) => { 
                            await page.getByText('Gouvernance des projets :').scrollIntoViewIfNeeded(); 
                        });

                        test('Titre', async ({ page }) => {
                            await expect(page.getByText('Gouvernance des projets :')).toBeVisible();
                        });

                        test('Texte', async ({ page }) => {
                            await expect(page.getByText('Pilotage de projets stratégiquesRemédiation de projetsPMO (Project Management')).toBeVisible();
                        });
                    });
                    test.describe('Stratégie & sécurité données', () => {
                        test.beforeEach(async ({ page }) => {
                             await page.getByText('Stratégie sécurité et données :').scrollIntoViewIfNeeded(); 
                            });

                        test('Titre', async ({ page }) => {
                            await expect(page.getByText('Stratégie sécurité et données :')).toBeVisible();
                        });

                        test('Texte', async ({ page }) => {
                            await expect(page.getByText('Politique de sécurité des SI (PSSI), Coaching RSSIAudit et déploiement de la')).toBeVisible();
                        });
                    });
                });
            });
            test.describe('Kilix', () => {
                test.beforeEach(async ({ page }) => {
                    await page.getByRole('button', { name: 'Kilix' }).scrollIntoViewIfNeeded();
                    await page.getByRole('button', { name: 'Kilix' }).click();
                });
                test('Bouton Kilix', async ({ page }) => {
                    await expect(page.getByRole('button', { name: 'Kilix' })).toBeVisible();
                });
                test.describe('Intro', () => {
                    test('Titre', async ({ page }) => {
                        await expect(page.getByRole('heading', { name: 'Kilix', exact: true })).toBeVisible();
                    });

                    test('Texte (1/3)', async ({ page }) => {
                        await expect(page.getByText('Convaincus que l’IT doit')).toBeVisible();
                    });

                    test('Texte (2/3)', async ({ page }) => {
                        await expect(page.getByText('Notre mission ? Rendre simple')).toBeVisible();
                    });

                    test('Texte (3/3)', async ({ page }) => {
                        await expect(page.getByText('La force de Kilix : un')).toBeVisible();
                    });

                    test('Logo', async ({ page }) => {
                        await expect(page.getByRole('img', { name: 'Logo de Kilix représentant un' })).toBeVisible();
                    });

                    test('Bouton tout savoir', async ({ page }) => {
                        await expect(page.getByRole('link', { name: 'Tout savoir sur Kilix' })).toBeVisible();
                    });
                });
                test.describe('Plus d\'infos', () => {
                    test.describe('Make IT Simple', () => {
                        test('Titre', async ({ page }) => {
                            await expect(page.getByRole('heading', { name: 'Make IT simple' })).toBeVisible();
                        });

                        test('Texte', async ({ page }) => {
                            await expect(page.getByText('Grâce à une équipe d\'experts')).toBeVisible();
                        });
                    });
                    test.describe('Accompagner ...', () => {
                        test('Titre', async ({ page }) => {
                            await expect(page.getByRole('heading', { name: 'Accompagner, développer, é' })).toBeVisible();
                        });

                        test('Texte', async ({ page }) => {
                            await expect(page.getByText('Les experts de Kilix mettent')).toBeVisible();
                        });
                    });
                    test.describe('Pourquoi choisir Kilix', () => {
                        test.beforeEach(async ({ page }) => { 
                            await page.getByRole('heading', { name: 'Pourquoi choisir Kilix ?' }).scrollIntoViewIfNeeded(); 
                        });

                        test('Titre', async ({ page }) => {
                            await expect(page.getByRole('heading', { name: 'Pourquoi choisir Kilix ?' })).toBeVisible();
                        });

                        test('Texte', async ({ page }) => {
                            await expect(page.getByText('Kilix vous propose un')).toBeVisible();
                        });
                    });
                    test.describe('Nos Compétances', () => {
                        test('Titre', async ({ page }) => {
                            await expect(page.getByRole('heading', { name: 'Nos compétences' })).toBeVisible();
                        });

                        test('Texte (1/5)', async ({ page }) => {
                            await expect(page.getByText('Notre mission est de rendre')).toBeVisible();
                        });

                        test('Texte (2/5)', async ({ page }) => {
                            await expect(page.getByText('L’accompagnement métierLe dé')).toBeVisible();
                        });

                        test('Texte (3/5)', async ({ page }) => {
                            await expect(page.getByText('Contactez les équipes par')).toBeVisible();
                        });

                        test('Texte (4/5)', async ({ page }) => {
                            await expect(page.getByText('Vous avez des besoins de')).toBeVisible();
                        });

                        test('Texte (5/5)', async ({ page }) => {
                            await expect(page.getByText('Hetix, experts du numérique responsable,Grifix, experts de la cybersécurité,')).toBeVisible();
                        });
                    });
                    test.describe('Aperçu équipe', () => {
                        test('Titre', async ({ page }) => {
                            await expect(page.getByRole('heading', { name: 'Aperçu de l\'équipe' })).toBeVisible();
                        });

                        test('Cartes équipe', async ({ page }) => {
                            await expect(page.getByText('BastienStéphane')).toBeVisible();
                        });
                    });
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
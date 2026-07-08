import { test } from '../../../fixtures'
import { BrowserContext, expect, Page } from '@playwright/test';
import { accepterCookies } from '../../../utils/helpers';

test.describe('Accessibilité Lien - Home Page', () => {
    test.beforeEach(async ({ page, nav }) => {
        await page.goto(nav.expertise);
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
        test.describe('Bouton - Contact Equipe', () => {
            test.beforeEach(async ({ page }) => {
                await page.getByTestId('contactteams').click();
            });
            test('Popup - Titre - Apparition', async ({ page }) => {
                await expect(page.getByRole('heading', { name: 'Travaillons ensemble !' })).toBeVisible();
            });
            test('Popup - Nom Prénom - Apparition', async ({ page }) => {
                await expect(page.getByRole('textbox', { name: 'Votre nom et prénom' })).toBeVisible();
            });
            test('Popup - Email - Apparition', async ({ page }) => {
                await expect(page.getByRole('textbox', { name: 'Votre adresse email' })).toBeVisible();
            });
            test('Popup - Telephone - Apparition', async ({ page }) => {
                await expect(page.getByRole('textbox', { name: 'Votre numéro de téléphone (' })).toBeVisible();
            });
            test('Popup - Entreprise - Apparition', async ({ page }) => {
                await expect(page.getByRole('textbox', { name: 'Nom de votre entreprise' })).toBeVisible();
            });
            test('Popup - Poste - Apparition', async ({ page }) => {
                await expect(page.getByRole('textbox', { name: 'Votre poste' })).toBeVisible();
            });
            test('Popup - Region - Apparition', async ({ page }) => {
                await expect(page.getByText('Région concernée')).toBeVisible();
            });
            test('Popup - Domaine - Apparition', async ({ page }) => {
                await expect(page.getByText('Domaine')).toBeVisible();
            });
            test('Popup - Projet - Apparition', async ({ page }) => {
                await expect(page.getByRole('textbox', { name: 'Parlez-nous de votre projet' })).toBeVisible();
            });
            test('Popup - Checkbox enregistrement données - Apparition', async ({ page }) => {
                await expect(page.getByRole('checkbox', { name: 'J’accepte que mes données' })).toBeVisible();
            });
            test('Popup - Texte Enregistrement données - Apparition', async ({ page }) => {
                await expect(page.getByText('J’accepte que mes données soient traitées afin de gérer ma demande de')).toBeVisible();
            });
            test('Popup - Detail Données - Apparition', async ({ page }) => {
                await expect(page.getByRole('button', { name: 'Afficher le détail du' })).toBeVisible();
            });
            test('Popup - Bouton Validation Formulaire - Apparition', async ({ page }) => {
                const boutonValid = page.getByRole('button', { name: 'Envoyer mon message' });
                await expect(boutonValid).toBeVisible();
                await expect(boutonValid).toBeDisabled();
            });
            test('Popup - Bouton Fermeture formulaire - Apparition', async ({ page }) => {
                await expect(page.getByRole('dialog').getByTestId('close-button')).toBeVisible();
            });
        });

        // Pas de tests sur le bloc "IT & Dévelloppement" => serait un doublon des tests de visibilité 

        // Pas de tests sur le bloc "Conseil & Transformation" => serait un doublon des tests de visibilité 

        // Peu de tests sur le bloc "Nos secteurs d'activité" => serait un doublon des tests de visibilité dans la plupart des cas

        test.describe('Nos secteurs d\'activité', () => {
            test('Test', async ({ page, nav }) => {
                await page.getByRole('link', { name: 'Voir tous nos secteurs' }).click();
                await expect(page).toHaveURL(url => url.pathname.includes(nav.oursectors));
            });

        });

        // Pas de tests sur le bloc "Pole d'expertise" => serait un doublon des tests de visibilité 

        // Pas de tests sur le bloc "Nos modes d'engagement" => serait un doublon des tests de visibilité 

        // Pas de tests sur le bloc "Nos labels & certifications" => serait un doublon des tests de visibilité 

        test.describe('Bouton - Contact Equipe - bas de page', () => {
            test.beforeEach(async ({ page }) => {
                await page.getByRole('button', { name: 'Contacter nos équipes' }).nth(1).click();
            });

            test('Popup - Titre - Apparition', async ({ page }) => {
                await expect(page.getByRole('heading', { name: 'Travaillons ensemble !' })).toBeVisible();
            });
            test('Popup - Nom Prénom - Apparition', async ({ page }) => {
                await expect(page.getByRole('textbox', { name: 'Votre nom et prénom' })).toBeVisible();
            });
            test('Popup - Email - Apparition', async ({ page }) => {
                await expect(page.getByRole('textbox', { name: 'Votre adresse email' })).toBeVisible();
            });
            test('Popup - Telephone - Apparition', async ({ page }) => {
                await expect(page.getByRole('textbox', { name: 'Votre numéro de téléphone (' })).toBeVisible();
            });
            test('Popup - Entreprise - Apparition', async ({ page }) => {
                await expect(page.getByRole('textbox', { name: 'Nom de votre entreprise' })).toBeVisible();
            });
            test('Popup - Poste - Apparition', async ({ page }) => {
                await expect(page.getByRole('textbox', { name: 'Votre poste' })).toBeVisible();
            });
            test('Popup - Region - Apparition', async ({ page }) => {
                await expect(page.getByText('Région concernée')).toBeVisible();
            });
            test('Popup - Domaine - Apparition', async ({ page }) => {
                await expect(page.getByText('Domaine')).toBeVisible();
            });
            test('Popup - Projet - Apparition', async ({ page }) => {
                await expect(page.getByRole('textbox', { name: 'Parlez-nous de votre projet' })).toBeVisible();
            });
            test('Popup - Checkbox enregistrement données - Apparition', async ({ page }) => {
                await expect(page.getByRole('checkbox', { name: 'J’accepte que mes données' })).toBeVisible();
            });
            test('Popup - Texte Enregistrement données - Apparition', async ({ page }) => {
                await expect(page.getByText('J’accepte que mes données soient traitées afin de gérer ma demande de')).toBeVisible();
            });
            test('Popup - Detail Données - Apparition', async ({ page }) => {
                await expect(page.getByRole('button', { name: 'Afficher le détail du' })).toBeVisible();
            });
            test('Popup - Bouton Validation Formulaire - Apparition', async ({ page }) => {
                const boutonValid = page.getByRole('button', { name: 'Envoyer mon message' });
                await expect(boutonValid).toBeVisible();
                await expect(boutonValid).toBeDisabled();
            });
            test('Popup - Bouton Fermeture formulaire - Apparition', async ({ page }) => {
                await expect(page.getByRole('dialog').getByTestId('close-button')).toBeVisible();
            });
        });


    });


    test('Test', async ({ page }) => { });
    test.describe('Bloc', () => { });
    test.beforeEach(async ({ page }) => { });



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
            await page.getByRole('link', { name: 'Nos secteurs', description: 'Nos secteurs', exact: true }).click();
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

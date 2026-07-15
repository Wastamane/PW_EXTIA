import { test } from '../../../fixtures'
import { BrowserContext, expect, Page } from '@playwright/test';
import { accepterCookies } from '../../../utils/helpers';
import { footerTests } from '../../../commun/navigation/footer.spec';
import { enteteTests } from '../../../commun/navigation/entête.spec';

test.describe('Accessibilité Lien - Home Page', () => {
    test.beforeEach(async ({ page, nav }) => {
        await page.goto(nav.expertise);
        await page.waitForLoadState('load');
        await accepterCookies(page);
    });

    enteteTests();
    footerTests();

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
});

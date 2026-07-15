import { test } from '../../../fixtures'
import { BrowserContext, expect, Page } from '@playwright/test';
import { accepterCookies } from '../../../utils/helpers';
import { footerTests } from '../../../commun/navigation/footer.spec';
import { enteteTests } from '../../../commun/navigation/entête.spec'; 

test.describe('Accessibilité Lien - Join Us Page', () => {
    test.beforeEach(async ({ page, nav }) => {
        await page.goto(nav.joinus);
        await page.locator('.loading').waitFor({
                state: 'hidden',
                timeout: 50000
            });
        await page.waitForLoadState('load');
        await accepterCookies(page);
        
    });

    enteteTests();
    footerTests();

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
});

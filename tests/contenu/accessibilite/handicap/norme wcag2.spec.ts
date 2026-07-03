import { test } from '../../../fixtures';
import { expect, Page } from '@playwright/test';
import { AxeBuilder } from '@axe-core/playwright'

// règles d'accessibilité W3C : https://www.w3.org/WAI/standards-guidelines/wcag/fr


async function ControlAccessibility(page: Page, tag: string): Promise<void> {
    const res = await new AxeBuilder({ page }).withTags(tag).analyze();
    expect(res.violations.filter(r => r.impact == 'critical')).toEqual([]);
}

test.describe('Acessibilité (wcag2a) - Level 1', () => {
    const usedTag = 'wcag2a';

    test('Acceuil', async ({ page, nav }) => {
        await page.goto(nav.home);
        await ControlAccessibility(page, usedTag);
    });

    test('Qui sommes-nous', async ({ page, nav }) => {
        await page.goto(nav.aboutus);
        await ControlAccessibility(page, usedTag);
    });

    test('Nous rejoindre', async ({ page, nav }) => {
        await page.goto(nav.joinus);
        await ControlAccessibility(page, usedTag);
    });

    test('Inside Extia', async ({ page, nav }) => {
        await page.goto(nav.inside);
        await ControlAccessibility(page, usedTag);
    });

    test('Notre ecosysteme', async ({ page, nav }) => {
        await page.goto(nav.ecosystem);
        await ControlAccessibility(page, usedTag);
    });

    test('Contact', async ({ page, nav }) => {
        await page.goto(nav.contact);
        await ControlAccessibility(page, usedTag);
    });

});

test.describe('Acessibilité (wcag2aa) - Level 2', () => {
    const usedTag = 'wcag2aa';

    test('Acceuil', async ({ page, nav }) => {
        await page.goto(nav.home);
        await ControlAccessibility(page, usedTag);
    });

    test('Qui sommes-nous', async ({ page, nav }) => {
        await page.goto(nav.aboutus);
        await ControlAccessibility(page, usedTag);
    });

    test('Nous rejoindre', async ({ page, nav }) => {
        await page.goto(nav.joinus);
        await ControlAccessibility(page, usedTag);
    });

    test('Inside Extia', async ({ page, nav }) => {
        await page.goto(nav.inside);
        await ControlAccessibility(page, usedTag);
    });

    test('Notre ecosysteme', async ({ page, nav }) => {
        await page.goto(nav.ecosystem);
        await ControlAccessibility(page, usedTag);
    });

    test('Contact', async ({ page, nav }) => {
        await page.goto(nav.contact);
        await ControlAccessibility(page, usedTag);
    });
});

test.describe('Acessibilité (wcag2aaa) - Level 3', () => {
    const usedTag = 'wcag2aaa';

    test('Acceuil', async ({ page, nav }) => {
        await page.goto(nav.home);
        await ControlAccessibility(page, usedTag);
    });

    test('Qui sommes-nous', async ({ page, nav }) => {
        await page.goto(nav.aboutus);
        await ControlAccessibility(page, usedTag);
    });

    test('Nous rejoindre', async ({ page, nav }) => {
        await page.goto(nav.joinus);
        await ControlAccessibility(page, usedTag);
    });

    test('Inside Extia', async ({ page, nav }) => {
        await page.goto(nav.inside);
        await ControlAccessibility(page, usedTag);
    });

    test('Notre ecosysteme', async ({ page, nav }) => {
        await page.goto(nav.ecosystem);
        await ControlAccessibility(page, usedTag);
    });

    test('Contact', async ({ page, nav }) => {
        await page.goto(nav.contact);
        await ControlAccessibility(page, usedTag);
    });
});
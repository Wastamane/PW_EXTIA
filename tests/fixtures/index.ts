import { test as base } from '@playwright/test';
import { Nav } from './nav';

export const test = base.extend<{
    nav: Nav
}>({
    nav: async ({page}, use) =>{
        const nav = new Nav();
        await use(nav)
    }
})

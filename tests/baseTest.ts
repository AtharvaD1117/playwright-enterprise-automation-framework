import { test as base } from '@playwright/test';
import { BASE_URL } from '../utils/env';

export const test = base.extend({
  page: async ({ page }, use) => {
    await page.goto(BASE_URL);
    await use(page);
  },
});

export const expect = test.expect;
import { Page } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {}

  async navigate(url: string) {
    await this.page.goto(url);
  }

  async clickLogin() {
    await this.page.click('a[href="/login"]');
  }

  async login(email: string, password: string) {
    await this.page.fill('input[data-qa="login-email"]', email);
    await this.page.fill('input[data-qa="login-password"]', password);
    await this.page.click('button[data-qa="login-button"]');
  }
  async navigateToLogin() {
  await this.page.click('a[href="/login"]');
  await this.page.waitForSelector('input[data-qa="login-email"]');
}
}
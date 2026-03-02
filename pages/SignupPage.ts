import { Page } from '@playwright/test';

export class SignupPage {
  constructor(private page: Page) {}

  async navigate(url: string) {
    await this.page.goto(url);
  }

  async clickSignupLogin() {
    await this.page.click('a[href="/login"]');
  }

  async startSignup(name: string, email: string) {
    await this.page.fill('input[data-qa="signup-name"]', name);
    await this.page.fill('input[data-qa="signup-email"]', email);
    await this.page.click('button[data-qa="signup-button"]');
  }

  async fillAccountDetails(password: string) {
    await this.page.check('#id_gender1');
    await this.page.fill('#password', password);
    await this.page.selectOption('#days', '1');
    await this.page.selectOption('#months', '1');
    await this.page.selectOption('#years', '2000');

    await this.page.fill('#first_name', 'John');
    await this.page.fill('#last_name', 'Doe');
    await this.page.fill('#address1', 'Street 1');
    await this.page.selectOption('#country', 'India');
    await this.page.fill('#state', 'Maharashtra');
    await this.page.fill('#city', 'Mumbai');
    await this.page.fill('#zipcode', '400001');
    await this.page.fill('#mobile_number', '9999999999');

    await this.page.click('button[data-qa="create-account"]');
  }

  async continueAfterCreation() {
    await this.page.click('a[data-qa="continue-button"]');
  }

  async logout() {
    await this.page.click('a[href="/logout"]');
  }
  async deleteAccount() {
  await this.page.click('a[href="/delete_account"]');
  await this.page.click('a[data-qa="continue-button"]');
}
}
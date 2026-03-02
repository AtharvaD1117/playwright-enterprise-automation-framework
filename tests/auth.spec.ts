import { test, expect } from './baseTest';
import { SignupPage } from '../pages/SignupPage';
import { LoginPage } from '../pages/LoginPage';
import { BASE_URL } from '../utils/env';

test('User should signup and login successfully', async ({ page }) => {
  const signupPage = new SignupPage(page);
  const loginPage = new LoginPage(page);

  const randomEmail = `user${Date.now()}@test.com`;
  const password = 'Test@123';

  await signupPage.navigate(BASE_URL);
  await signupPage.clickSignupLogin();

  // Signup
  await signupPage.startSignup('TestUser', randomEmail);
  await signupPage.fillAccountDetails(password);

  await expect(page.locator('text=Account Created!')).toBeVisible();
  await signupPage.continueAfterCreation();

  // Logout
  await signupPage.logout();

  // Login
  await loginPage.navigateToLogin();
  await loginPage.login(randomEmail, password);

  await expect(page.locator('text=Logged in as')).toBeVisible();
  await signupPage.deleteAccount();
});
import { test, expect } from '@playwright/test';
let url = 'http://localhost:5173/'
test('has title', async ({ page }) => {
  await page.goto(url + 'home');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Jobhuntly/);
});

test('get started link', async ({ page }) => {
  await page.goto(url + 'home/jobs');

  // Click the get started link.
  await page.getByRole('link', { name: 'jobs' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Find your' })).toBeVisible();
});

test('signup form validation', async ({ page }) => {
  await page.goto(url + 'signup');
  await page.waitForSelector('button[type="submit"]', { state: 'visible' });

  await page.click('button[type="submit"]');

  // Expect the validation error to be shown
  await expect(page.getByText('name is required')).toBeVisible();
  await expect(page.getByText('email is required')).toBeVisible();
  await expect(page.getByText('password is required')).toBeVisible();

  // TEST EMAIL VALIDATION
  await page.fill('input[type="email"]','$#$#%@gmail.com')
  await expect(page.getByText('email is invalid')).toBeVisible();
})

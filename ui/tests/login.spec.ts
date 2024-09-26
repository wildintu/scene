import { test, expect, type Page } from '@playwright/test'
import { loginPage } from './login_page'

test.beforeEach(async ({ page }) => {
  const playwrightDev = new loginPage(page)
  await playwrightDev.login()
})

test.describe('Club login', () => {
  test('should redirect to dashboard', async ({ page }) => {
    await expect(page.locator('h1')).toContainText(['Dashboard Page'])
  })

  // test('should navigate to clubs and view club show page', async ({ page }) => {
  //   await page.goto('http://localhost:5173/clubs')
  //   // await page.getByTestId('club-name').first().click()
  // })
})
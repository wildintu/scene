import { expect, type Locator, type Page} from '@playwright/test'

export class loginPage {
  readonly page: Page
  readonly login_page: Locator

  constructor(page: Page) {
    this.page = page
    this.login_page = page.locator('.login').last()
  }

  async goHome() {
    await this.page.goto('http://localhost:5173')
  }

  async goToLogin() {
    await this.page.goto('http://localhost:5173/login')
  }

  async login() {
    this.goToLogin()
    await this.page.getByTestId('login-email').fill('7@club.com')
    await this.page.getByTestId('login-password').fill('password')
    await this.page.getByTestId('login-submit').click()
  }
}
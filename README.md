1. npm init playwright@latest
2. scripts": {
    "test":"npx playwright test --headed"
  },

3. if update required : npm install -D @playwright/test@latest
4. const buttons = await page.locator().all()
5. npx playwright show-report
6. Workers control how many tests run in parallel. Since you have workers: 1, all tests execute sequentially in the same worker.
Contexts are independent browser sessions within the same worker.
When you create multiple browser contexts inside a test using browser.newContext(), each context behaves like a separate session (with its own cookies, storage, etc.).
Even though only one test is running, it can still open multiple independent browser sessions.

7.🚀 beforeAll() (Runs once before all tests)
🔄 beforeEach() (Runs before Test 1)
🧪 Runs Test 1
✅ afterEach() (Runs after Test 1)
🔄 beforeEach() (Runs before Test 2)
🧪 Runs Test 2
✅ afterEach() (Runs after Test 2)
🔄 beforeEach() (Runs before Test 3)
🧪 Runs Test 3
✅ afterEach() (Runs after Test 3)
🛑 afterAll() (Runs once after all tests)

8.npx playwright codegen demo.playwright.dev/todomvc

9.npx playwright test --project webkit --project firefox

10.npx playwright test -g "add a todo item"

11.npx playwright test --debug//ui  can debug

12. ui recorded-- traceviewer  helpful in CI

13.package.json is a configuration file in a Node.js project that manages dependencies, scripts, and metadata

14.npx playwright test --trace on

15.Clone your repository 2. Install Node.js 3. Install NPM Dependencies 4. Install Playwright Browsers 5. Run Playwright tests 6. Upload HTML report to the GitHub UI

16.Fixtures in Playwright are reusable components that provide setup, teardown, and context for tests. They help manage browser instances, authentication, and test data.

17. first create loator file and use export const loginLocators
    second create page class, import locator here and export class with constructr as this.page=page;this.userfeild=page.locator('') and create methods ysung asycnc naviagte(ur){ await this.page.goto(url)}

18 third create fixture import test as base and class then use export const test=base.extend({
  classobj:async({page},use){

    loginPage = new LoginPage(page)
    await use(loginPage)

  }
}) and export expcet

19 then import fixture over in test.spec.js and use impirt test data.json




   ===================================GIT=======================================
   :wq
   no merge :q!

   

import {test as base,expect,Page} from '@playwright/test'
type Fixtures = {
    logedPage:Page
    invalidPage:Page
}
export const test = base.extend<Fixtures>({
    logedPage:async ({page},use)=>{
        await page.goto("https://www.saucedemo.com/")
        await page.fill("#user-name", "standard_user");
        await page.fill("#password", "secret_sauce");
        await page.click("#login-button");
        await use(page)
    },
    invalidPage:async ({page},use)=>{
        await page.goto("https://www.saucedemo.com/")
        await page.fill("#user-name", "stanuytjyyudard_user");
        await page.fill("#password", "secret_sauce");
        await page.click("#login-button");
        await use(page)
    }
})
export {expect}
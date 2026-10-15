import {test as base,expect,Page} from '@playwright/test'
import { loginPage } from '../tests/pages/login.page'

type Fixtures = {
    logedPage:Page
    loginPomValid:loginPage
    loginPomInvalid:loginPage
}
export const test = base.extend<Fixtures>({
    logedPage:async ({page},use)=>{
        await page.goto("https://www.saucedemo.com/")
        
        await use(page)
    },
    loginPomValid:async ({logedPage},use)=>{
        const lp = new loginPage(logedPage)
        await lp.connexion("standard_user","secret_sauce")
        await use(lp)
    },
    loginPomInvalid:async ({logedPage},use)=>{
        const lp = new loginPage(logedPage)
        await lp.connexion("standafzfzrd_user","secret_sauce")
        await use(lp)
    }
})
export {expect}
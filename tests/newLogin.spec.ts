import {test,expect} from "../fixtures/test-pom-base";

/*test("login valid", async ({page})=>{
    await page.fill("#user-name", "standard_user");
    await page.fill("#password", "secret_sauce");
    await page.click("#login-button");

    await expect(page).toHaveURL(/inventory/);
})*/
test('login valid',async({loginPomValid})=>{
    await expect(loginPomValid.page).toHaveURL(/inventory/)
})
test('login invalid',async({loginPomInvalid})=>{
    await expect(loginPomInvalid.getErreur_msg()).toBeVisible()
})

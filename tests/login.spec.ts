import { test, expect } from '@playwright/test';
import { loginPage } from './pages/login.page';


let login :loginPage
test('verifier donnée passante', async ({ page }) => {
  login = new loginPage(page)
  await page.goto('https://www.saucedemo.com/');

  // connexion 
  login.connexion('standard_user','secret_sauce')


  //assert verifier si on est sur le nouvelle url 
  await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html")

});

test('verifier donnée non passante', async ({ page }) => {
  login =  new loginPage(page)
  await page.goto('https://www.saucedemo.com/');

  login.connexion("test","test")

  //assert verifier que le message d'erreur s'affiche 
  await expect(login.getErreur_msg()).toBeVisible()

});





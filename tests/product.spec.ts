import { test, expect } from '@playwright/test';
import { loginPage } from './pages/login.page';
import { productPage } from './pages/product.page';

let login : loginPage
let product : productPage
test.beforeEach(async ({page})=>
{
  login = new loginPage(page)
  await page.goto('https://www.saucedemo.com/');
  login.connexion('standard_user','secret_sauce')


})

test('ajout produit dans le panier' , async ({page}) =>{
        //assert verifier si on est sur le nouvelle url 
         await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html")

         product = new productPage(page)

        
         //click sur ajout 
         await product.ajouterProduit()

        //verifier si y a bien el button remove 
        
        await expect(product.getRemeveBtn()).toBeVisible()

        await expect(product.getTextNbrProduct()).toHaveText("1")
    
})

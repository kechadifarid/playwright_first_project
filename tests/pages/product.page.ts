import { Page } from "@playwright/test";

export class productPage {
    page: Page;
    //constructeur
    constructor(page: Page){
        this.page = page
    }
    elements = {
        product: () => this.page.locator('[data-test="add-to-cart-sauce-labs-backpack"]'),
        removeBtn: () => this.page.locator('[data-test="remove-sauce-labs-backpack"]'),
        nbrProduct: () => this.page.locator('[data-test="shopping-cart-badge"]')
    }

    ajouterProduit() {
        this.elements.product().click();
    }
    getRemeveBtn(){
        return this.elements.removeBtn()
    }
    getTextNbrProduct()
    {
        return this.elements.nbrProduct()
    }

}
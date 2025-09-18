exports.Home = 
class HomePage {
    constructor(page) {
        this.page = page;
        this.productList = '//*[@id="tbodyid"]/div/div/div/h4/a';
        this.addToCart = '//a[normalize-space()="Add to cart"]';
        this.cart = '#cartur';

        // Register dialog handler once
        this.page.on('dialog', async dialog => {
            if (dialog.message().includes('added')) {
                await dialog.accept();
            } else {
                await dialog.dismiss();
            }
        });
    }

    async addProductToCart(productName) {
        const products = await this.page.$$(this.productList);

        for (const product of products) {
            const name = (await product.textContent())?.trim();
            if (name === productName) {
                await product.click(); // Navigate to product details page
                await this.page.waitForLoadState('domcontentloaded'); // ensure page loads
                await this.page.locator(this.addToCart).click();
                break;
            }
        }
    }

    async gotoCart() {
        await this.page.locator(this.cart).click();
        await this.page.waitForLoadState('domcontentloaded');
        await this.page.timeout(5000)
    }
}

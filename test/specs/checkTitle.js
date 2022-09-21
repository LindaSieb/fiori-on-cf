describe('Test Application', () => {
    it('should return correct title on the page', async () => {
        await browser.url(`/`)
        await expect($('#container-webdriveriotesting---WebDriverIOTesting--page-title-inner')).toHaveTextContaining('Testing with WebDriverIO');
    });
});
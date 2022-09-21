describe('Test Sample App', () => {
    it('should return valid title on the page', async () => {
        await browser.url(`/`)
        await expect($('#container-webdriveriotesting---WebDriverIOTesting--page-title')).toHaveTextContaining('Testing with WebDriverIO');
    });
});
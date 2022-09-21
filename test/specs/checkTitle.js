describe('Test Application', () => {
    it('should return correct title on the page', async () => {
        await browser.url(`/2f0f75e4-e675-4cb2-8050-b7e06af7f94b.webdriveriotesting.webdriveriotesting-0.0.1/index.html`)
        await expect($('#container-webdriveriotesting---WebDriverIOTesting--page-title-inner')).toHaveTextContaining('Testing with WebDriverIO');
    });
});
describe('Start page', () => {
	it('p1', () => {
		browser.get('/#');
	});

	it('p2', () => {
		element(by.cssContainingText('.project', 'e2e_test_1446041274270')).click().then(() => {
			console.log('Click worked!');
			$('.module-button.builder').click();
		}, () => {
			console.log('Click failed!');
		});

		browser.actions()
			.mouseMove(element(by.cssContainingText('.lg-menu-link', 'Models')))
			.perform();
		element(by.cssContainingText('.lg-menu-link', 'New Model')).click();
		element(by.cssContainingText('.model-type .btn', 'Fuzzy Logic')).click();
		element(by.cssContainingText('.tab-button-link', 'FL Settings')).click();
		element(by.cssContainingText('.tab-button-link', 'Create New Model')).click();
		browser.takeScreenshot();
		browser.getCapabilities();
		// browser.pause();
	}, 1000 * 60 * 3);
});

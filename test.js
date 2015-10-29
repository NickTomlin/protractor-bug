describe('Start page', () => {
	it('p1', () => {
		browser.get('/#');
	});

	it('p2', () => {
    // the timeout can be resolved by browser.get('/') ing or manually waiting for angular :\
    element(by.cssContainingText('.project', 'e2e_test_1446041274270')).click().then(() => {
      console.log('Click worked!');
    }, () => {
      console.log('Click failed!');
    });

    // removing this seems to fix things as well
    browser.actions()
      .mouseMove($('.test0'))
      .perform();

    $('.test1').click();
    $('.test2').click();
    $('.test3').click();

    browser.takeScreenshot();
    browser.getCapabilities();
    // browser.pause();
  });
});

exports.config = {
	baseUrl: 'http://localhost:8080',

	capabilities: {
		browserName: 'chrome'
	},

	specs: [
		'test.js'
	],

  onPrepare: function() {
    /* global angular: false, browser: false, jasmine: false */

		browser.driver.manage().window().setSize(1200, 900);

    // Disable animations so e2e tests run more quickly
    var disableAnimations = function() {
      angular.module('disableAnimations', ['ngAnimate']).run(['$animate', function($animate) {
        $animate.enabled(false);

				var style = document.createElement('style');

				style.type = 'text/css';
				style.innerHTML = '* { transition: none !important }';

				document.getElementsByTagName('head')[0].appendChild(style);
      }]);
    };

    browser.addMockModule('disableAnimations', disableAnimations);

    // Store the name of the browser that's currently being used.
    browser.getCapabilities().then(function(caps) {
      browser.params.browser = caps.get('browserName');
    });
  },
};

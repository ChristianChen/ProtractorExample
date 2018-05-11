// spec.js
browser.waitForAngularEnabled(false);

describe('Login', function() {
	it('should login the mail', function() {
		browser.get('https://www.126.com');

		waitFor([by.id('dologin'),by.name('email'),by.name('password')], 60).then(function() {
			console.log('dologin appears.')
			element(by.name('email')).sendKeys('chanhoming');
			element(by.name('password')).sendKeys('Neteasy_881001');
			element(by.id('dologin')).click();

			expect(element(by.binding('latest')).getText()).toEqual('3'); 
		}, function() {
			expect(false).toEqual(true); 
		});
		
	});
});

function waitFor(locators, timeoutSeconds) {
	var startTime = new Date().getMilliseconds();
	
	var promise = new Promise(function(resolve, error) {
		var interval = setInterval(function() {
			
			Promise.all(locators.map(locator => browser.isElementPresent(locator))).then(function(results) {
				console.log('All appear:' + results);
				var allAppeared = true;
				results.each(it=> allAppeared = it);
				if (allAppeared) {
					clearInterval(interval);
					resolve();
				} else {
					if ((new Date().getMilliseconds() - startTime) > (timeoutSeconds*1000)) {
						error();
					}
				}
				
			});
		}, 1000);
	});
	
	return promise;
}
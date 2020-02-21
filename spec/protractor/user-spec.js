describe('Devise functionality ', function() {
    it('should register a user', function() {
      browser.get('http://localhost:3000/#!/register');
      browser.ignoreSynchronization = true;
      element(by.id('email')).sendKeys('michael.james.randell2020@gmail.com');
      element(by.id('password')).sendKeys('Sh3rlock!');
      element(by.id('confirmPassword')).sendKeys('Sh3rlock!');
      element(by.id('register')).click();

      var EC = protractor.ExpectedConditions;
      browser.wait(EC.presenceOf(element(by.css('.toast-el')).element(by.css('.alert')).element(by.css('span')).element(by.css('span'))), 5000);
      expect(element(by.css('.toast-el')).element(by.css('.alert')).element(by.css('span')).element(by.css('span')).getText()).toContain('Your account has been registered!');
      browser.wait(EC.presenceOf(element(by.css('.toast-el')).element(by.css('.alert')).element(by.css('.close'))), 5000);
      element(by.css('.toast-el')).element(by.css('.alert')).element(by.css('.close')).click();
      element(by.id('logoutNavBtn')).click();
    });

    it('should login with registered user', function() {
        browser.get('http://localhost:3000/#!/login');
        browser.ignoreSynchronization = true;
        element(by.id('email')).sendKeys('michael.james.randell2020@gmail.com');
        element(by.id('password')).sendKeys('Sh3rlock!');
        element(by.id('loginBtn')).click();
  
        var EC = protractor.ExpectedConditions;
        browser.wait(EC.presenceOf(element(by.css('.toast-el')).element(by.css('.alert')).element(by.css('span')).element(by.css('span'))), 5000);
        expect(element(by.css('.toast-el')).element(by.css('.alert')).element(by.css('span')).element(by.css('span')).getText()).toContain('Your account is logged in!');
        browser.wait(EC.presenceOf(element(by.css('.toast-el')).element(by.css('.alert')).element(by.css('.close'))), 5000);
        element(by.css('.toast-el')).element(by.css('.alert')).element(by.css('.close')).click();
      });
});
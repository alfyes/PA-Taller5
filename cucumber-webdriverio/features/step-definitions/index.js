var {defineSupportCode} = require('cucumber');
var {expect} = require('chai');

defineSupportCode(({Given, When, Then}) => {
  Given('I go to losestudiantes home screen', () => {
    browser.url('/');
    if(browser.isVisible('button=Cerrar')) {
      browser.click('button=Cerrar');
    }
  });

  When('I open the login screen', () => {
    browser.waitForVisible('button=Ingresar', 5000);
    browser.click('button=Ingresar');
  });

  When('I fill a wrong email and password', () => {
    var cajaLogIn = browser.element('.cajaLogIn');

    var mailInput = cajaLogIn.element('input[name="correo"]');
    mailInput.click();
    mailInput.keys('wrongemail@example.com');

    var passwordInput = cajaLogIn.element('input[name="password"]');
    passwordInput.click();
    passwordInput.keys('123467891')
  });

  When('I try to login', () => {
    var cajaLogIn = browser.element('.cajaLogIn');
    cajaLogIn.element('button=Ingresar').click()
  });

  Then('I expect to not be able to login', () => {
    browser.waitForVisible('.aviso.alert.alert-danger', 5000);
  });

    When(/^I fill with (.*) and (.*)$/ , (email, password) => {
        var cajaLogIn = browser.element('.cajaLogIn');

        var mailInput = cajaLogIn.element('input[name="correo"]');
        mailInput.click();
        mailInput.keys(email);

        var passwordInput = cajaLogIn.element('input[name="password"]');
        passwordInput.click();
        passwordInput.keys(password)
    });

    Then('I expect to see the message {string}', error => {
        browser.waitForVisible('.aviso.alert.alert-danger', 5000);
        var alertText = browser.element('.aviso.alert.alert-danger').getText();
        expect(alertText).to.include(error);
    });
    
    Then('I expect to see the user image', () => {
        browser.waitForVisible('button[id="cuenta"]', 5000);

    });
    
    When(/^I fill the sign up form with firstname:(.*), lastname:(.*), email:(.*), password:(.*) and agreeterms:(.*)$/,
        (firstname, lastname, email, password, agreeterms) => {
        
            var cajaSignUp = browser.element('.cajaSignUp');
        
            cajaSignUp.element('input[name="nombre"]').click().keys(firstname);
            cajaSignUp.element('input[name="apellido"]').click().keys(lastname);
            cajaSignUp.element('input[name="correo"]').click().keys(email);
            cajaSignUp.element('select[name="idUniversidad"]').selectByVisibleText('Universidad de los Andes');
            cajaSignUp.element('input[type="checkbox"]').click();
            cajaSignUp.element('select[name="idPrograma"]').selectByVisibleText('Maestría en Ingeniería de Software');
            cajaSignUp.element('input[name="password"]').click().keys(password);
            if(agreeterms == 'true')
                cajaSignUp.element('input[name="acepta"]').click();
    });

    When('I try to sign up', () => {

        var cajaSignUp = browser.element('.cajaSignUp');
        cajaSignUp.element('button=Registrarse').click();
    });
    
    Then('I expect to see the alert {string}', (error) => {
        
        browser.waitForVisible('.sweet-alert', 5000);
        var alertText = browser.element('.sweet-alert').element('.text-muted').element('div').getText();
        expect(alertText).contain('Error: Ya existe un usuario registrado con el correo');
    });
});
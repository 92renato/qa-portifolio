Feature('login');

Scenario('Login com sucesso', ({ I }) => {

    I.amOnPage('https://www.automationpratice.com.br/');
    I.click('Login')
    I.waitForText('Login',10)
    I.fillField('#user','renato@hotmail.com')
    I.fillField('#password','123456')
    I.click('#btnLogin')
    I.waitForText('Login realizado',3) //espera até 3s

}).tag('@login @sucesso')

Scenario('Tentando logar digitando apenas o email', ({ I }) => {

    I.amOnPage('https://www.automationpratice.com.br/');
    I.click('Login')
    I.waitForText('Login',10)
    I.fillField('#user','renato@hotmail.com')
    I.click('#btnLogin')
    I.waitForText('Senha inválida.',3)
}).tag('@login @negativo')

Scenario('Tentando logar sem digitar e-mail e senha', ({ I }) => {

    I.amOnPage('https://www.automationpratice.com.br/');
    I.click('Login')
    I.waitForText('Login',10)
    I.click('#btnLogin')
    I.waitForText('E-mail inválido.')    

}).tag('@login @negativo')

Scenario('Tentando logar digitando apenas a senha', ({ I }) => {

    I.amOnPage('https://www.automationpratice.com.br/');
    I.click('Login')
    I.waitForText('Login',10)
    I.fillField('#password','123456')
    I.click('#btnLogin')
    I.waitForText('E-mail inválido.') //espera até 3s
    
}).tag('@login @negativo')
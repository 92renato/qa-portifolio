const { test } = require('@playwright/test')
const { abrirSite, logarComSucesso, verificarSeLogado, logarEmailVazio, validarEmailInvalido } = require('./loginPage')

test('Login com sucesso', async ({ page }) => {
    await abrirSite(page);
    await logarComSucesso(page);
    await verificarSeLogado(page);
});

test('Login com e-mail vazio', async ({ page }) => {
    await abrirSite(page);
    await logarEmailVazio(page);
    await validarEmailInvalido(page);
})
import { test, expect } from '@playwright/test';

test('Login com sucesso', async ({ page }) => {
    //abrir
    await page.goto('https://automationpratice.com.br/login');
    //logar
    await page.locator('#user').fill('qazando@gmail.com');
    await page.locator('#password').fill('123456');
    await page.getByRole('button', { name: 'login' }).click();
    //verificar
    await expect(page.getByRole('heading', { name: 'Login realizado '})).toBeVisible();
});

test('Login com email vazio', async ({ page }) => {
    //abrir
    await page.goto('https://automationpratice.com.br/login');
    //logar
    await page.locator('#password').fill('123456');
    await page.getByRole('button', { name: 'login' }).click();
    //verificar
    await expect(page.getByText('E-mail inválido.')).toBeVisible({ timeout: 10000});
});

test('Login com senha vazia', async ({ page }) => {
    await page.goto('https://automationpratice.com.br/login');
    await page.locator('#user').fill('qazando@gmail.com');
    await page.getByRole('button', { name: 'login' }).click();
    await expect(page.getByText('Senha inválida.')).toBeVisible();
});
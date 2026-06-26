# 📋 Plano de Testes — BugBank

> **Aplicação testada:** BugBank — https://bugbank.netlify.app
> **Versão/Data:** Web App — Junho 2026
> **Testado por:** Renato Vinicius
> **Ambiente:** Produção
> **Navegador:** Chrome 149

---

## 📌 Escopo

Funcionalidades cobertas neste plano:
- [x] Cadastro de usuário
- [x] Login
- [x] Transferência entre contas
- [x] Extrato

Funcionalidades **fora** do escopo:
- Pagamento
- Saque
- Testes em dispositivos móveis
- Testes de performance

---

## 🧪 Casos de Teste

---

### 🔐 CADASTRO

---

### CT-001 — Cadastro com dados válidos sem saldo inicial

| Campo | Detalhe |
|-------|---------|
| **ID** | CT-001 |
| **Funcionalidade** | Cadastro |
| **Título** | Cadastro com dados válidos e sem saldo inicial |
| **Pré-condições** | Nenhuma |
| **Prioridade** | 🔴 Alta |
| **Tipo** | Funcional / Smoke |

**Passos:**

1. Acessar https://bugbank.netlify.app
2. Clicar em "Registrar"
3. Preencher o campo "E-mail" com um e-mail válido (renato@teste.com)
4. Preencher o campo "Nome" com um nome válido (Renato Teste)
5. Preencher o campo "Senha" com uma senha válida (123456)
6. Preencher o campo "Confirmar senha" com a mesma senha
7. **Não** marcar a opção "Criar conta com saldo"
8. Clicar em "Cadastrar"

**Resultado esperado:**
> Conta criada com sucesso. Sistema exibe mensagem de confirmação com o número da conta gerado. Saldo inicial deve ser R$ 0,00.

**Resultado obtido:**
> ✅ Conforme esperado

**Status:** ✅ Passou

---

### CT-002 — Cadastro com saldo inicial

| Campo | Detalhe |
|-------|---------|
| **ID** | CT-002 |
| **Funcionalidade** | Cadastro |
| **Título** | Cadastro com opção de saldo inicial ativada |
| **Pré-condições** | Nenhuma |
| **Prioridade** | 🔴 Alta |
| **Tipo** | Funcional |

**Passos:**

1. Acessar https://bugbank.netlify.app
2. Clicar em "Registrar"
3. Preencher o campo "E-mail" com um e-mail válido (vinicius@teste.com)
4. Preencher o campo "Nome" com um nome válido (Vinicius Teste)
5. Preencher o campo "Senha" com uma senha válida (123456)
6. Preencher o campo "Confirmar senha" com a mesma senha
7. **Marcar** a opção "Criar conta com saldo"
8. Clicar em "Cadastrar"

**Resultado esperado:**
> Conta criada com sucesso com saldo inicial disponível (R$ 1.000,00). Sistema exibe número da conta gerado.

**Resultado obtido:**
> ✅ Conforme esperado

**Status:** ✅ Passou

---

### CT-003 — Cadastro com senhas diferentes

| Campo | Detalhe |
|-------|---------|
| **ID** | CT-003 |
| **Funcionalidade** | Cadastro |
| **Título** | Tentativa de cadastro com senhas divergentes |
| **Pré-condições** | Nenhuma |
| **Prioridade** | 🔴 Alta |
| **Tipo** | Funcional / Negativo |

**Passos:**

1. Acessar https://bugbank.netlify.app
2. Clicar em "Registrar"
3. Preencher o campo "E-mail" com um e-mail válido
4. Preencher o campo "Nome" com um nome válido
5. Preencher o campo "Senha" com "123456"
6. Preencher o campo "Confirmar senha" com "654321"
7. Clicar em "Cadastrar"

**Resultado esperado:**
> Sistema exibe mensagem de erro "As senhas não são iguais". Cadastro não é realizado.

**Resultado obtido:**
> ✅ Conforme esperado

**Status:** ✅ Passou

---

### CT-004 — Cadastro com e-mail já existente

| Campo | Detalhe |
|-------|---------|
| **ID** | CT-004 |
| **Funcionalidade** | Cadastro |
| **Título** | Tentativa de cadastro com e-mail já cadastrado |
| **Pré-condições** | Já ter realizado o CT-001 na mesma sessão do navegador |
| **Prioridade** | 🔴 Alta |
| **Tipo** | Funcional / Negativo |

**Passos:**

1. Clicar em "Registrar"
2. Preencher o campo "E-mail" com o mesmo e-mail usado no CT-001 (renato@teste.com)
3. Preencher os demais campos com dados válidos
4. Clicar em "Cadastrar"

**Resultado esperado:**
> Sistema exibe mensagem de erro informando que o e-mail já está cadastrado. Novo cadastro não é criado.

**Resultado obtido:**
> ❌ Sistema criou um usuário com um novo número de conta, sobrescrevendo o anterior.

**Status:** ❌ Falhou

---

### CT-005 — Cadastro com campos obrigatórios em branco

| Campo | Detalhe |
|-------|---------|
| **ID** | CT-005 |
| **Funcionalidade** | Cadastro |
| **Título** | Tentativa de cadastro sem preencher campos obrigatórios |
| **Pré-condições** | Nenhuma |
| **Prioridade** | 🟡 Média |
| **Tipo** | Funcional / Negativo |

**Passos:**

1. Clicar em "Registrar"
2. Deixar todos os campos em branco
3. Clicar em "Cadastrar"

**Resultado esperado:**
> Sistema exibe mensagens de validação indicando os campos obrigatórios não preenchidos. Cadastro não é realizado.

**Resultado obtido:**
> ✅ Conforme esperado

**Status:** ✅ Passou

---

### 🔑 LOGIN

---

### CT-006 — Login com credenciais válidas

| Campo | Detalhe |
|-------|---------|
| **ID** | CT-006 |
| **Funcionalidade** | Login |
| **Título** | Login com e-mail e senha válidos |
| **Pré-condições** | Usuário cadastrado no BugBank (CT-001 executado na mesma sessão) |
| **Prioridade** | 🔴 Alta |
| **Tipo** | Funcional / Smoke |

**Passos:**

1. Na tela inicial, preencher o campo "E-mail" com o e-mail cadastrado (renato@teste.com)
2. Preencher o campo "Senha" com a senha cadastrada (123456)
3. Clicar em "Acessar"

**Resultado esperado:**
> Usuário é autenticado e redirecionado para a tela principal com seu nome, número da conta e saldo exibidos.

**Resultado obtido:**
> ✅ Conforme esperado

**Status:** ✅ Passou

---

### CT-007 — Login com senha incorreta

| Campo | Detalhe |
|-------|---------|
| **ID** | CT-007 |
| **Funcionalidade** | Login |
| **Título** | Tentativa de login com senha incorreta |
| **Pré-condições** | Usuário cadastrado no BugBank |
| **Prioridade** | 🔴 Alta |
| **Tipo** | Funcional / Negativo |

**Passos:**

1. Na tela inicial, preencher o campo "E-mail" com o e-mail cadastrado (renato@teste.com)
2. Preencher o campo "Senha" com uma senha **incorreta** (123459)
3. Clicar em "Acessar"

**Resultado esperado:**
> Sistema exibe mensagem de erro "Usuário ou senha inválido. Tente novamente ou verifique suas informações". Usuário permanece na tela de login.

**Resultado obtido:**
> ✅ Conforme esperado

**Status:** ✅ Passou

---

### CT-008 — Login com e-mail não cadastrado

| Campo | Detalhe |
|-------|---------|
| **ID** | CT-008 |
| **Funcionalidade** | Login |
| **Título** | Tentativa de login com e-mail inexistente |
| **Pré-condições** | Nenhuma |
| **Prioridade** | 🟡 Média |
| **Tipo** | Funcional / Negativo |

**Passos:**

1. Na tela inicial, preencher o campo "E-mail" com um e-mail não cadastrado (ex: naoexiste@teste.com)
2. Preencher o campo "Senha" com qualquer senha
3. Clicar em "Acessar"

**Resultado esperado:**
> Sistema exibe mensagem de erro. Usuário permanece na tela de login.

**Resultado obtido:**
> ✅ Conforme esperado

**Status:** ✅ Passou

---

### 💸 TRANSFERÊNCIA

---

### CT-009 — Transferência com saldo suficiente

| Campo | Detalhe |
|-------|---------|
| **ID** | CT-009 |
| **Funcionalidade** | Transferência |
| **Título** | Transferência com valor dentro do saldo disponível |
| **Pré-condições** | Duas contas cadastradas na mesma sessão — uma com saldo (CT-002) e outra sem (CT-001). Logado na conta com saldo. |
| **Prioridade** | 🔴 Alta |
| **Tipo** | Funcional / Smoke |

**Passos:**

1. Estar logado na conta com saldo
2. Clicar em "Transferência"
3. Preencher o número da conta destino (número gerado no CT-001)
4. Preencher o dígito da conta destino
5. Preencher o valor da transferência (ex: R$ 100,00)
6. Preencher a descrição (ex: "Teste de transferência")
7. Clicar em "Transferir agora"

**Resultado esperado:**
> Transferência realizada com sucesso. Saldo da conta de origem é debitado. Sistema exibe mensagem de confirmação e redireciona para o extrato.

**Resultado obtido:**
> ✅ Conforme esperado

**Status:** ✅ Passou

---

### CT-010 — Transferência com saldo insuficiente

| Campo | Detalhe |
|-------|---------|
| **ID** | CT-010 |
| **Funcionalidade** | Transferência |
| **Título** | Tentativa de transferência com valor maior que o saldo |
| **Pré-condições** | Logado em uma conta com saldo conhecido |
| **Prioridade** | 🔴 Alta |
| **Tipo** | Funcional / Negativo |

**Passos:**

1. Estar logado na conta com saldo (ex: R$ 1.000,00)
2. Clicar em "Transferência"
3. Preencher o número da conta destino com uma conta válida
4. Preencher o valor com um montante **maior** que o saldo (ex: R$ 9.999,00)
5. Preencher a descrição
6. Clicar em "Transferir agora"

**Resultado esperado:**
> Sistema exibe mensagem de erro "Você não tem saldo suficiente para essa transação". Transferência não é realizada. Saldo permanece inalterado.

**Resultado obtido:**
> ✅ Conforme esperado

**Status:** ✅ Passou

---

### CT-011 — Transferência para conta inexistente

| Campo | Detalhe |
|-------|---------|
| **ID** | CT-011 |
| **Funcionalidade** | Transferência |
| **Título** | Tentativa de transferência para número de conta inválido |
| **Pré-condições** | Logado em uma conta com saldo |
| **Prioridade** | 🟡 Média |
| **Tipo** | Funcional / Negativo |

**Passos:**

1. Estar logado em uma conta com saldo
2. Clicar em "Transferência"
3. Preencher o número da conta destino com um número inexistente (ex: 0000)
4. Preencher o dígito (ex: 0)
5. Preencher o valor (ex: R$ 50,00)
6. Clicar em "Transferir agora"

**Resultado esperado:**
> Sistema exibe mensagem de erro "Conta inválida ou inexistente". Transferência não é realizada.

**Resultado obtido:**
> ✅ Conforme esperado

**Status:** ✅ Passou

---

### CT-012 — Transferência com valor zerado

| Campo | Detalhe |
|-------|---------|
| **ID** | CT-012 |
| **Funcionalidade** | Transferência |
| **Título** | Tentativa de transferência com valor R$ 0,00 |
| **Pré-condições** | Logado em uma conta com saldo |
| **Prioridade** | 🟡 Média |
| **Tipo** | Funcional / Negativo |

**Passos:**

1. Estar logado em uma conta com saldo
2. Clicar em "Transferência"
3. Preencher a conta destino com uma conta válida
4. Preencher o valor com R$ 0,00
5. Clicar em "Transferir agora"

**Resultado esperado:**
> Sistema exibe mensagem de erro impedindo transferência com valor zerado.

**Resultado obtido:**
> ✅ Conforme esperado

**Status:** ✅ Passou

---

### 📊 EXTRATO

---

### CT-013 — Verificar extrato após transferência

| Campo | Detalhe |
|-------|---------|
| **ID** | CT-013 |
| **Funcionalidade** | Extrato |
| **Título** | Extrato exibe transferência realizada corretamente |
| **Pré-condições** | CT-009 executado com sucesso |
| **Prioridade** | 🟡 Média |
| **Tipo** | Funcional |

**Passos:**

1. Estar logado na conta que realizou a transferência (CT-009)
2. Clicar em "Extrato"

**Resultado esperado:**
> Extrato exibe a transferência realizada com valor, data e descrição corretos. Saldo exibido reflete o débito efetuado.

**Resultado obtido:**
> ✅ Conforme esperado

**Status:** ✅ Passou

---

### CT-014 — Extrato de conta sem movimentações

| Campo | Detalhe |
|-------|---------|
| **ID** | CT-014 |
| **Funcionalidade** | Extrato |
| **Título** | Extrato de conta sem transações exibe estado vazio |
| **Pré-condições** | Logado em uma conta recém-criada sem movimentações |
| **Prioridade** | 🟢 Baixa |
| **Tipo** | Funcional |

**Passos:**

1. Estar logado em uma conta sem movimentações
2. Clicar em "Extrato"

**Resultado esperado:**
> Sistema exibe mensagem informando que não há transações ou extrato aparece vazio. Nenhum erro é apresentado.

**Resultado obtido:**
> ✅ Conforme esperado

**Status:** ✅ Passou

---

## 📊 Resumo de Execução

| Total de CTs | ✅ Passou | ❌ Falhou | ⏭️ Bloqueado | ⏸️ Não executado |
|:---:|:---:|:---:|:---:|:---:|
| 14 | 13 | 1 | 0 | 0 |

---

## 📎 Evidências

> Adicionar prints das execuções na pasta `/evidencias`

- [x] CT-001 — Print da confirmação de cadastro com número da conta
- [x] CT-002 — Print do saldo inicial exibido após cadastro
- [x] CT-003 — Print da mensagem de senhas divergentes
- [x] CT-004 — Print da mensagem de e-mail já cadastrado
- [x] CT-005 — Print das mensagens de validação de campos obrigatórios
- [x] CT-006 — Print da tela principal após login
- [x] CT-007 — Print da mensagem de credenciais inválidas
- [x] CT-008 — Print da mensagem de e-mail não encontrado
- [x] CT-009 — Print da confirmação de transferência e extrato
- [x] CT-010 — Print da mensagem de saldo insuficiente
- [x] CT-011 — Print da mensagem de conta inexistente
- [x] CT-012 — Print da mensagem de valor inválido
- [x] CT-013 — Print do extrato com a transferência registrada
- [x] CT-014 — Print do extrato vazio

---

## 🐛 Bugs Encontrados

| ID do Bug | CT Relacionado | Severidade | Status |
|-----------|----------------|------------|--------|
| 001 | CT-004 | Alta | Reportado |

> Preencher conforme bugs forem encontrados durante a execução.
> Links para os bug reports detalhados: [relatorios-de-bug](../relatorios-de-bug)

---

*Plano de testes criado por Renato Vinicius Silva*
*[linkedin.com/in/renato-vinicius-silva](https://linkedin.com/in/renato-vinicius-silva)*

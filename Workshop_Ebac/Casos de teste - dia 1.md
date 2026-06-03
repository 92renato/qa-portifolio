Workshop EBAC

**Requisito:** Cadastro de usuário

**Caso 01:** Cadastrar conta com sucesso deve exibir número da conta criada

* **Cenário:** Novo usuário se cadastrando no sistema  
* **Pré-condição:** Usuário não possui e-mail com cadastro ativo  
* **Passos:**  
1. Acessar [https://bugbank.netlify.app/](https://bugbank.netlify.app/)  
2. Clicar em Registrar  
3. Inserir os dados: 

   E-mail: teste@email.com.br 

   Nome: José Carlos

   Senha: 1234567890

   Confirmação de senha: 1234567890

4. Clicar em Cadastrar  
* **Resultado esperado:** Sistema exibe uma mensagem de confirmação de cadastro com o número da nova conta \- “A conta XYZ foi criada com sucesso”.

**Caso 02:** Senha e confirmação de senha precisam ser iguais

* **Cenário:** Usuário tenta realizar cadastro, mas define senhas diferentes  
* **Pré-condição:** Usuário não possui e-mail com cadastro ativo  
* **Passos:**  
1. Acessar [https://bugbank.netlify.app/](https://bugbank.netlify.app/)  
2. Clicar em Registrar  
3. Inserir os dados: 

   E-mail: teste@email.com.br 

   Nome: José Carlos

   Senha: 1234567890

   Confirmação de senha: 1234

4. Clicar em Cadastrar  
* **Resultado esperado:** Sistema exibe a mensagem de erro “As senhas não são iguais”.

**Caso 03:** Tentativa de cadastro sem preencher nome deve visualizar a mensagem "Nome não pode ser vazio"

* **Cenário:** Usuário tenta realizar cadastro, mas não define um nome  
* **Pré-condição:** Usuário não possui e-mail com cadastro ativo  
* **Passos:**  
1. Acessar [https://bugbank.netlify.app/](https://bugbank.netlify.app/)  
2. Clicar em Registrar  
3. Inserir os dados: 

   E-mail: teste@email.com.br 

   Nome: (deixar em branco)

   Senha: 1234567890

   Confirmação de senha: 1234

4. Clicar em Cadastrar  
* **Resultado esperado:** O sistema retorna a mensagem “Nome não pode ser vazio.”

**Caso 04:** Deixar ativado a opção "Criar conta com saldo" deve criar conta com saldo de R$ 1.000,00

* **Cenário:**   
* **Pré-condição:** Usuário não possui e-mail com cadastro ativo  
* **Passos:**  
1. Acessar [https://bugbank.netlify.app/](https://bugbank.netlify.app/)  
2. Clicar em Registrar  
3. Inserir os dados: 

   E-mail: teste@email.com.br 

   Nome: José Carlos

   Senha: 1234567890

   Confirmação de senha: 1234567890

4. Clicar em Cadastrar  
5. Sistema confirma o cadastro  
6. Clicar em Fechar  
7. O sistema retorna a tela de login  
8. Realizar login  
* **Resultado esperado:** Ao realizar o login com o novo usuário a conta criada possui saldo de R$ 1000,00

**Caso 05:** Cadastro de um usuário com conta ativa

* **Cenário:** Usuário tenta realizar o cadastro, porém o e-mail já foi utilizado anteriormente  
* **Pré-condição:** Usuário possui um e-mail cadastrado no sistema  
* **Passos:**  
1. Acessar [https://bugbank.netlify.app/](https://bugbank.netlify.app/)  
2. Clicar em Registrar  
3. Inserir os dados: 

   E-mail: teste@email.com.br 

   Nome: Pedro Lucas

   Senha: 987654

   Confirmação de senha: 987654

4. Clicar em Cadastrar  
* **Resultado esperado:** O sistema realiza o cadastro normalmente com a mensagem de confirmação “A conta XYZ foi criada com sucesso”.  
  **Falha:** O sistema não deveria permitir o cadastro com um novo usuário com um e-mail já cadastrado.
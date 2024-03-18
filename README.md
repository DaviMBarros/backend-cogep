# backend-cogep

# Instalação da API para rodar localmente

## Criação da Tabela 
- É necessário executar um **npm install** assim que fizer o clone do repositório para que as depedências sejam instaladas. 
- Crie um banco de dados **_postgres_**.
- Crie um arquivo **.env** na raiz do projeto e preencha todos os campos seguindo o modelo do arquivo **.env.example**.
- Rode os seguintes comandos para a criação das tabelas:
    - npm run typeorm migration:generate src/migrations/InitialMigrate -- -d src/data-source.ts
    - npm run typeorm migration:run -- -d src/data-source
- Rode o comando **npm run dev** para rodar a API localmente. 
- Todos as rotas podem ser testadas importando o arquivo **Insomnia_cogep** no insomnia.

- Nome da tabela: **_User_**.
- Colunas:
  - **id**: número, incrementação automática e chave primária.
  - **name**: string, tamanho 45 e obrigatório.
  - **phone**: string, tamanho 15 e obrigatório.
  - **email**: string, tamanho 45, obrigatório e único.
  - **adress**: string, tamanho 200, obrigatório.
  - **password**: string, tamanho 120 e obrigatório.
  - **admin**: booleano, obrigatório e **DEFAULT** igual a **false**.

- Nome da tabela: **_Activity_**.
- Colunas:
  - **id**: número, incrementação automática e chave primária.
  - **name**: string, tamanho 45 e obrigatório.
  - **description**: string, tamanho 300, obrigatório.
  - **contact**: string, tamanho 11, obrigatório e único.
  - **startDate**: string e obrigatório.
  - **endDate**: string e obrigatório.
  - **createdAt**: data e obrigatório.

## **Relacionamentos**
- Um usuário pode ter várias atividades, mas as atividades podem ter apenas 1 usuário.
- Caso um **_User_** seja deletado, todas as relações com **_Activity_** devem ser **deletadas** automaticamente da tabela.

#

## **Rotas - /users e /login**

## Endpoints

| Método | Endpoint   | Responsabilidade                              |
| ------ | ---------- | --------------------------------------------- |
| POST   | /login     | Criar o token de autenticação para um usuário |
| POST   | /users     | Cadastrar um novo usuário                     |
| GET    | /users     | Listar todos os usuários                      |
| PATCH  | /users/:id | Atualizar usuário com autorização e permição  |
| DELETE | /users/:id | Deletar usuário com autorização e permição    |

## **Rotas - /activities**

## Endpoints

| Método | Endpoint        | Responsabilidade             |
| ------ | -------------   | -----------------------------|
| POST   | /activities     | Cadastrar uma nova atividade |
| GET    | /activities     | Listar todas as atividades   |
| DELETE | /activities/:id | Deletar atividade            |

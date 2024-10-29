# Gerenciamento de Alunos - API em Node.js

Este projeto é uma API simples para gerenciar alunos, permitindo criar, editar, buscar e remover alunos. A API foi construída com Node.js e utiliza o Express.

## Pré-requisitos

- Node.js
- Postman (para testar a API)

## Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/julia-carneiro/api_restic.git
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Inicie o servidor:
   ```bash
   npm start
   ```
   O servidor estará rodando em `http://localhost:3000`.

## Endpoints da API

### 1. Criar um Aluno

- **URL**: `POST /alunos`
- **Descrição**: Cria um novo aluno com `nome`, `email` e `nome_curso`.
- **Exemplo de JSON no Body**:
  ```json
  {
    "nome": "Júlia",
    "email": "julia@email.com",
    "nome_curso": "Engenharia"
  }
  ```
- **Resposta**: Retorna o aluno criado com seu `id` único.

### 2. Buscar Todos os Alunos

- **URL**: `GET /alunos`
- **Descrição**: Retorna a lista completa de alunos cadastrados.
- **Resposta**: Array com todos os objetos de alunos.

### 3. Buscar um Aluno Específico

- **URL**: `GET /alunos/:id`
- **Descrição**: Retorna os dados do aluno específico, pelo `id`.
- **Exemplo de Uso**: `GET http://localhost:3000/alunos/{id_do_aluno}`
- **Resposta**: Retorna o objeto do aluno, ou um erro 404 se o aluno não for encontrado.

### 4. Atualizar um Aluno

- **URL**: `PUT /alunos/:id`
- **Descrição**: Atualiza as informações de um aluno específico pelo `id`.
- **Exemplo de Uso**: `PUT http://localhost:3000/alunos/{id_do_aluno}`
- **Exemplo de JSON no Body**:
  ```json
  {
    "nome": "Aluno Editado",
    "email": "novoemail@email.com",
    "nome_curso": "Medicina"
  }
  ```
- **Resposta**: Retorna o aluno atualizado.

### 5. Deletar um Aluno

- **URL**: `DELETE /alunos/:id`
- **Descrição**: Remove o aluno específico pelo `id`.
- **Exemplo de Uso**: `DELETE http://localhost:3000/alunos/{id_do_aluno}`
- **Resposta**: Retorna um status 204 (No Content) para indicar que o aluno foi removido com sucesso.

## Tecnologias Utilizadas

- Node.js
- Express
- UUID para geração de `id` único dos alunos

--- 

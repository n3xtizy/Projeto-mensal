# Api feita em sala de aula

## Tecnologias utilizadas

- Node.js
- TypeScript
- Express
- MongoDB

## Conceitos utilizados

- SOLID
- Injeção de Dependência (Dependency Injection)
- Repository Pattern

## Entidades

<pre>
User {
  id: string;
  name: string;
  age: string;
  address: string;
}</pre>

## Rotas

- GET /alunos - retorna os alunos salvos no banco
- POST /alunos - cria um aluno
- PATCH /alunos/:id - atualiza um aluno
- DELETE /alunos/:id - deleta um aluno

## Arquitetura

![Arquitetura](https://imgur.com/k5mXFoZ.png)

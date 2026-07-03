# Projeto Ágil TechFlow

## Descrição

O Projeto Ágil TechFlow é um sistema web para gerenciamento de tarefas desenvolvido como atividade prática da disciplina de Engenharia de Software.

O objetivo é aplicar conceitos de metodologias ágeis, versionamento de código, integração contínua, testes automatizados e gestão de mudanças utilizando o GitHub.

---

## Objetivo

Desenvolver um sistema simples de gerenciamento de tarefas permitindo:

- Cadastro de tarefas
- Listagem de tarefas
- Edição de tarefas
- Exclusão de tarefas
- Alteração do status das tarefas

---

## Metodologia Ágil

Foi utilizada a metodologia Kanban para organização das atividades.

As tarefas foram distribuídas nas colunas:

- To Do
- In Progress
- Done

permitindo acompanhar a evolução do desenvolvimento.

---

## Tecnologias

- Node.js
- Express
- Git
- GitHub
- GitHub Actions
- Jest

---

## Estrutura do Projeto

```

src/
controllers/
models/
routes/
views/

tests/

docs/

.github/
workflows/

server.js

README.md

```

---

## Execução

Instale as dependências

```
npm install
```

Execute o sistema

```
npm start
```

---

## Testes

Para executar os testes automatizados:

```
npm test
```

---

## Mudança de Escopo

Durante o desenvolvimento foi adicionada uma nova funcionalidade permitindo definir prioridade para cada tarefa (Baixa, Média e Alta), atendendo a uma solicitação simulada do cliente para melhorar a organização das atividades.
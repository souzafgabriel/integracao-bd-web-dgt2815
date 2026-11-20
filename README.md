# 📚 DGT2815 – Integração de Páginas Web com Banco de Dados

Aplicação completa composta por um servidor back-end em Node.js com Express e Mongoose conectado ao MongoDB, integrado a três diferentes aplicações front-end (React, Next.js e Angular) para gerenciamento de um catálogo de livros.

---

## 🎓 Trabalho Acadêmico

* **Disciplina**: DGT2815 – Integração de Páginas Web com Banco de Dados  
* **Atividade**: Trabalho Prático  
* **Instituição**: Faculdade Estácio  

---

## 🚀 Funcionalidades

* 📖 Listagem assíncrona de livros a partir do banco de dados MongoDB
* ➕ Cadastro de novos livros com persistência no banco
* 🏢 Associação de livros com editoras pré-cadastradas
* 🗑️ Exclusão de livros por identificador (`_id`) do MongoDB
* 🔄 Atualização em tempo real das alterações em todos os clientes
* 🌐 Suporte a requisições Cross-Origin (CORS) habilitado no servidor

---

## 🧠 Tecnologias Utilizadas

### Back-end
* **Node.js** + **Express**
* **Mongoose** (ODM para MongoDB)
* **MongoDB** (Banco de dados NoSQL)
* **CORS**

### Front-ends (Clientes)
* **React JS** (com React Router DOM e Bootstrap)
* **Next.js** (Pages Router e Bootstrap)
* **Angular** (Standalone Components e Bootstrap)
* **TypeScript**

---

## 🏗️ Estrutura do Projeto

```
Trabalho/
├── livro-servidor/           # Back-end (Express + Mongoose + MongoDB)
│    ├── bin/www              # Inicialização do servidor (porta 3030)
│    ├── modelo/
│    │    ├── conexao.js      # Conexão com MongoDB
│    │    ├── livro-schema.js # Esquema Mongoose
│    │    └── livro-dao.js    # Operações no banco (CRUD)
│    ├── routes/livros.js     # Rotas HTTP GET, POST, DELETE
│    └── app.js               # Configuração Express e CORS
│
└── clientes/
     ├── livros-react/        # Front-end React (porta 3000)
     ├── livros-next/         # Front-end Next.js (porta 3000)
     └── livros-angular/      # Front-end Angular (porta 4200)
```

---

## ⚙️ Como Executar

### 1. Iniciar o Banco de Dados
Certifique-se de que o **MongoDB** está em execução na porta padrão `27017` com o banco `livraria` e coleção `livros`.

### 2. Iniciar o Servidor (Back-end)
```bash
cd livro-servidor
npm install
npm start
# Servidor disponível em: http://localhost:3030/livros
```

### 3. Iniciar qualquer um dos Clientes (Front-end)

* **React**:
  ```bash
  cd clientes/livros-react
  npm install
  npm start
  # Acesse: http://localhost:3000
  ```

* **Next.js**:
  ```bash
  cd clientes/livros-next
  npm install
  npm run dev
  # Acesse: http://localhost:3000
  ```

* **Angular**:
  ```bash
  cd clientes/livros-angular
  npm install
  npm start
  # Acesse: http://localhost:4200
  ```

---

## 🎯 Objetivos da Prática

* Utilizar o banco de dados MongoDB para repositório NoSQL
* Implementar servidor REST com Express e Mongoose
* Integrar diferentes ecossistemas de front-end (React, Next.js e Angular) a um mesmo back-end HTTP
* Praticar manipulação assíncrona de APIs com `fetch` e Promises (`.then`)

---

## 📄 Licença

Este projeto foi desenvolvido estritamente para fins acadêmicos e educacionais.

# Mercadinho Inteligente — API

Backend do app **Mercadinho Inteligente**, um leitor de rótulos que mostra nota nutricional,
ingredientes e macros de produtos pelo código de barras.

Esta é a **API REST** que o aplicativo consome. Ela faz o CRUD completo de produtos
salvos pelo usuário, com os dados persistidos no **MongoDB Atlas**.


---

## Tecnologias

| Tecnologia | Versão | Para quê |
|---|---|---|
| Node.js | 18+ | execução do JavaScript no servidor |
| Express | 5 | rotas e middlewares da API |
| Mongoose | 8 | modelagem e validação dos dados |
| MongoDB Atlas | banco de dados na nuvem |
| dotenv | 17 | leitura das variáveis do arquivo `.env` |
| cors | 2 | permite que o app acesse a API |

## Como rodar

### 1. Pré-requisitos

- **Node.js 18 ou superior** — confira com `node -v`
- Uma conta gratuita no [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register) com um cluster M0

### 2. Instalar as dependências

```bash
npm install
```

### 3. Criar o arquivo `.env`

Copie o modelo e preencha com a sua string de conexão:

```bash
cp .env.example .env
```

Conteúdo do `.env`:

```env
PORT=3000
NODE_ENV=development
MONGODB_URI=sua_string_de_conexao_aqui
```

### 4. Rodar o servidor

```bash
npm run dev    
# ou
npm start
```

Saída esperada:

```
✔ MongoDB conectado (banco: rotulo)
Servidor rodando em http://localhost:3000
```

### 5. Testar

Com o servidor rodando, em outro terminal:

```bash
curl http://localhost:3000/
```

Resposta: `{"mensagem":"API do Mercadinho no ar!"}`

---

## Endpoints

Base: `http://localhost:3000/api/products`

| Método | Rota | O que faz | Sucesso |
|---|---|---|---|
| `GET` | `/` | lista todos os produtos (mais recentes primeiro) | `200` + array |
| `GET` | `/:id` | busca um produto pelo id | `200` + objeto |
| `POST` | `/` | cadastra um produto | `201` + objeto criado |
| `PUT` | `/:id` | atualiza um produto | `200` + objeto atualizado |
| `DELETE` | `/:id` | remove um produto | `200` + `{ "mensagem": "Produto removido." }` |


## Repositórios da entrega

- **Backend (este repositório):** `https://github.com/SEU-USUARIO/mercadinho-inteligente-api`
- **Frontend (React Native + Expo):** `https://github.com/SEU-USUARIO/mercadinho-inteligente-app`


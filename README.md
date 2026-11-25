# Mercadinho Inteligente — API

Esta API REST do Mercadinho Inteligente é consumida pelo aplicativo para gerenciar os produtos
salvos pelo usuário e seus dados nutricionais.

O aplicativo consulta a [Open Food Facts](https://world.openfoodfacts.org/) por meio de sua API
para obter informações públicas dos produtos pelo código de barras, como nome, marca,
ingredientes, classificação Nutri-Score e valores nutricionais. Os dados selecionados podem ser
enviados a esta API REST e persistidos no **MongoDB Atlas**.

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

---

## Estrutura do projeto

```
mercadinho-inteligente/
├── server.js                     # ponto de entrada: middlewares, rotas e conexão com o banco
├── package.json
├── .env.example                  # modelo das variáveis de ambiente (sem segredos)
├── .gitignore                    # protege o .env e o node_modules
└── src/
    ├── config/
    │   └── database.js           # conexão com o MongoDB Atlas
    ├── models/
    │   └── Product.js            # schema do produto (validações e índice único)
    ├── controllers/
    │   └── productController.js  # regras de cada rota (listar, criar, editar, remover)
    └── routes/
        └── productRoutes.js      # define os endpoints e liga cada um ao controller
```

---

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
HOST=0.0.0.0
NODE_ENV=development
MONGODB_URI=sua_string_de_conexao_aqui
```

### 4. Rodar o servidor

```bash
npm run dev
# ou
npm start
```


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

## Repositórios da entrega

- **Backend (este repositório):** `https://github.com/SEU-USUARIO/mercadinho-inteligente-api`
- **Frontend (React Native + Expo):** `https://github.com/SEU-USUARIO/mercadinho-inteligente-app`

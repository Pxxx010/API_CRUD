# API CRUD com Node.js e MongoDB

Este projeto implementa uma API RESTful usando Node.js e MongoDB. A API realiza operações básicas de CRUD (Create, Read, Update, Delete) para gerenciar uma entidade `Item`. Os IDs dos itens são gerados automaticamente pelo MongoDB.

## Funcionalidades

- **Criar Item:** Adiciona um novo item com um ID gerado automaticamente.
- **Listar Itens:** Recupera todos os itens armazenados.
- **Ler Item:** Obtém detalhes de um item específico por ID.
- **Atualizar Item:** Modifica os dados de um item existente.
- **Deletar Item:** Remove um item do banco de dados.

## Tecnologias Utilizadas

- **Node.js:** Ambiente de execução JavaScript do lado do servidor.
- **Express:** Framework para construção de APIs RESTful.
- **MongoDB:** Banco de dados NoSQL para armazenamento dos itens.
- **Mongoose:** Biblioteca para modelagem de dados no MongoDB.

## Configuração

1. **Clonar o Repositório:**
   ```
   git clone https://github.com/seu-usuario/seu-repositorio.git

   cd seu-repositorio```

2. **Instalar Dependências:**
   ```
   npm install
   ```
3. **Configurar Variáveis de Ambiente:**
   ```
   Crie um arquivo .env na raiz do projeto com o seguinte conteúdo:

   MONGO_URI= INSIRA A URI DO MONGO
   PORT= ESCOLA A PORTA
   ```

2. **Iniciar o Servidor:**
   ```
   npm start
   ```

## Teste da API

Use ferramentas como Postman ou Insomnia para testar os seguintes endpoints:

- **POST** `/api/items`: Criar um novo item.
- **GET** `/api/items`: Listar todos os itens.
- **GET** `/api/items/:id`: Ler um item específico.
- **PUT** `/api/items/:id`: Atualizar um item existente.
- **DELETE** `/api/items/:id`: Deletar um item.

## Contribuições

Sinta-se à vontade para contribuir com melhorias ou correções. Abra uma *issue* ou envie um *pull request* para colaborar.

## Licença

Este projeto está licenciado sob a [Licença MIT](LICENSE).


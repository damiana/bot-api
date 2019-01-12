# bot-api
Implement an API for our Bots.


Links da api de Bot:

- Listar registros de Bot - Metodo get:
    - todos: http://localhost:3000/v1/bots
    - por id: http://localhost:3000/v1/bots/id/1520a540-1670-11e9-aaad-3b0a29a9d607


- Criar um novo registro de Bot - Metodo post:
    - http://localhost:3000/v1/bots
    - enviar parametro no corpo da requisição: { "name": "Claudia" }


- Atualizar um registro de Bot - Metodo put:
    - http://localhost:3000/v1/bots
    - enviar parametro no corpo da requisição: { "id": "3c944910-1670-11e9-aaad-3b0a29a9d607", "name": "Claudia Maria" }


- Deletar um registro de Bot - Metodo delete:
    - http://localhost:3000/v1/bots
    - enviar parametro no corpo da requisição: { "id": "3c944910-1670-11e9-aaad-3b0a29a9d607" }
## Instalação e execução

1. git clone https://github.com/FLVieira/sync-api.git
2. cd sync-api
3. > \$ docker run --name sync-api-postgres -e POSTGRES_PASSWORD=1234 -p 5432:5432 -d postgres
4. > yarn
5. > yarn sequelize db:migrate
6. > yarn sequelize db:seed:all
7. > yarn dev

## Rotas

Se tudo ocorreu bem até aqui significa que a api está rodando, agora, para poder testar as rotas dessa aplicação basta importar o arquivo imsomnia.json na raíz do projeto para o seu imsomnia.

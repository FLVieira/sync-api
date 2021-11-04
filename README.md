## Instalação e execução

> git clone https://github.com/FLVieira/sync-api.git \
> cd sync-api \
> docker run --name sync-api-postgres -e POSTGRES_PASSWORD=1234 -p 5432:5432 -d postgres \
> yarn \
> yarn sequelize db:migrate \
> yarn sequelize db:seed:all \
> yarn dev

## Rotas

Se tudo ocorreu bem até aqui significa que a api está rodando, agora, para poder testar as rotas dessa aplicação basta importar o arquivo imsomnia.json na raíz do projeto para o seu imsomnia.

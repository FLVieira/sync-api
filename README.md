## Instalação e execução

> git clone https://github.com/FLVieira/sync-api.git \
> cd sync-api \
> docker run --name sync-api-postgres -e POSTGRES_PASSWORD=1234 -p 5432:5432 -d postgres \
> yarn \
> yarn sequelize db:migrate \
> yarn sequelize db:seed:all \
> yarn dev


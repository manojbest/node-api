# Lucky-one-API

#### start docker container
`docker-compose up --build`
- this will start `MySql` server

#### create migrations
`npx sequelize-cli migration:generate --name create-< name of the table >`

#### migrations
run `db:migrate-all` script in package.json or `npx sequelize-cli db:migrate` command

#### create seeder
`npx sequelize-cli seed:generate  --name seed-< name of the table >`

#### all seeds
run `db:seed-all` script in package.json or `npx sequelize-cli db:seed:all` command

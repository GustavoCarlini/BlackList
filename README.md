# BlackList
Projeto Cpf BlackList MaxMilhas

Instalar dependecias-> yarn
rodar -> yarn dev

Utilizei dbsqlite, o comando para conseguir rodar a migration "yarn typeorm migration:run"

Comandos adicionais das migrations:
//yarn typeorm migration:create -n NomeDaMigration ->criar migration
//yarn typeorm migration:run -> executar migrations
//yarn typeorm migration:revert -> reverte a ultima migration
//yarn typeorm entity:create -n NomeDaEntity


Foi criada uma tabela BlackList no banco, dois controllers, um para o blackList, para gerenciar o insert de cpfs, o delete de cpfs e o find de cpfs e o outro controller para gerenciar a rota de status como solicitada que retorna as informações de uptime do servidor, quantidade de consultas realizadas desde o último restart e quantidade de CPFs na blacklist.

Uma pasta Utils, para criação de funções para auxiliar tanto da rota reserva como na validação do CPF/máscara na consulta e inclusão

Atendendo todos os pedidos obrigatorios e opcionais, só tive um problema com os testes unitários, pois acabei utilizando um banco docker postgres e não consegui executar os testes, por motivos que eu não consegui resolver, então ficou faltando apenas isso para entregar 100% do que foi solicitado

## Tecnologias

* Node.JS
* Typescript
* TypeORM
* SQLite
* Sequelize
* Jest
* Docker
* Postgres
* String-mask

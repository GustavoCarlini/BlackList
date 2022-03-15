import { createConnection } from 'typeorm';

createConnection();

//yarn typeorm migration:create -n NomeDaMigration -> criar migration

//yarn typeorm migration:run -> executar migrations
//yarn typeorm migration:revert -> reverte a ultima migration
//yarn typeorm entity:create -n NomeDaEntity
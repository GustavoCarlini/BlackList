import {MigrationInterface, QueryRunner, Table} from "typeorm";
 

export class CreateBlackList1647189023577 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: 'BlackList',
              columns: [
                {
                  name: 'id',
                  type: 'uuid',
                  isPrimary: true,
                },
                {
                  name: 'cpf',
                  type: 'varchar',
                },
            ]
            }),
          );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.dropTable('BlackList')
    }

}

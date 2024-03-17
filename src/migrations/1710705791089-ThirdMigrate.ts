import { MigrationInterface, QueryRunner } from "typeorm";

export class ThirdMigrate1710705791089 implements MigrationInterface {
    name = 'ThirdMigrate1710705791089'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "activities" DROP COLUMN "adress"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "activities" ADD "adress" character varying(200) NOT NULL`);
    }

}

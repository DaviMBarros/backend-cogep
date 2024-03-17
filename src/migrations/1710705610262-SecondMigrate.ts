import { MigrationInterface, QueryRunner } from "typeorm";

export class SecondMigrate1710705610262 implements MigrationInterface {
    name = 'SecondMigrate1710705610262'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "activities" DROP COLUMN "password"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "activities" ADD "password" character varying(120) NOT NULL`);
    }

}

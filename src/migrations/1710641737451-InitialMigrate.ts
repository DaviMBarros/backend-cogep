import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigrate1710641737451 implements MigrationInterface {
    name = 'InitialMigrate1710641737451'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "activities" ("id" SERIAL NOT NULL, "name" character varying(45) NOT NULL, "description" character varying(300) NOT NULL, "startDate" date NOT NULL, "endDate" date NOT NULL, "createdAt" date NOT NULL DEFAULT now(), "password" character varying(120) NOT NULL, "adress" character varying(200) NOT NULL, "userId" integer, CONSTRAINT "PK_7f4004429f731ffb9c88eb486a8" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "name" character varying(45) NOT NULL, "phone" character varying(15) NOT NULL, "email" character varying(45) NOT NULL, "adress" character varying(200) NOT NULL, "password" character varying(120) NOT NULL, CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "activities" ADD CONSTRAINT "FK_5a2cfe6f705df945b20c1b22c71" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "activities" DROP CONSTRAINT "FK_5a2cfe6f705df945b20c1b22c71"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "activities"`);
    }

}

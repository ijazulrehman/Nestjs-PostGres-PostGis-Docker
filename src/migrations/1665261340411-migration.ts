import { MigrationInterface, QueryRunner } from "typeorm";

export class migration1665261340411 implements MigrationInterface {
    name = 'migration1665261340411'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "categories" ("id" integer NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_24dbc6126a28ff948da33e97d3b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "professions" ("id" integer NOT NULL, "name" character varying NOT NULL, "categoryId" integer, CONSTRAINT "PK_9247c0d4b30fc6b796d59262058" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "jobs" ("id" SERIAL NOT NULL, "contract_type" character varying NOT NULL, "name" character varying NOT NULL, "location" geography(Point,4326), "professionId" integer, CONSTRAINT "PK_cf0a6c42b72fcc7f7c237def345" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_f803a854cd07320ee634d8887f" ON "jobs" USING GiST ("location") `);
        await queryRunner.query(`ALTER TABLE "professions" ADD CONSTRAINT "FK_645a1d0d5535782604ba2e254f4" FOREIGN KEY ("categoryId") REFERENCES "categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "jobs" ADD CONSTRAINT "FK_af4043c296e7da7496402be556a" FOREIGN KEY ("professionId") REFERENCES "professions"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "jobs" DROP CONSTRAINT "FK_af4043c296e7da7496402be556a"`);
        await queryRunner.query(`ALTER TABLE "professions" DROP CONSTRAINT "FK_645a1d0d5535782604ba2e254f4"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_f803a854cd07320ee634d8887f"`);
        await queryRunner.query(`DROP TABLE "jobs"`);
        await queryRunner.query(`DROP TABLE "professions"`);
        await queryRunner.query(`DROP TABLE "categories"`);
    }

}

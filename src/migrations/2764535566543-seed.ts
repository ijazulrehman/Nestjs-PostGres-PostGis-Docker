//

//
import { MigrationInterface, QueryRunner } from 'typeorm';
import jobs from '../data/jobs.json';
import categories from '../data/categories.json';
import professions from '../data/professions.json';
import { Category } from '../categories/entities/category.entity';
import { Profession } from '../professions/entities/profession.entity';
import { Job } from '../jobs/entities/job.entity';
export class migration1665255129547 implements MigrationInterface {
  name = 'seeds2764535566543';
  connectionName = 'default';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager.save(Category, categories);

    const profs: any = professions.map((profession) => {
      const { id, name, category_id } = profession;
      return { id, name, category: category_id };
    });

    await queryRunner.manager.save(Profession, profs);

    const jbs: any = jobs.map((job) => {
      const {
        profession_id: profession,
        contract_type,
        name,
        latitude,
        longitude,
      } = job;
      return {
        profession: profession ? profession : null,
        contract_type,
        name,
        location: {
          type: 'Point',
          coordinates: [longitude, latitude],
        },
      };
    });
    console.log(jbs);
    await queryRunner.manager.getRepository(Job).save(jbs as Job);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}

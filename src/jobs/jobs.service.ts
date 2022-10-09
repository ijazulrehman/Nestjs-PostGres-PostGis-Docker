import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GetJobsQueryDto } from './dto/get-jobs-query.dto';
import { Job } from './entities/job.entity';
import { OfferResponseEntity } from './entities/offer-reponse.entity';

@Injectable()
export class JobsService {
  constructor(
    @InjectRepository(Job)
    private jobsRepository: Repository<Job>,
  ) {}

  async find(params: GetJobsQueryDto): Promise<OfferResponseEntity> {
    const sqlQuery = `select
        "job"."id" as "id",
        contract_type ,
        "job"."name" as "name", 
        "profession"."name" as "profession",
        ST_Distance(ST_MakePoint(${params.longitude},${params.latitude}),
        "job"."location")/ 1609 as "proximity"
      from
        "jobs" "job"
      inner join "professions" "profession" on
        "profession"."id" = "job"."professionId"
      where
        ST_DWithin("job"."location",
        ST_MakePoint(${params.longitude},${params.latitude})::geography,
        ${params.radius * 1609}) 
      order by proximity
      offset ${(params.page - 1) * params.pageSize}
      limit ${params.pageSize}`;
    return await this.jobsRepository.query(sqlQuery);
  }
}

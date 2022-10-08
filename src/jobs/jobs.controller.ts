import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ValidationPipe,
} from '@nestjs/common';
import { JobsService } from './jobs.service';
import { Query } from '@nestjs/common';
import { GetJobsQueryDto } from './dto/get-jobs-query.dto';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { Job } from './entities/job.entity';

@ApiTags('jobs')
@Controller('jobs')
export class JobsController {
  constructor(private readonly jobsService: JobsService) {}

  @Get('offers')
  @ApiOkResponse({
    type: [Job],
  })
  @ApiOperation({
    tags: ['Jobs', 'Offers'],
    summary: 'Filter offers based on location',
    description:
      'Endpoint to retrieve the offers depending on a given position and a predefined radius.',
  })
  findAll(
    @Query(new ValidationPipe({ whitelist: true })) params: GetJobsQueryDto,
  ) {
    console.log(params);
    return this.jobsService.find(params);
  }
}

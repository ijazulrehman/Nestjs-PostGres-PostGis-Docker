import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNumber, Min } from 'class-validator';

//
export class GetJobsQueryDto {
  @ApiProperty({
    description: 'Radius in KM',
    required: true,
    example: '10',
  })
  @Type(() => Number)
  @IsNumber()
  radius: number;

  @ApiProperty({
    description: 'Latitude',
    required: true,
    example: '48.8659387',
  })
  @Type(() => Number)
  @IsNumber()
  latitude: number;

  @ApiProperty({
    description: 'Longitude',
    required: true,
    example: '2.34532',
  })
  @Type(() => Number)
  @IsNumber()
  longitude: number;

  @ApiProperty({
    description: 'page, by default it will be 1',
    required: false,
    example: 1,
  })
  @Type(() => Number)
  @Min(1)
  @IsNumber()
  page: number = 1;

  @ApiProperty({
    description: 'pageSize, by default it will be 10',
    required: false,
    example: 10,
  })
  @Type(() => Number)
  @IsNumber()
  pageSize: number = 10;
}

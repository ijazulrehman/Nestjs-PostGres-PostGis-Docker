import {
  Column,
  Entity,
  Index,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Point } from 'geojson';
import { Profession } from '../../professions/entities/profession.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity({
  name: 'jobs',
})
export class Job {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column()
  contract_type: string;

  @ApiProperty()
  @Column()
  name: string;

  @ApiProperty()
  @Index({ spatial: true })
  @Column({
    type: 'geography',
    spatialFeatureType: 'Point',
    srid: 4326,
    nullable: true,
  })
  location: Point;

  @ApiProperty()
  @ManyToOne(() => Profession, (profession) => profession.jobs)
  profession: Profession;
}

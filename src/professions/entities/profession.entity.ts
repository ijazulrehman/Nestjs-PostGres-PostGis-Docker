import { Category } from '../../categories/entities/category.entity';
import { Job } from '../../jobs/entities/job.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity({
  name: 'professions',
})
export class Profession {
  @ApiProperty()
  @PrimaryColumn()
  id: number;

  @ApiProperty()
  @Column()
  name: string;

  @ApiProperty()
  @ManyToOne(() => Category, (category) => category.professions)
  category: Category;

  @ApiProperty()
  @OneToMany(() => Job, (job) => job.profession)
  jobs: Job[];
}

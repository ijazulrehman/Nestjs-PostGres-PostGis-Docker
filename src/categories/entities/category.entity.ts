import { Profession } from '../../professions/entities/profession.entity';
import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity({
  name: 'categories',
})
export class Category {
  @ApiProperty()
  @PrimaryColumn()
  id: number;

  @ApiProperty()
  @Column()
  name: string;

  @ApiProperty()
  @OneToMany(() => Profession, (profession) => profession.category)
  professions: Profession[];
}

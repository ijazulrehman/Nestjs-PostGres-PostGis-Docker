import { ApiProperty } from '@nestjs/swagger';

//
export class OfferResponseEntity {
  @ApiProperty()
  id: number;

  @ApiProperty()
  contract_type: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  profession: string;

  @ApiProperty()
  proximity: number;
}

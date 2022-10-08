import {
  Controller,
} from '@nestjs/common';
import { ProfessionsService } from './professions.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('professions')
@Controller('professions')
export class ProfessionsController {
  constructor(private readonly professionsService: ProfessionsService) {}
}

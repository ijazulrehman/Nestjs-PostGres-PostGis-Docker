import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Profession } from './entities/profession.entity';
import { ProfessionsService } from './professions.service';

describe('ProfessionsService', () => {
  let service: ProfessionsService;

  let mockProfessionsRepo = {};
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ProfessionsService,
        {
          provide: getRepositoryToken(Profession),
          useValue: mockProfessionsRepo,
        },
      ],
    }).compile();

    service = module.get<ProfessionsService>(ProfessionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

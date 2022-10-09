import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Job } from './entities/job.entity';
import { JobsService } from './jobs.service';

export const mockOfferFilterQueryParams = {
  page: 1,
  pageSize: 10,
  radius: 10,
  latitude: 48.8659387,
  longitude: 2.34532,
};

export const mockOfferFiterRespnse = [
  {
    id: 489,
    contract_type: 'INTERNSHIP',
    name: 'Stage - Product Manager H/F',
    profession: 'Gestion de Projet / Produit',
    proximity: 0.011554424512119328,
  },
  {
    id: 31,
    contract_type: 'FULL_TIME',
    name: 'Développeur Backend Ruby (Go/Elixir) H/F',
    profession: 'Développement Backend',
    proximity: 0.011554424512119328,
  },
  {
    id: 4643,
    contract_type: 'FULL_TIME',
    name: 'Développeur Full Stack (React JS / Ruby  [ Go / Elixir ]) H/F',
    profession: 'Développement Fullstack',
    proximity: 0.011554424512119328,
  },
  {
    id: 4684,
    contract_type: 'INTERNSHIP',
    name: 'Stage - Cadreur / Monteur',
    profession: 'Production audiovisuelle',
    proximity: 0.011554424512119328,
  },
  {
    id: 1917,
    contract_type: 'INTERNSHIP',
    name: 'Account Manager - Stage',
    profession: 'Relation client / Support',
    proximity: 0.011554424512119328,
  },
  {
    id: 2930,
    contract_type: 'INTERNSHIP',
    name: 'Stage - Brand content manager',
    profession: 'Communication / Création',
    proximity: 0.011554424512119328,
  },
  {
    id: 4404,
    contract_type: 'FULL_TIME',
    name: 'Responsable commandes internet et service client',
    profession: 'Relation client / Support',
    proximity: 0.02880604043505283,
  },
  {
    id: 3417,
    contract_type: 'FULL_TIME',
    name: "Business Developper avec un super esprit d'entrepreneur",
    profession: 'BizDev / Vente',
    proximity: 0.06616491007458049,
  },
  {
    id: 3444,
    contract_type: 'FULL_TIME',
    name: "Business développeur avec esprit d'entrepreneur",
    profession: 'BizDev / Vente',
    proximity: 0.06616491007458049,
  },
  {
    id: 960,
    contract_type: 'FULL_TIME',
    name: 'Business Developper / Chef de projet',
    profession: 'BizDev / Vente',
    proximity: 0.06616491007458049,
  },
];

describe('JobsService', () => {
  let service: JobsService;

  let mockJobsRepo = {
    query: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        JobsService,
        {
          provide: getRepositoryToken(Job),
          useValue: mockJobsRepo,
        },
      ],
    }).compile();

    service = module.get<JobsService>(JobsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('find', async () => {
    mockJobsRepo.query.mockReturnValue(mockOfferFiterRespnse);

    const res = await service.find(mockOfferFilterQueryParams);
    expect(mockJobsRepo.query).toBeCalled();
    expect(res).toBe(mockOfferFiterRespnse);
  });
});

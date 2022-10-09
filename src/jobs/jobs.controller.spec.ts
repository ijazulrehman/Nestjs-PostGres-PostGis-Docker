import { Test, TestingModule } from '@nestjs/testing';
import { JobsController } from './jobs.controller';
import { JobsService } from './jobs.service';
import {
  mockOfferFiterRespnse,
  mockOfferFilterQueryParams,
} from './jobs.service.spec';

describe('JobsController', () => {
  let controller: JobsController;

  let mockService = {
    find: jest.fn(),
  };
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [JobsController],
      providers: [
        {
          provide: JobsService,
          useValue: mockService,
        },
      ],
    }).compile();

    controller = module.get<JobsController>(JobsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should be defined', async () => {
    mockService.find.mockReturnValue(mockOfferFiterRespnse);

    const res = await controller.findAll(mockOfferFilterQueryParams);
    expect(mockService.find).toBeCalledWith(mockOfferFilterQueryParams);
    expect(res).toBe(mockOfferFiterRespnse);
  });
});

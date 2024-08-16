import { Test, TestingModule } from '@nestjs/testing';
import { DogGateway } from './dog.gateway';
import { DogService } from './dog.service';

describe('DogGateway', () => {
  let gateway: DogGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DogGateway, DogService],
    }).compile();

    gateway = module.get<DogGateway>(DogGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});

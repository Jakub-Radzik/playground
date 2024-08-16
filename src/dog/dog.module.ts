import { Module } from '@nestjs/common';
import { DogService } from './dog.service';
import { DogGateway } from './dog.gateway';

@Module({
  providers: [DogGateway, DogService],
})
export class DogModule {}

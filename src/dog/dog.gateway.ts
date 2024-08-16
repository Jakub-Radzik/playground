import { WebSocketGateway, SubscribeMessage, MessageBody } from '@nestjs/websockets';
import { DogService } from './dog.service';
import { CreateDogDto } from './dto/create-dog.dto';
import { UpdateDogDto } from './dto/update-dog.dto';
import { UseFilters } from '@nestjs/common';
import { AllExceptionsFilterFilter } from './exception-filters/all-exceptions-filter/all-exceptions-filter.filter';

@WebSocketGateway()
@UseFilters(new AllExceptionsFilterFilter())
export class DogGateway {
  constructor(private readonly dogService: DogService) {}

  @SubscribeMessage('createDog')
  create(@MessageBody() createDogDto: CreateDogDto) {
    return this.dogService.create(createDogDto);
  }

  @SubscribeMessage('findAllDog')
  findAll() {
    return this.dogService.findAll();
  }

  @SubscribeMessage('findOneDog')
  findOne(@MessageBody() id: number) {
    return this.dogService.findOne(id);
  }

  @SubscribeMessage('updateDog')
  update(@MessageBody() updateDogDto: UpdateDogDto) {
    return this.dogService.update(updateDogDto.id, updateDogDto);
  }

  @SubscribeMessage('removeDog')
  remove(@MessageBody() id: number) {
    return this.dogService.remove(id);
  }
}

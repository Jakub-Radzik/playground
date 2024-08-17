import { WebSocketGateway, SubscribeMessage, MessageBody, WsException } from '@nestjs/websockets';
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
    try {
      return this.dogService.findOne(id);
    } catch (e) {
      return new WsException(e.message);
    }
  }

  @SubscribeMessage('updateDog')
  update(@MessageBody() updateDogDto: UpdateDogDto) {
    return this.dogService.update(updateDogDto.id, updateDogDto);
  }

  @SubscribeMessage('removeDog')
  remove(@MessageBody('id') id: number) {
    try {
      return this.dogService.remove(id);
    } catch (error) {
      return new WsException((error as Error).message);
    }
  }
}

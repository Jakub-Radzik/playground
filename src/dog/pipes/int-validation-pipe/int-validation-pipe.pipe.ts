import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class IntValidationPipePipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    const parsedVal = parseInt(value, 10);

    console.log('IntValidationPipePipe: ', parsedVal);

    if(isNaN(parsedVal)) {
      throw new BadRequestException('Validation failed');
    }

    return parsedVal;
  }
}

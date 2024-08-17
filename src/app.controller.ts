import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigService } from '@nestjs/config';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private configService: ConfigService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('config')
  getConfig() {
    console.log(this.configService)
    console.log(this.configService.get<string>('DATABASE_USER'));
    console.log(this.configService.get<string>('a'));

    return {
      dbUser: this.configService.get<string>('dbUser'),
      dbPassword: this.configService.get<string>('DATABASE_PASSWORD'),
    }
  }
}

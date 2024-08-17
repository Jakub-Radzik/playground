import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatModule } from './cat/cat.module';
import { DogModule } from './dog/dog.module';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration';

@Module({
  imports: [ConfigModule.forRoot({
    envFilePath: ['.env', '.env.local'],
    isGlobal: true,
    load: [configuration],
  }), CatModule, DogModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CovidDataModule } from './covid-data/covid-data.module';

@Module({
  imports: [CovidDataModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';

import { DataCovidController } from './covid-data.controller';
import { CovidDataService } from './covid-data.service';

@Module({
  imports: [HttpModule],
  controllers: [DataCovidController],
  providers: [CovidDataService],
  exports: [CovidDataService],
})
export class CovidDataModule {}

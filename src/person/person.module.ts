import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { PersonController } from './person.controller';
import { PersonService } from './person.service';
import { Person } from './person.entity';
import { CovidDataModule } from '../covid-data/covid-data.module';

@Module({
  imports: [TypeOrmModule.forFeature([Person]), CovidDataModule],
  controllers: [PersonController],
  providers: [PersonService],
})
export class PersonModule {}

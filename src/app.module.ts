import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { ConfigModule } from '@nestjs/config';

import { CovidDataModule } from './covid-data/covid-data.module';
import { DatabaseModule } from './database/database.module';
import { PersonModule } from './person/person.module';

@Module({
  imports: [
    PersonModule,
    CovidDataModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ScheduleModule.forRoot(),
    DatabaseModule,
  ],
})
export class AppModule {}

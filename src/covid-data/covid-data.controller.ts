import { Controller, Get, Query } from '@nestjs/common';

import { CovidDataService } from './covid-data.service';
import { Person, PersonAgeQueries } from '../interfaces';

@Controller('data-covid')
export class DataCovidController {
  constructor(private readonly CovidDataService: CovidDataService) {}

  @Get('')
  getBySexoAndEdad(@Query() params: PersonAgeQueries): Promise<Person[]> {
    return this.CovidDataService.getByFilter(params);
  }
}

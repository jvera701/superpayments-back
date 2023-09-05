import { Controller, Get, Query } from '@nestjs/common';

import { PersonService } from './person.service';
import { PersonLocationQueries } from '../interfaces';

@Controller('person')
export class PersonController {
  constructor(private readonly PersonService: PersonService) {}

  @Get('')
  getByFilter(@Query() params: PersonLocationQueries) {
    return this.PersonService.getByFilter(params);
  }
}

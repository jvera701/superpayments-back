import { Controller, Get, Query } from '@nestjs/common';

import { PersonService } from './person.service';
import { PersonLocationQueries } from '../interfaces';

@Controller('person')
export class PersonController {
  constructor(private readonly PersonService: PersonService) {}

  @Get('')
  async getByFilter(@Query() params: PersonLocationQueries) {
    const answer = await this.PersonService.getByFilter(params);
    return answer.map((p) => p.id_de_caso);
  }
}

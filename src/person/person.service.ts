import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cron, CronExpression } from '@nestjs/schedule';

import { Person } from './person.entity';
import { CovidDataService } from '../covid-data/covid-data.service';
import { PersonLocationQueries } from '../interfaces';

@Injectable()
export class PersonService {
  private readonly logger = new Logger(PersonService.name);

  constructor(
    @InjectRepository(Person) private personRepository: Repository<Person>,
    private dataCovidService: CovidDataService,
  ) {}

  async getByFilter(params: PersonLocationQueries): Promise<Person[]> {
    const { sex, state, city } = params;
    const query = this.personRepository
      .createQueryBuilder()
      .select('Person.id_de_caso');

    city && query.andWhere('Person.ciudad_municipio_nom = :city', { city });
    sex && query.andWhere('Person.sexo = :sex', { sex });
    state && query.andWhere('Person.estado = :state', { state });

    const people = await query.getMany();
    return people;
  }

  @Cron(CronExpression.EVERY_10_MINUTES)
  private async cronJob() {
    const dataCovid = await this.dataCovidService.getAll();
    await this.personRepository.save(dataCovid);
  }
}

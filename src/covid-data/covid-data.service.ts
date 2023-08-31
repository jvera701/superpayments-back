import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';

import { Person, PersonQueryParams } from '../interfaces';

@Injectable()
export class CovidDataService {
  ageGroups: Map<string, number[]> = new Map([
    ['0-20', [0, 20]],
    ['21-40', [21, 40]],
    ['41', [41]],
  ]);

  constructor(private readonly httpService: HttpService) {}

  endpoint = 'https://www.datos.gov.co/resource/gt2j-8ykr.json';

  private async getAll(): Promise<Person[]> {
    try {
      const response = await firstValueFrom(
        this.httpService.get(this.endpoint),
      );
      return response.data;
    } catch (error) {
      throw new Error(`Error fetching COVID data: ${error.message}`);
    }
  }

  public async getByFilter(params: PersonQueryParams) {
    const { sex, groupAge } = params;
    const data = await this.getAll();

    return data.filter((item) => {
      let condition = true;
      // Filter by sex
      if (sex) {
        condition = condition && item.sexo === sex;
      }

      // filter by group age
      if (groupAge) {
        const [min, max] = this.ageGroups.get(groupAge);
        const age = parseInt(item.edad, 10);
        if (max) {
          condition = condition && age >= min && age <= max;
        }
        condition = condition && age >= min;
      }

      return condition;
    });
  }
}

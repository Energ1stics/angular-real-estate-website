import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import HousingType from '../../models/housing-type';
import { HOUSING_TYPES } from './mock-housing-types';

@Injectable({
  providedIn: 'root',
})
export class HousingTypeService {
  getHousingTypes(): Observable<HousingType[]> {
    const housingTypes = of(HOUSING_TYPES);

    return housingTypes;
  }
}

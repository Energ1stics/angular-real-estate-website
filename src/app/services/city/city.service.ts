import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { CITIES } from './mock-cities';
import { City } from '../../models/city';

@Injectable({
  providedIn: 'root',
})
export class CityService {
  getCities(): Observable<City[]> {
    const cities = of(CITIES);

    return cities;
  }
}

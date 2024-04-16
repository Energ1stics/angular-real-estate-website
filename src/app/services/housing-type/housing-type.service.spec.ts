import { TestBed } from '@angular/core/testing';

import { HousingTypeService } from './housing-type.service';

describe('HousingTypeService', () => {
  let service: HousingTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HousingTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

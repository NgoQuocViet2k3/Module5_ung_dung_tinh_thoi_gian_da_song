import { TestBed } from '@angular/core/testing';

import { DateUnitService } from './date-unit.service';

describe('DateUnitService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DateUnitService = TestBed.get(DateUnitService);
    expect(service).toBeTruthy();
  });
});

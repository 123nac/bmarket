import { TestBed } from '@angular/core/testing';

import { BirraDataService } from './birra-data.service';

describe('BirraDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BirraDataService = TestBed.get(BirraDataService);
    expect(service).toBeTruthy();
  });
});

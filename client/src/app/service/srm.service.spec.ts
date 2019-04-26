import { TestBed } from '@angular/core/testing';

import { SrmService } from './srm.service';

describe('SrmService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SrmService = TestBed.get(SrmService);
    expect(service).toBeTruthy();
  });
});

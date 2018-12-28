import { TestBed } from '@angular/core/testing';

import { EventshareService } from './eventshare.service';

describe('EventshareService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EventshareService = TestBed.get(EventshareService);
    expect(service).toBeTruthy();
  });
});

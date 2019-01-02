import { TestBed } from '@angular/core/testing';

import { DownloadtemplateService } from './downloadtemplate.service';

describe('DownloadtemplateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DownloadtemplateService = TestBed.get(DownloadtemplateService);
    expect(service).toBeTruthy();
  });
});

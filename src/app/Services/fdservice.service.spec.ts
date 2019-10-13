import { TestBed } from '@angular/core/testing';

import { FDServiceService } from './fdservice.service';

describe('FDServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FDServiceService = TestBed.get(FDServiceService);
    expect(service).toBeTruthy();
  });
});

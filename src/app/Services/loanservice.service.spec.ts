import { TestBed } from '@angular/core/testing';

import { LoanserviceService } from './loanservice.service';

describe('LoanserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoanserviceService = TestBed.get(LoanserviceService);
    expect(service).toBeTruthy();
  });
});

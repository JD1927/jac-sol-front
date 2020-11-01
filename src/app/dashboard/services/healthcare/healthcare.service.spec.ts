import { TestBed } from '@angular/core/testing';

import { HealthcareService } from './healthcare.service';

describe('HealthcareService', () => {
  let service: HealthcareService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HealthcareService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

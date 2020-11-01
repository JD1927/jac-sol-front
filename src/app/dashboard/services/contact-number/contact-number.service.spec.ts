import { TestBed } from '@angular/core/testing';

import { ContactNumberService } from './contact-number.service';

describe('ContactNumberService', () => {
  let service: ContactNumberService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContactNumberService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

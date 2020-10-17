import { TestBed } from '@angular/core/testing';

import { AdminItemService } from './admin-item.service';

describe('AdminItemService', () => {
  let service: AdminItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

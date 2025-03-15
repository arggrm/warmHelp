import { TestBed } from '@angular/core/testing';

import { MisProductosStatusService } from './mis-productos-status.service';

describe('MisProductosStatusService', () => {
  let service: MisProductosStatusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MisProductosStatusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

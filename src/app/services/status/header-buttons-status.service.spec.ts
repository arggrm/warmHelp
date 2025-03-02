import { TestBed } from '@angular/core/testing';

import { HeaderButtonsStatusService } from './header-buttons-status.service';

describe('HeaderButtonsService', () => {
  let service: HeaderButtonsStatusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeaderButtonsStatusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

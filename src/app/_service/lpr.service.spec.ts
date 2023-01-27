import { TestBed } from '@angular/core/testing';

import { LprService } from './lpr.service';

describe('LprService', () => {
  let service: LprService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LprService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

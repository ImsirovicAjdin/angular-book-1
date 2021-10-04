import { TestBed } from '@angular/core/testing';

import { SomedataService } from './somedata.service';

describe('SomedataService', () => {
  let service: SomedataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SomedataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

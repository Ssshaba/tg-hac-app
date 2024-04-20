import { TestBed } from '@angular/core/testing';

import { RandompersonService } from './randomperson.service';

describe('RandompersonService', () => {
  let service: RandompersonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RandompersonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

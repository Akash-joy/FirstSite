import { TestBed } from '@angular/core/testing';

import { ForcheckboxService } from './forcheckbox.service';

describe('ForcheckboxService', () => {
  let service: ForcheckboxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ForcheckboxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

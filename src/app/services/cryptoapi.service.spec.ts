import { TestBed } from '@angular/core/testing';

import { CryptoapiService } from './cryptoapi.service';

describe('CryptoapiService', () => {
  let service: CryptoapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CryptoapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

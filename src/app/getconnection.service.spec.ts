import { TestBed } from '@angular/core/testing';

import { GetconnectionService } from './getconnection.service';

describe('GetconnectionService', () => {
  let service: GetconnectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetconnectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

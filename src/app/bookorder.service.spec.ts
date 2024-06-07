import { TestBed } from '@angular/core/testing';

import { BookorderService } from './bookorder.service';

describe('BookorderService', () => {
  let service: BookorderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookorderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

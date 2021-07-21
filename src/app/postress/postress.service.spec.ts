import { TestBed } from '@angular/core/testing';

import { PostressService } from './postress.service';

describe('PostressService', () => {
  let service: PostressService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostressService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

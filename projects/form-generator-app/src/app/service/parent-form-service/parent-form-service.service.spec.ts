import { TestBed } from '@angular/core/testing';

import { ParentFormServiceService } from './parent-form-service.service';

describe('ParentFormServiceService', () => {
  let service: ParentFormServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParentFormServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

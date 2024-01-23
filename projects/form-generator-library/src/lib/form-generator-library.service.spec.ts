import {TestBed} from '@angular/core/testing';

import {FormGeneratorLibraryService} from './form-generator-library.service';

describe('FormGeneratorLibraryService', () => {
  let service: FormGeneratorLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormGeneratorLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

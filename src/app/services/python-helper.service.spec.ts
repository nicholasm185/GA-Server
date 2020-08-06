import { TestBed } from '@angular/core/testing';

import { PythonHelperService } from './python-helper.service';

describe('PythonHelperService', () => {
  let service: PythonHelperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PythonHelperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

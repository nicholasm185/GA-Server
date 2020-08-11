import { TestBed } from '@angular/core/testing';

import { PreferenceTrackerService } from './preference-tracker.service';

describe('PreferenceTrackerService', () => {
  let service: PreferenceTrackerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PreferenceTrackerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

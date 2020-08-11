import { TestBed } from '@angular/core/testing';

import { CheckConstraintsGuard } from './check-constraints.guard';

describe('CheckConstraintsGuard', () => {
  let guard: CheckConstraintsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CheckConstraintsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

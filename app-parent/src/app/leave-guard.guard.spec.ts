import { TestBed } from '@angular/core/testing';

import { LeaveGuardGuard } from './leave-guard.guard';

describe('LeaveGuardGuard', () => {
  let guard: LeaveGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LeaveGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

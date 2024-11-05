import { TestBed } from '@angular/core/testing';

import { CourseIntakeService } from './course-intake.service';

describe('CourseIntakeService', () => {
  let service: CourseIntakeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CourseIntakeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

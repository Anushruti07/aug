import { TestBed } from '@angular/core/testing';

import { NewNoticeService } from './new-notice.service';

describe('NewNoticeService', () => {
  let service: NewNoticeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewNoticeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

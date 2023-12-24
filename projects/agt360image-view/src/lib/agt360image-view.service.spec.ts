import { TestBed } from '@angular/core/testing';

import { Agt360imageViewService } from './agt360image-view.service';

describe('Agt360imageViewService', () => {
  let service: Agt360imageViewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Agt360imageViewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

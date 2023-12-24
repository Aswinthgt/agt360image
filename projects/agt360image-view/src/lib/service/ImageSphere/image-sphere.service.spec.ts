import { TestBed } from '@angular/core/testing';

import { ImageSphereService } from './image-sphere.service';

describe('ImageSphereService', () => {
  let service: ImageSphereService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImageSphereService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

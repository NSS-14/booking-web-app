import { TestBed } from '@angular/core/testing';

import { ServicePresentationService } from './service-presentation.service';

describe('ServicePresentationService', () => {
  let service: ServicePresentationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicePresentationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

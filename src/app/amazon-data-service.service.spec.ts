import { TestBed } from '@angular/core/testing';

import { AmazonDataServiceService } from './amazon-data-service.service';

describe('AmazonDataServiceService', () => {
  let service: AmazonDataServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AmazonDataServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

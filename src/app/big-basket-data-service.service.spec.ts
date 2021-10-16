import { TestBed } from '@angular/core/testing';

import { BigBasketDataServiceService } from './big-basket-data-service.service';

describe('BigBasketDataServiceService', () => {
  let service: BigBasketDataServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BigBasketDataServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { OrderproductService } from './orderproduct.service';

describe('OrderproductService', () => {
  let service: OrderproductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrderproductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

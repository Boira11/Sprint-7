import { TestBed } from '@angular/core/testing';

import { CalculaPressupostTotalService } from './calcula-pressupost-total.service';

describe('CalculaPressupostTotalService', () => {
  let service: CalculaPressupostTotalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculaPressupostTotalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

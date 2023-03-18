import { TestBed } from '@angular/core/testing';

import { ServeSumaPrecioPaginasService } from './serve-suma-precio-paginas.service';

describe('ServeSumaPrecioPaginasService', () => {
  let service: ServeSumaPrecioPaginasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServeSumaPrecioPaginasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

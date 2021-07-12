import { TestBed } from '@angular/core/testing';

import { WebEmprestimoService } from './web-emprestimo.service';

describe('WebEmprestimoService', () => {
  let service: WebEmprestimoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebEmprestimoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

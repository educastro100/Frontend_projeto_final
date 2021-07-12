import { TestBed } from '@angular/core/testing';

import { WebPedidoService } from './web-pedido.service';

describe('WebPedidoService', () => {
  let service: WebPedidoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebPedidoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { WebLivrosService } from './web-livros.service';

describe('WebLivrosService', () => {
  let service: WebLivrosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebLivrosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

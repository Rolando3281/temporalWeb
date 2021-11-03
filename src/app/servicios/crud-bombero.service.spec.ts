import { TestBed } from '@angular/core/testing';

import { CrudBomberoService } from './crud-bombero.service';

describe('CrudBomberoService', () => {
  let service: CrudBomberoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrudBomberoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

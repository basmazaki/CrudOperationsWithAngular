import { TestBed } from '@angular/core/testing';

import { BankProcessService } from './bank-process.service';

describe('BankProcessService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BankProcessService = TestBed.get(BankProcessService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { GetAllBanksService } from './get-all-banks.service';

describe('GetAllBanksService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetAllBanksService = TestBed.get(GetAllBanksService);
    expect(service).toBeTruthy();
  });
});

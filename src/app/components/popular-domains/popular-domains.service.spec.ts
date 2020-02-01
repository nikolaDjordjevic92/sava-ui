import { TestBed } from '@angular/core/testing';

import { PopularDomainsService } from './popular-domains.service';

describe('PopularDomainsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PopularDomainsService = TestBed.get(PopularDomainsService);
    expect(service).toBeTruthy();
  });
});

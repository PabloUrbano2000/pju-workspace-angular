import { TestBed } from '@angular/core/testing';

import { PjuSideMenuService } from './pju-side-menu.service';

describe('PjuSideMenuService', () => {
  let service: PjuSideMenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PjuSideMenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

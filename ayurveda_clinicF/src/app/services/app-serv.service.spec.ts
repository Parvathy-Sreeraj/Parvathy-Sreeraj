import { TestBed } from '@angular/core/testing';

import { AppServService } from './app-serv.service';

describe('AppServService', () => {
  let service: AppServService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

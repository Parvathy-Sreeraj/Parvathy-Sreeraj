import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditadvertisementComponent } from './editadvertisement.component';

describe('EditadvertisementComponent', () => {
  let component: EditadvertisementComponent;
  let fixture: ComponentFixture<EditadvertisementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditadvertisementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditadvertisementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

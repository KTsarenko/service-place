import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMastersComponent } from './create-masters.component';

describe('CreateMastersComponent', () => {
  let component: CreateMastersComponent;
  let fixture: ComponentFixture<CreateMastersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateMastersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateMastersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

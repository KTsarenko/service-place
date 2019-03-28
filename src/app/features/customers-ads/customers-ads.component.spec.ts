import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersAdsComponent } from './customers-ads.component';

describe('CustomersAdsComponent', () => {
  let component: CustomersAdsComponent;
  let fixture: ComponentFixture<CustomersAdsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomersAdsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomersAdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

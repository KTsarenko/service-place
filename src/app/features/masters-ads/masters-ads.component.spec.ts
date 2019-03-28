import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MastersAdsComponent } from './masters-ads.component';

describe('MastersAdsComponent', () => {
  let component: MastersAdsComponent;
  let fixture: ComponentFixture<MastersAdsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MastersAdsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MastersAdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
